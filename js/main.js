const firstBtn = document.getElementById('first-btn');
const secondBtn = document.getElementById('second-btn');
const thirstBtn = document.getElementById('thirst-btn');
const fourthBtn = document.getElementById('fourth-btn');
const fifthBtn = document.getElementById('fifth-btn');

const first = document.getElementById('first');
const second = document.getElementById('second');
const thirst = document.getElementById('thirst');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');

    firstBtn.addEventListener('click', () => {
        first.classList.toggle('active-video');
        
    })
    secondBtn.addEventListener('click', ()=>{
        first.classList.remove('active-video');
        second.classList.toggle('active-video');
    })
    thirstBtn.addEventListener('click', ()=>{
        first.classList.remove('active-video');
        second.classList.remove('active-video');
        thirst.classList.toggle('active-video');
    })
    fourthBtn.addEventListener('click', ()=>{
        first.classList.remove('active-video');
        second.classList.remove('active-video');
        thirst.classList.remove('active-video');
        fourth.classList.toggle('active-video');
    })
    fifthBtn.addEventListener('click', ()=>{
        first.classList.remove('active-video');
        second.classList.remove('active-video');
        thirst.classList.remove('active-video');
        fourth.classList.remove('active-video');
        fifth.classList.toggle('active-video');
    })



