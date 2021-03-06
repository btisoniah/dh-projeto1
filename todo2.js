var formulario = document.body.querySelector('form');
var botaoAdd = document.body.querySelector('button');
var vetorTarefas = new Array();
var jasonLocalStorage;
var _local_storage;

//funcao para criar a tarefa na lista de tarefas e salvar cada item no localStorage 
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
//funcão para criar o item na lista, mostrar o check e mostrar o botão deletar 
function criarLista(lista) {
    var ul = document.getElementById('listaTarefas');
    var li = document.createElement('li');
    li.appendChild(criarBotaoCheckBox()); //inserir botao checked 
    li.appendChild(document.createTextNode(lista)); //criar elemento na na lista 
    ul.appendChild(li); //inserir o elemento na lista 
    li.appendChild(criaBotaoDeletar()); // inserir o botao deletar, chamar a função para deletar 

//funcao para deletar item da lista ao clicar no botão
function criaBotaoDeletar(){ 
   var buttonDel = document.createElement('button');
    buttonDel.innerHTML = "X" 
    buttonDel.style.marginLeft = '30px';
    buttonDel.setAttribute("id", lista);
    buttonDel.onclick = function() { excluirItem(this)};
    return buttonDel;
}
//funcao para criar botaoCheckBox
function criarBotaoCheckBox() {
    var buttonInput = document.createElement('input');
    buttonInput.setAttribute('type', 'checkbox');
    buttonInput.style.marginRight = '30px'; 
    buttonInput.onchange = function() { marcarFeito(this)};
    return buttonInput;
    }
}
//funcao para excluir o item ao clicar no botãoDeletar 
function excluirItem(elemento) {
   
    var confirmar = confirm("Tem certeza que deseja excluir esta tarefa?")
    if (confirmar == true)
    {
     _local_storage = localStorage.getItem('tarefas');
     var objeto = JSON.parse(_local_storage);
     vetorTarefas = objeto.tarefas;
 
     var novo_array = vetorTarefas.filter(valor => valor !== elemento.id);
 
     objeto.tarefas = novo_array;
     _local_storage = JSON.stringify(objeto);
     localStorage.setItem('tarefas', _local_storage);
 
     elemento.parentElement.remove();
    } 
    else {
        alert("Você desistiu de excluir a tarefa!")
    }
 
 }
 
 

 function marcarFeito(){

    const cbElement = document.querySelector('input[type=checkbox]')
    if (cbElement.checked ==true) {
        valor.Tarefa.setAttribute.text-decoration: 'line-through'
    } 
    
 }

