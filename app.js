function ketqua() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  for (let i = Math.ceil(Math.sqrt(a)); i < Math.ceil(Math.sqrt(b)); i++) {
    document.write(i * i + " ");
  }
}
