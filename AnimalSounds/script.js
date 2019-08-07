const farm = {
  1 : './img/1-Cow.jpg',
  2 : './img/2-Sheep.jpg',
  3 : './img/3-Rabbit.jpg',
  4 : './img/4-Fox.jpg',
  5 : './img/5-Pig.jpg',
  6 : './img/6-Dog.jpeg',
  7 : './img/7-Cat.jpg',
  8 : './img/8-Monkey.jpg',
  9 : './img/9-Horse.jpg',
  10 : './img/10-Turtle.jpg',
  11 : './img/11-Elephant.jpg',
  12 : './img/12-Bear.jpg',

}



function playNote(e) {
  let allAudio = document.querySelectorAll('audio')
  allAudio.forEach(mp3 => {
    mp3.pause()
    mp3.currentTime = 0
    })
let img = document.querySelector('#imgDiv')
  img.className = ' '
  let clicked;
  if (e.target.classList.contains('key')) {
    clicked = e.target
  } else {
    clicked = e.target.parentNode
  }
  let value = clicked.attributes[0].value;
  let audio = document.querySelector(`audio[id="${value}"]`)
  if(!audio) return;
  audio.play();
  clicked.classList.add('playing')

  function getAnimal() {
    var filtered = {}
    for(var key in farm) { 
      if(key === clicked.attributes[0].value){
        filtered[key] = farm[key]
      }
    }
    let animal = Object.values(filtered)
return animal

}

img.style.backgroundImage = `url("${getAnimal()}")`
img.className = 'fadeIn'

}

function removeTransition(e) {
  if(e.propertyName !== 'transform') 
  return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', playNote))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// Prevent pinch zoom which tends to ruin the baby's experience
document.addEventListener("touchmove", function(e){
e.preventDefault();
},{passive: false});