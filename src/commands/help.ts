import yargs from 'yargs'

import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'help',
  run: () => {
    yargs
      .usage('Usage: $0 <command> [options]')
      .command('$0', 'Generate password')

      .number('length')
      .alias('l', 'length')
      .describe('length', 'Set password length')

      .string('initial-text')
      .alias('init-txt', 'initial-text')
      .describe('initial-text', 'Set string on behind of the password')

      .boolean('pronounceable')
      .alias('pronunc', 'pronounceable')
      .describe(
        'pronounceable',
        'Creates a password with pronounceable phonetics'
      )

      .boolean('uppercase')
      .alias('upcs', 'uppercase')
      .describe('uppercase', 'Create password with uppercase chars')

      .boolean('lowercase')
      .alias('lwcs', 'lowercase')
      .describe('lowercase', 'Create password with lowercase chars')

      .boolean('numbers')
      .alias('num', 'numbers')
      .describe('numbers', 'Create password with numbers chars')

      .boolean('symbols')
      .alias('sym', 'symbols')
      .describe('symbols', 'Create password with symbols chars')

      .alias('h', 'help')

      .parse()
  },
}

export default command
