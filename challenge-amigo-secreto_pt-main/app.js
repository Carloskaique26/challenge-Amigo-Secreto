//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; //array para salvar nomes

// adicionando nomes na lista
function adicionarAmigo () {
   let inputAmigo = document.getElementById ("amigo");
   let  adicionandoAmigo = inputAmigo.value.trim();
   if ( adicionandoAmigo === "") {
     alert ("Digite um nome válido.");
     return;
   }
  if (amigos.includes(adicionandoAmigo)){
    alert (`"${adicionandoAmigo}" já está na lista.`);
    limparCampo();
    return;
  }
  amigos.push(adicionandoAmigo);
  console.log(amigos);
  limparCampo();
  listaVisivel();
}

//limpar o campo de texto
function limparCampo() {
  let campo = document.getElementById("amigo");
  campo.value= " ";
}

//tornando a lista visível na tela 
function listaVisivel () {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = " ";

 //formatando os nomes em lista 
  for ( let item = 0; item < amigos.length; item++) {
  let li = document.createElement('li');
  li.textContent = amigos[item];
  lista.appendChild(li);
  }
}

//sorteando nomes 
function sortearAmigo() {
  if (amigos.length === 0) {
    alert ("Lista de amigos vazia. Adicione nomes para sorteio.");
    return;
  };


  //utilizando math.random para gerar número aleatório
  let sorteador = Math.floor(Math.random()* amigos.length);
  let amigoSorteado = amigos[sorteador];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML= `Amigo sorteado é o : ${amigoSorteado} !`;
}

function resetarLista() {
   if (amigos.length > 0) {
   amigos = [];
   }
 console.log(amigos);
 listaVisivel(" ");
 resultado.innerHTML = " ";
}

