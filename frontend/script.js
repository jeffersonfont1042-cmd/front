async function dados (){
 try{
  const res=await fetch('http://localhost:3000/api/mensagem')
  if (!res.ok){
   throw new Error(`erro ${res.status}`) 
  }
  const data = await res.json();
  const msn =document.getElementById('titulo');
  const sub =document.getElementById('subtitulo');
  msn.innerHTML = (data.mensagem);
  sub.innerHTML=(data.sub);
 } catch (erro){
  console.error("erro:", erro);
 }
}
dados()
