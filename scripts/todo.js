var elementoLista = document.querySelector('ul');
var elementoInput = document.querySelector('input');
var elementoBotao = document.querySelector('button');

const listaTarefas = [];

function exibirTarefas() {

  for (tarefa of listaTarefas) {
    const itemTarefa = document.createElement('li')
    const textodaTarefa = document.createTextNode(tarefa)
    itemTarefa.appendChild(textodaTarefa)
    elementoLista.appendChild(itemTarefa);
  }
}

function incluirTarefas() {
  var textodaTarefa = elementoInput.value
  listaTarefas.push(textodaTarefa)

}