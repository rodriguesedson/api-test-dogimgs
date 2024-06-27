window.addEventListener('keydown', (event) => {
  if(event.key === '1') {
    document.getElementById('botaoBuscar').focus();
  }
})

window.addEventListener('keydown', (event) => {
  if(event.key === '2') {
    document.getElementById('palavraBusca').focus();
    document.getElementById('palavraBusca')
  }
})

function listar() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      document.getElementById('lista').innerText = ''
      for(let i in data.message) {
        if(document.getElementById('lista').innerText === '') {
          document.getElementById('lista').innerText += `${i}`
        } else {
          document.getElementById('lista').innerText += `, ${i}`
        }
      }
    })
}

function buscar() {
  let palavraBusca = document.getElementById('palavraBusca').value;
  let imagem = document.createElement('img');
  fetch(`https://dog.ceo/api/breed/${palavraBusca.toLowerCase()}/images`)
    .then(response => response.json())
    .then(data => imagem.setAttribute('src', data.message[getRandom(1, data.message.length)]));
  document.getElementById('lista').innerText = '';
  document.getElementById('lista').appendChild(imagem);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}