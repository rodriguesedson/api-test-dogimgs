function listar() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      for(let i in data.message) {
        if(document.getElementById('lista').innerText == '') {
          document.getElementById('lista').innerText += `${i}`
        } else {
          document.getElementById('lista').innerText += `, ${i}`
        }
      }
    })
}

function buscar() {
  let palavraBusca = document.getElementById('palavraBusca').value
  let imagem = document.createElement('img')
  imagem.style.width = '200'
  fetch(`https://dog.ceo/api/breed/${palavraBusca}/images`)
    .then(response => response.json())
    .then(data => imagem.setAttribute('src', data.message['0']))
  document.getElementById('lista').innerText = ''
  document.getElementById('lista').appendChild(imagem)
}