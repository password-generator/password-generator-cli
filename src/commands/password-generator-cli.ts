import { generatePassword, Preferences } from 'password-generator-package'

import { GluegunCommand } from 'gluegun'
import ExtendedGluegunToolbox from 'src/interfaces/extended-gluegun-toolbox'

const command: GluegunCommand = {
  name: 'password-generator-cli',
  run: (toolbox: ExtendedGluegunToolbox) => {
    const {
      showBanner,
      print,
      parameters: { options }
    } = toolbox

    showBanner({ text: 'Password-Generator|CLI' })

    const preferences: Preferences = {
      length: options.length || options.l,
      initialText: options.initialText || options.initTxt,
      cases: {
        uppercase: options.uppercase || options.upcs,
        lowercase: options.lowercase || options.lwcs,
        numbers: options.numbers || options.num,
        symbols: options.symbols || options.sym
      }
    }

    try {
      const password = generatePassword(preferences)

      print.success('Password generated with success!')
      print.info(password)
    } catch (error) {
      print.error(error)
    }
  }
}

export default command
