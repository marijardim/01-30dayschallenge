const keys = document.querySelectorAll('.key');

//Evento de click:
function playSoundClick(e){
  let value;
  if(e.path.length === 6){
    value = e.path[0].getAttribute('data-key');   
  }  else {
    value = e.path[1].getAttribute('data-key');
  }
  const audioPlay = document.querySelector(`audio[data-key="${value}"]`)
  audioPlay.currentTime = 0;
  audioPlay.play();
}
keys.forEach((key) => key.addEventListener('click', playSoundClick))


//Evento de keydown:
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play();
    }
  window.addEventListener('keydown', playSound);
