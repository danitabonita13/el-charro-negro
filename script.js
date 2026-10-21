const scenes=[...document.querySelectorAll('.scene')];
const audio=document.getElementById('whistle');
let timer;
function show(id){scenes.forEach(s=>s.classList.toggle('active',s.id===id));}
function stop(){clearTimeout(timer);audio.pause();try{audio.currentTime=0;}catch(e){}}
function whistle(){try{audio.currentTime=0;audio.volume=.65;const result=audio.play();if(result)result.catch(()=>{});}catch(e){}}
document.getElementById('begin').addEventListener('click',()=>{stop();show('dealScene');whistle();});
function choose(accepted){stop();document.getElementById('scareText').textContent=accepted?'¡TU ALMA ES MÍA!':'¡NO ESCAPARÁS!';document.getElementById('endingTitle').textContent=accepted?'EL TRATO ESTÁ HECHO':'EL CHARRO TE ESPERA';document.getElementById('endingMessage').textContent=accepted?'Aceptaste el trato. Ahora el Charro Negro cabalgará contigo por toda la eternidad...':'Rechazaste el trato... pero hay silbidos que jamás dejan de perseguirte.';show('scareScene');whistle();timer=setTimeout(()=>{stop();show('endScene');},8000);}
document.getElementById('accept').addEventListener('click',()=>choose(true));
document.getElementById('refuse').addEventListener('click',()=>choose(false));
document.getElementById('again').addEventListener('click',()=>{stop();show('startScene');});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();});
