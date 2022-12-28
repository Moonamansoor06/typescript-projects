#! /usr/bin/env node
import clear from "clear";
import figlet from "figlet";
import colors from "colors";
import inquirer from "inquirer";
async function main() {
    clear();
    console.log(colors.magenta(figlet.textSync("TODO ", { horizontalLayout: "full" })));
    console.log('\n');
    const msg1 = colors.rainbow("input your todo ");
    const msg2 = colors.rainbow("keep entering ");
    const msg3 = colors.rainbow("todo status  ");
    let arrStatus = ["done", "pending", "in progress"];
    let playAgain = true;
    let todoList = [{}];
    todoList.splice(0, todoList.length);
    while (playAgain) {
        let answers = await inquirer.prompt([
            {
                name: "todo",
                type: "string",
                message: msg1,
            },
            {
                name: "status",
                type: "list",
                message: msg3,
                choices: arrStatus
            },
            {
                name: "play",
                type: "confirm",
                message: msg2
            }
        ]);
        const { todo, play, status } = answers;
        todoList.push({ todo, status });
        if (!play) {
            playAgain = false;
        }
    }
    console.log('\n');
    console.log(colors.rainbow(figlet.textSync("TODO list ", { horizontalLayout: "fitted" })));
    todoList.map((todos, index) => {
        console.log(index + 1, todos);
    });
}
main();
