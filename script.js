const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button"); // Use querySelectorAll to select all buttons
const operators = ["%", "*", "/", "+", "-", "="];
let output = "";

const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
        output = eval(output.replace("%", "/100")); // Be cautious with using eval()
    } else if (btnvalue === "AC") {
        output = "";
    } else if (btnvalue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && operators.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output; // Update display after calculation
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
