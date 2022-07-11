
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
window.addEventListener('keyup', function(e){
  
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key); 
    key.classList.toggle('playing');
});

window.addEventListener('keydown', playSound);