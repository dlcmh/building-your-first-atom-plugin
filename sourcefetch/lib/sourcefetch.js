'use babel';

import { CompositeDisposable } from 'atom'
import request from 'request'
import cheerio from 'cheerio'

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sourcefetch:fetch': () => this.fetch()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  fetch() {
    let editor
    let self = this

    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      this.download(selection).then((html) => {
        let answer = self.scrape(html)
        if (answer === '') {
          atom.notifications.addWarning('No answer found :(')
        } else {
          editor.insertText(answer)
        }
      }).catch((error) => {
        atom.notifications.addWarning(error.reason)
      })
    }
  },

  scrape(html) {
    $ = cheerio.load(html)
    return $('.accepted-answer pre code').text()
  },

  download(url) {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          resolve(body)
        } else {
          reject({
            reason: 'Unable to download page'
          })
        }
      })
    })
  }
};
