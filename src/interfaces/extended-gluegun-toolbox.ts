import { IHelperExtendedGluegunToolbox } from '@lenne.tech/cli-plugin-helper/src'

import { ShowBanner } from 'src/extensions/showBanner'

export default interface ExtendedGluegunToolbox extends IHelperExtendedGluegunToolbox {
  showBanner: ShowBanner
}
