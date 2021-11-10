 //var elementoLista = document.querySelector('ul');
// var elementoInput = document.querySelector('input');
// var elementoBotao = document.querySelector('button');

function incluirElemenetoNaLista() {
 
  var inserirValor = document.getElementById("novaTarefa").value //valor que for digitado na caixa... 
  var li = document.createElement("li");
  var x = document.createTextNode(inserirValor);
  li.appendChild(x); 
  document.getElementById("lista").appendChild(li);
  document.getElementById("novaTarefa").value = ""; 
  console.log(inserirValor)
  
   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



