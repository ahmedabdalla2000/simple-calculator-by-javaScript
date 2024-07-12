// const display = document.getElementById("display");
// function appendDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = '';
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     }
//     catch (error) {
//         display.value = 'error';
//     }
// }with on click at html code
const input = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            }
            catch (error) {
                input.value = 'error try Again';
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.toString().slice(0, -1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    }
    )
})

