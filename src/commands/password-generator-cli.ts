import { GluegunCommand } from 'gluegun'
import ExtendedGluegunToolbox from 'src/interfaces/extended-gluegun-toolbox'

const command: GluegunCommand = {
  name: 'password-generator-cli',
  run: (toolbox: ExtendedGluegunToolbox) => {
    const {
      showBanner
    } = toolbox

    showBanner({ text: 'Password Generator CLI' })
  }
}

export default command
