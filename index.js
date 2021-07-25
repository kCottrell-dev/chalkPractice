
// Chalk Lab


const chalk = require('chalk'); // like improt command from python
const chalkAnimation = require('chalk-animation');
const log = console.log;

log(chalk.yellow.inverse.bold.underline('\t\t\tOzymandias'));
log(`
 ________________________________________________________________
(________________________________________________________________)
    | |${chalk.yellow('I met a traveller from an atique land')}                 | | 
    | |${chalk.yellow('Who said: Two vast and trunkless legs of stone')}        | |  
    | |${chalk.yellow('Stand in the desert. Near them, on the')} ${chalk.yellow.bold('sand')},         | |
    | |${chalk.yellow('Half sunk, a shattered visage lies, whose frown')}       | |  
    | |${chalk.yellow('And wrinkled lip, and sneer of cold command,')}          | |  
    | |${chalk.yellow('Tell that its sculptor will those passions read')}       | |  
    | |${chalk.yellow('Which yet survive, stamped on these lifeless things,')}  | |  
    | |${chalk.yellow('The hand that mocked them and the heart that fed:')}     | |  
    | |${chalk.yellow.bold('And on the pedestal these words appear:')}          | |  
    | |${chalk.yellow.bold('\'My name is')} ${chalk.bold.red('OZYMANDIAS')}${chalk.yellow.bold(', king of kings')}
    | |${chalk.yellow('Look on my works, ye Mighty, and despair!\'')}                 | |
    | |${chalk.yellow('Nothing beside remains. Round the decay')}               | |
    | |${chalk.yellow('Of that colossal wreck, boundless and bare')}            | |
    | |${chalk.yellow.italic.dim('The lone and level sands stretch far away.')}             | |
  __| |______________________________________________________| |__
 (________________________________________________________________)
 `)
 chalkAnimation.karaoke('\t\tBy Percy Bysshe Shellev', 6)