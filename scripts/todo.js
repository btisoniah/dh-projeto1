
function addElemento() {
var inserirValor = document.getElementById("novaTarefa").value //valor que for digitado na caixa... 
var li = document.createElement("li");
var x = document.createTextNode(inserirValor);

  li.appendChild(x); 
  document.getElementById("lista").appendChild(li);
  document.getElementById("novaTarefa").value = ""; 
  
   for (i = 0; i < lista.length; i++) {
    lista[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



