Based on [Building your first Atom plugin](https://github.com/blog/2231-building-your-first-atom-plugin).

Atom Package Manager command line too installed? `apm -v`

Generate starter code named 'sourcefetch' with `cmd-shift-p > Package Generator: Generate Package`. Enter the full path to the package, eg '~/projects/building-your-first-atom-plugin/sourcefetch'.

Running the starter code:

- `cmd-shift-p > Window: Reload` -> ensures Atom runs latest version of source code - needs to be run before changes made to the package can be tested
- repeatedly run `menu > Packages > sourcefetch > Toggle` or `cmd-shift-p > sourcefetch: Toggle` to view the seeded functionality in action

Code for seeded functionality is in 'lib/sourcefetch.js'.

Make `sourcefetch:toggle` reverse selected text.

To install NodeJS modules:

- navigate to the package's root folder
- `npm install --save request@2.79.0`
- `apm install`

To view the new http download function in action:

- open a new window
- activate `menu > View > Developer > Toggle Developer Tools` or `option-cmd-i`
- select a piece of URL text and run `Sourcefetch:Fetch` from `cmd-shift-p` or press `ctrl-option-o`

Change `download()` to return a Promise so that we can insert the downloaded `body` into the editor. A Promise returns values obtained asynchronously by wrapping the asynchronous logic in a function that provides two callbacks - `resolve` for returning a value successfully, and `reject` to notify the caller of an error.
