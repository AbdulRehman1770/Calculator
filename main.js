#! /usr/bin/env node
import inquirer from "inquirer";
let user_Input = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { messgae: "Enter Second Number", type: "number", name: "SecondNumber" },
    { message: "Choose Operation",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
switch (user_Input.Operators) {
    case "Addition":
        console.log(`Addition Of Two Numbers is : ${user_Input.FirstNumber + user_Input.SecondNumber}`);
        break;
    case "Subtraction":
        console.log(`Subtraction Of Two Numbers is : ${user_Input.FirstNumber - user_Input.SecondNumber}`);
        break;
    case "Multiplication":
        console.log(`Multiplication Of Two Numbers is : ${user_Input.FirstNumber * user_Input.SecondNumber}`);
        break;
    case "Division":
        console.log(`Division Of Two Numbers is : ${user_Input.FirstNumber / user_Input.SecondNumber}`);
        break;
}
