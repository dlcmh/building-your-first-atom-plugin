Based on [Building your first Atom plugin](https://github.com/blog/2231-building-your-first-atom-plugin).

Atom Package Manager command line too installed? `apm -v`

Generate starter code named 'sourcefetch' with `cmd-shift-p > Package Generator: Generate Package`. Enter the full path to the package, eg '~/projects/building-your-first-atom-plugin/sourcefetch'.

Running the starter code:

- `cmd-shift-p > Window: Reload` -> ensures Atom runs latest version of source code - needs to be run before changes made to the package can be tested
- repeatedly run `menu > Packages > sourcefetch > Toggle` or `cmd-shift-p > sourcefetch: Toggle` to view the seeded functionality in action

Code for seeded functionality is in 'lib/sourcefetch.js'.

Make `sourcefetch:toggle` reverse selected text.
