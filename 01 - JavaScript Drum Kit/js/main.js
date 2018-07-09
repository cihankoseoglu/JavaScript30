function playSound(ev) {
    const keyCode = ev.keyCode;

    if (!ev.keyCode) {
        return;
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // this is to rewind
    audio.play();
}

function removeTransition(ev) {
    if (ev.propertyName !== 'transform') return;
    ev.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener("keydown", playSound);

document.addEventListener('keyup', function (ev) {
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`)
    if(key && key.classList.contains('playing')) key.classList.remove('playing');
  });



