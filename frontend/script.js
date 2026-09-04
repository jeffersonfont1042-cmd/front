
fetch('http://localhost:3000/api/mensagem')
.then(response =>response.json())
.then(data => {
    const msn =document.getElementById('titulo');
      const sub =document.getElementById('subtitulo');
    msn.innerHTML = (data.mensagem);
    sub.innerHTML=(data.sub)
  console.log(data.mensagem);
  // Resultado: 'Olá do backend com express!'
});