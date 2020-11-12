const roulette = document.querySelector('.roulette');
const segmentContainer = document.querySelector('.segment-container');

spin = () => {
  segmentContainer.style = "transform:translateZ(0px) rotate("+random(40,20)+"rad)";
}
random = (max, min) => {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
  }

roulette.addEventListener('click', spin);