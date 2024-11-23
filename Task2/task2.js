function runTask() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);

  if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
  } else if (num1 < num2) {
    alert(`${num1} is less than ${num2}`);
  } else {
    alert(`${num1} is equal to ${num2}`);
  }
}
