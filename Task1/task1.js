function runTask() {
  const str1 = document.getElementById("input1").value;
  const str2 = document.getElementById("input2").value;

  if (str1 === str2) {
    alert(`The strings "${str1}" and "${str2}" are equal!`);
  } else {
    alert(`The strings "${str1}" and "${str2}" are NOT equal.`);
  }
}
