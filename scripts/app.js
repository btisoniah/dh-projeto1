
const valorInput = document.querySelector('.novaTarefa');
const valorBotao = document.querySelector('.botaoAdicionar');
const valorLista = document.querySelector('.lista');

console.log(valorLista);

// //registrar o evento que acontece ao clicar no botao e abrir função
valorBotao.addEventListener('click', addElemento); 
valorLista.addEventListener('click', delElemento); 

function addElemento() {
      
     const divLista = document.createElement('div');
     divLista.classList.add('conteudo');

     const liLista = document.createElement('li');
     liLista.classList.add('lista');
     liLista.innerText = valorInput.value;
     valorInput.value = '' 
li

     divLista.appendChild(liLista); //adicionado a LI ao div 

     const buttonOk = document.createElement('button');
     buttonOk.innerHTML = '<i class="fas fa-check"></i>';
     buttonOk.classList.add('completed-btn')
     divLista.appendChild(buttonOk);

     const buttonDelete = document.createElement('button');
     buttonDel.innerHTML = '<i class="fas fa-trash"></i>';
     buttonDel.classList.add('trash-bnt')
     divLista.appendChild(buttonDelete);

     valorLista.appendChild(divLista)
     
}

funcios delElemento()

