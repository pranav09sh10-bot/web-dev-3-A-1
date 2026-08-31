// Get command-line arguments
const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

// Check whether numbers are valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
    process.exit();
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            process.exit();
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply, divide");
        process.exit();
}

console.log("Result:", result);
