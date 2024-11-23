function runTask() {
  const value = document.getElementById("input1").value;

  function evaluateValue(input) {
    if (input.toLowerCase() === "break") {
      return "You said yes!";
    } else if (input.toLowerCase() === "school") {
      return "You said no!";
    } else {
      return "Input not recognized.";
    }
  }

  const result = evaluateValue(value);
  alert(result);
}
