 
		function adicionarTarefa(){
			var lista = document.getElementsByTagName('input');
			var i;
                   //pegue a sua lista já criada!
			var listaTarefas = document.getElementById('lista')
			for (i = 0; i < lista.length; i++) {
				var novaTarefa = document.createElement('li'); 
				novaTarefa.innerHTML = lista[i].value;                       //add um novo item!
				listaTarefas.appendChild(novaTarefa);
				lista[i].value = ''; //limpara  caixa de texto 
			}
			var listaTarefas = document.getElementById('lista');
			listaTarefas.appendChild(lista);
		}
	

    function excluirTarefa(){
        listaTarefas.removeChild(lista[]);
    }