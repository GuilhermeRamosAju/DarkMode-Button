let botao = document.querySelector('.botao');


function mudartema(event){
  let fundo = document.querySelector('body');
  let fundoBotao = document.querySelector('.fundo-botao');
  fundo.classList.toggle('dark');
  fundoBotao.classList.toggle('dark');
  botao.classList.toggle('dark');
  
  
}

botao.addEventListener('click', mudartema);