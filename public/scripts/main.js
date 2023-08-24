const numButtons = document.querySelectorAll(".calc-num-keys");
const optButtons = document.querySelectorAll(".calc-opt-keys");
const calcOutput = document.querySelector("#calcOutput");
const calcButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clearAll");
const delButton = document.querySelector("#delBtn");
const realButton = document.querySelector("#realBtn");

let currentInput = "";
let operator = "";
let firstOperand = null;

numButtons.forEach((button) => {
	button.addEventListener("click", () => {
		currentInput += button.textContent;
		calcOutput.value = currentInput;
	});
});

optButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (firstOperand === null) {
			firstOperand = parseFloat(currentInput);
			operator = button.textContent;
			currentInput = "";
		}
	});
});

clearButton.addEventListener("click", () => {
	currentInput = "";
	operator = "";
	firstOperand = null;
	calcOutput.value = "";
});

delButton.addEventListener("click", () => {
	currentInput = currentInput.slice(0, -1);
	calcOutput.value = currentInput;
});

realButton.addEventListener("click", () => {
	if (currentInput !== "") {
		currentInput = parseFloat(currentInput) * -1;
		calcOutput.value = currentInput;
	}
});

calcButton.addEventListener("click", () => {
	if (operator && currentInput !== "") {
		const secondOperand = parseFloat(currentInput);
		let result;

		switch (operator) {
			case "+":
				result = firstOperand + secondOperand;
				break;
			case "-":
				result = firstOperand - secondOperand;
				break;
			case "x":
				result = firstOperand * secondOperand;
				break;
			case "÷":
				result = firstOperand / secondOperand;
				break;
		}

		calcOutput.value = result;
		currentInput = result;
		operator = "";
		firstOperand = null;
	}
});
