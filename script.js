let displayField = document.getElementById("display");

function addNumber(num) {
  displayField.value += num;
}

function addOperator(operator) {
  displayField.value += operator;
}

function calculatePercentage() {
  if (displayField.value == "") {
    alert("Please enter a valid number");
  } else {
    displayField.value = eval(displayField.value / 100);
  }
}

function execute() {
  if (displayField.value == "") {
    alert("Please enter a number");
  } else {
    let result = eval(displayField.value);
    displayField.value = result;
  }
}

function clearDisplay() {
  displayField.value = "";
}

function erase() {
  let input = displayField.value;
  displayField.value = input.substring(0, input.length - 1);
}
