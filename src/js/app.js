const emptyEl = document.querySelector('[data-cell=emptyCell]');
// Создаём массив, откуда будем брать рандомный квадрат
let messege = document.getElementById('points');

function randomCountGenerator(){
  let randomCount = Math.random() * 15;
  randomCount = Math.round(randomCount);
  return randomCount;
}

const imgEl = document.createElement('div');
// imgEl.src = '../img/goblin.png'; // картинка
imgEl.id = 'goblin';
imgEl.dataset = 'goblin';
imgEl.setAttribute('data-img', 'goblin');

function remove() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);
  }
};

function goblinAnim(){
  if (document.getElementById('goblin') !== null){
    if (!Element.prototype.remove) {
      Element.prototype.remove = remove();
    }

    imgEl.remove();
  } 
  
  const randomPos = emptyEl.children[randomCountGenerator()];

  randomPos.appendChild(imgEl); // вставляем картинку в рандомное место 
  goblinControl++; // считает сколько всего гоблинов было
  messege.textContent = `Попал: ${points}; мимо: ${lostsGoblin} всего: ${goblinControl}`;
}

goblinAnim();

function timerCount(){
  if (lostsGoblin === 5){
    imgEl.remove();
    console.error('you lose');
    clearInterval(timer);
  } else if (goblinControl >= points){
    lostsGoblin++;
    goblinAnim();
  }
}

let timer = setInterval(timerCount, 1000);



let points = 0;
let goblinControl = 0;
let lostsGoblin = 0;
const goblinImg = document.querySelector('[data-img=goblin]');

goblinImg.addEventListener('click', (event) => {
  points++;
  clearInterval(timer);
  goblinAnim();
  timer = setInterval(timerCount, 1000);
});
