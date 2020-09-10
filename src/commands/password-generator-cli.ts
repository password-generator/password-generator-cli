import { generatePassword, Preferences } from 'password-generator-package'

import { GluegunCommand } from 'gluegun'
import ExtendedGluegunToolbox from 'src/interfaces/extended-gluegun-toolbox'

const command: GluegunCommand = {
  name: 'password-generator-cli',
  run: (toolbox: ExtendedGluegunToolbox) => {
    const {
      showBanner,
      print: { info, success, error },
      parameters: { options },
    } = toolbox

    showBanner({ text: 'Password-Generator|CLI' })

    const preferences: Preferences = {
      length: options.length || options.l,
      initialText: options.initialText || options.initTxt,
      cases: {
        pronounceable: options.pronounceable || options.pronunc,
        uppercase: options.uppercase || options.upcs,
        lowercase: options.lowercase || options.lwcs,
        numbers: options.numbers || options.num,
        symbols: options.symbols || options.sym,
      },
    }

    try {
      const password = generatePassword(preferences)

      success('Password generated with success!')
      info(password)
    } catch (e) {
      error(`ERROR: ${e.message}!`)
      info('Try use --help flag for more informations\n')
    }
  },
}

export default command
