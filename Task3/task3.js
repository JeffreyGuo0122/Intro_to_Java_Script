function runTask() {
  const str1 = document.getElementById("input1").value;
  const str2 = document.getElementById("input2").value;

  function concatenateStrings(a, b) {
    return a + " " + b;
  }

  const result = concatenateStrings(str1, str2);
  alert(`error: "${result}"`);
}
