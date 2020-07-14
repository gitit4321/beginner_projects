const increaseBtn = document.getElementById('btnIncrease');
const decreaseBtn = document.getElementById('btnDecrease');
const numCounter = document.getElementById('numCounter');

currentCount = 0

increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);

function increaseCount(){
  numCounter.innerHTML = currentCount++;
}

function decreaseCount(){
  numCounter.innerHTML = currentCount--;
}

