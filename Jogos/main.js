const mario =  document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

const pipePosition = pipe.offsetleft;
const marioPosition = window.getComputedStyle(mario).bottom.replace('px','')

console.log(pipe)

 if (pipePosition <= 120 && pipePosition > 0 &&  marioPosition < 80) {

   pipe.style.animation = 'none';
   pipe.style.bottom = `${pipePosition}px`; 


 } 


}, 10);


document.addEventListener('keydown', jump);   