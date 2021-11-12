var formulario = document.body.querySelector('form');
var botaoAdd = document.body.querySelector('button');
var vetorTarefas = new Array();
var jasonLocalStorage;
var _local_storage;

botaoAdd.onclick = function() {
    var valorTarefa = document.getElementById('tarefa');
    _local_storage = localStorage.getItem('tarefas');

    if (formulario.checkValidity()) {
        if (_local_storage === null) 
        {
            var json = '{"tarefas": ["' + valorTarefa.value + '"]}';

            var objeto = JSON.parse(json);

            jasonLocalStorage = JSON.stringify(objeto);

            localStorage.setItem('tarefas', jasonLocalStorage);

        } else {

            vetorTarefas = JSON.parse(_local_storage);
            vetorTarefas['tarefas'].push(valorTarefa.value.trim());
            jasonLocalStorage = JSON.stringify(vetorTarefas);
            localStorage.setItem('tarefas', jasonLocalStorage);
                }
        criarLista(valorTarefa.value);
       valorTarefa.value = ''; 
    }
}

function criarLista(lista) {
    
    

    var ul = document.getElementById('listaTarefas');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(lista));
    ul.appendChild(li);
    
   
   var buttonDel = document.createElement('button');
    buttonDel.innerHTML = "X" //"<img src=../imagens/x.png>";
    buttonDel.style.marginLeft = '10px';
    buttonDel.setAttribute("id", lista);
    buttonDel.onclick = function() { excluirItem(this) };

     li.appendChild(buttonDel);
    
 
} 

function marcarFeito(elemento){

}



function excluirItem(elemento) {
    _local_storage = localStorage.getItem('tarefas');
    var objeto = JSON.parse(_local_storage);
    vetorTarefas = objeto.tarefas;

    var novo_array = vetorTarefas.filter(valor => valor !== elemento.id);

    objeto.tarefas = novo_array;
    _local_storage = JSON.stringify(objeto);
    localStorage.setItem('tarefas', _local_storage);

    elemento.parentElement.remove();

}
