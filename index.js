var detalheProdutos = document.getElementById("detalhe-produtos-bg");
var body = document.getElementById("body")

function openDetalhes(){
  detalheProdutos.style.display = 'flex'
  body.style.overflowY = "hidden";
}

function closeDetalhes(){
  detalheProdutos.style.display = 'none'
  body.style.overflowY = "scroll";
}


detalheProdutos.addEventListener("click", function(event){
  if(event.srcElement.id == "detalhe-produtos-bg"){
    closeDetalhes()
  
  }
})