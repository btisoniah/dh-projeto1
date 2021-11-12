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
       
    }
}

function criarLista(lista) {
    var ul = document.getElementById('listaTarefas');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(lista));
    ul.appendChild(li);
    
    var button = document.createElement('button');
    button.innerHTML = "xxxxxx";
    button.className = "btnItemExcluir";
    button.style.marginLeft = '10px';
    button.style.backgroundColor = 'red';
    button.setAttribute("id", lista);
    button.onclick = function() { excluirItem(this) };
    li.appendChild(button);
    
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

function marcarFeita(elemnto) {}