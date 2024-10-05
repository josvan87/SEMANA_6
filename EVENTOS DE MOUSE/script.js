let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{

    console.log('clicou')
});

btn.addEventListener('mousedown', ()=>{

    console.log('DOWN')
});

btn.addEventListener('mouseup', ()=>{

    console.log('UP')
});

btn.addEventListener('contextmenu', (event)=>{
      event.preventDefault()
    console.log('botao direito')
})