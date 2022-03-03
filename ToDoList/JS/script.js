//Criando um botão de fechar para cada elemento da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
//laço para adicionar a todos os elementos
for(i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SAPN");
    var txt = document.createTextNode("\u007D");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Removendo o elemento da lista
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Adicionando o "Check" a atividade

//selecionando a "ul"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//criar a função para adicionar um novo item na lista.
function newElement(){
    //cria um li
    var li = document.createElement("li");
    //pega o valor do "inputTask"
    var inputValue = document.getElementById("inputTask").value;
    //transforma o valor do inputTask em um texto e adiciona na variavel "T"
    var t = document.createTextNode(inputValue);
    //Adiciona o texto trasnformado de T na Lista(li)
    li.appendChild(t);
    //Alerta de campo vazio
    if (inputValue === ''){
        alert("Você deve escrever algo!");
    } 
    else{ //se o texto for validado, acrescenta o "li" ao "Ul" 
        document.getElementById("myUL").appendChild(li);
    }
    //limpa o campo de input da tarefa
    document.getElementById("inputTask").value="";

    //Adiciona a funcionalidade ao botão "X"
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

