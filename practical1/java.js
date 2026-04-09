function pattern() {
  let n = document.getElementById("num").value;
  let r = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      r+= j;

    }
    r += "\n";
  }

  document.getElementById("output").textContent = r;
}