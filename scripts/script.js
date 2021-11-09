const elementoLista = document.querySelector('ul'); 
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button'); 

const listaTarefas = ['teste']; 

function exibirTarefas (){
    for (let i=0; listaTarefas.length)
    const elementoTarefa = document.createElement('li')
    const textoTarefa = document.createTextNode('tarefa')
}

function adicionarTarefa(){ 
const textoTarefa = elementoInput.value
listaTarefas.push(textoTarefa)
elementoInput.value = ''; //limpa o imput após adicionar tarefa 
}