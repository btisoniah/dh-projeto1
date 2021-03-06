var formulario = document.body.querySelector('form');
var botaoAdd = document.body.querySelector('button');
var vetorTarefas = new Array();
var jasonLocalStorage;
var _local_storage;

//criarLista(); 

botaoAdd.onclick = function() {
    var valorTarefa = document.getElementById('tarefa');
    _local_storage = localStorage.getItem('tarefas');

    if (formulario.checkValidity()) {
        if (_local_storage === null || _local_storage.length === 0) 
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
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.style.marginLeft = '30px'; 
    li.appendChild(input); //inserir botao checked 
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
    
 
} 

// function marcarFeito(elemento){
//  {

// }



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
