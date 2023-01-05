#! /usr/bin/env node
import clear from "clear";
import figlet from "figlet";
import colors from "colors";
import chalk from "chalk";
import inquirer from "inquirer";
function main() {
    clear();
    {
        console.log(``);
        console.log(chalk.green(figlet.textSync("Word Counter", { horizontalLayout: "full" })));
        console.log('\n');
        const msg1 = colors.rainbow("please enter few lines of text ");
        console.log("");
        async function oper() {
            await inquirer
                .prompt([
                {
                    name: "text",
                    type: "input",
                    message: msg1,
                },
            ])
                .then((answers) => {
                const Str = answers.text;
                let split = Str.split(' ');
                let count = 0;
                for (var i = 0; i < split.length; i++) {
                    if (split[i] != "") {
                        count++;
                    }
                }
                console.log(chalk.blueBright.bold(`\n \n there are total ${count} words presnt in this text`));
            });
        }
        async function doAgain() {
            let msg4 = chalk.greenBright('\n Do you wish to continue, press y or Yes');
            let playAgain;
            do {
                await oper();
                playAgain = await inquirer.prompt([{
                        name: "play",
                        type: "input",
                        message: msg4
                    }]);
            } while (playAgain.play == 'yes' || playAgain.play == 'y' || playAgain.play == 'Yes' || playAgain.play == 'Y');
        }
        ;
        doAgain();
    }
}
main();
