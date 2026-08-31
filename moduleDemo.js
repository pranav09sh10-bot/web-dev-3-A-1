const isEven = require("./isEven");

const numbers = [10, 15, 20, 25, 30];

numbers.forEach((number) => {
    if (isEven(number)) {
        console.log(number, "is Even");
    } else {
        console.log(number, "is Odd");
    }
});
