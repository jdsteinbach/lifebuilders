const fs = require('fs')
const path = require('path')
const sass = require('sass')
const postcss = require('postcss')

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = 'style.scss'

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `./scss/${fileName}`)
    return {
      permalink: `css/${fileName.replace('scss', 'css')}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath)
    }
  }

  async render ({ rawCss, rawFilepath }) {
    const sassToCss = sass.compile(rawFilepath)

    return await postcss([
      require('autoprefixer'),
      require('cssnano')({
        from: undefined,
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ])
    .process(sassToCss.css.toString())
    .then(result => result.css)
  }
}
