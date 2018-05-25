  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  keys.forEach(key => key.addEventListener('pointerover', showAlert));
  
  window.addEventListener('keydown', playSound);
  window.addEventListener('keydown', removeAlert);

  const showalert = document.querySelector(".showalert");
  function showAlert(){
    showalert.textContent = "How to play? Press keys on a keyboard!";
    showalert.classList.add("alert");
  }

    function removeAlert(){
    showalert.textContent = ".";
    showalert.classList.remove("alert")
     
  }
