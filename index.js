var botaoProdutos = document.getElementById("butom-produtos");
var produtoBar = document.getElementById("produtos");
var seta = document.getElementById("arrow");

var exibindo = false;

botaoProdutos.addEventListener("click", (event) => {
  if (!exibindo) {
    produtoBar.style.display = 'flex';
    produtoBar.style.flexDirection = 'column';
    seta.style.transform = 'rotate(225deg)';
    exibindo = true;
  } else {
    produtoBar.style.display = 'none';
    seta.style.transform = 'rotate(45deg)';
    exibindo = false;
  }
});
