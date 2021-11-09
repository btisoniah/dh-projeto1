const elementoLista = document.querySelector('ul'); 
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button'); 

const listaTarefas = []; 

function exibirTarefas (){
    for (tarefa of listaTarefas){
    const itemTarefa = document.createElement('li')
    const textoTarefa = document.createTextNode(tarefa)

    itemTarefa.appendChild(textoTarefa)
    elementoLista.appendChild(itemTarefa); 
}
}
exibirTarefas() 



// function adicionarTarefa(){ 

//     var descricaoTarefa = document.getElementById("novaTarefa").value

//     var tarefa 
// }

// function adicionarTarefa() {
//     const tarefa = inputElement.value 
//     listaTarefas.push(tarefa)
//     inputElement.value = ''; //limpar o campo input 
//     exibirTarefas()
// // }

// var botaoAdicionar = document.getElementById("button");
// var input = document.getElementById("novaTarefa");
// var ul = document.getElementById("lista");
// var item = document.getElementsByTagName("li");

// function valorInput() {
//   return input.value.length;
// }

// function criarElementoLista() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = ""; //para voltar ao placeholder original 

//   var botaoDeletar = document.createElement("button"); 
//   botaoDeletar.appendChild(document.createTextNode("X")); //botao para excluir 
//   li.appendChild(botaoDeletar); 
//   botaoDeletar.addEventListener("click", deletarItem)

// function deletarItem(){
//   li.classList.add("delete")
// }
// } 


