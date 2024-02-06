let row1=document.querySelector('.r1').children;
let row2=document.querySelector('.r2').children;
let row3=document.querySelector('.r3').children;

let z=1;

let play=document.querySelectorAll('.play');
play.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(z===1){
            e.textContent='X';
            e.style.color='#de1f1f';
        }
        else{
            e.textContent='O';
            e.style.color='rgba(10,72,227,1)';
        } 
        e.classList.add('disabledDiv');
        z=-z;
    });
});

function checkWin(){

}