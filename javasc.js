let row=[]
row[0]=document.querySelector('.r1').children;
row[1]=document.querySelector('.r2').children;
row[2]=document.querySelector('.r3').children;

let z=1;
let matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = new Array(3).fill(0);
}

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
            e.id=String(-1*e.id);
        } 
        e.classList.add('disabledDiv');
        z=-z;
        checkWin();
    });
});
function getValues(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)
        {
            if(row[i][j].textContent!=='')
                matrix[i][j]=Number(row[i][j].id);
        }
    }
}
function resetGame(a){
    if(a===15)
        console.log('X wins');
    else console.log('O wins');
}

function checkWin(){
    getValues();
    let s=new Array(8).fill(0);
    for(let i=0;i<3;i++){
        s[0]+=matrix[i][i];
        s[1]+=matrix[0][i];
        s[2]+=matrix[1][i];
        s[3]+=matrix[2][i];
        s[4]+=matrix[i][0];
        s[5]+=matrix[i][1];
        s[6]+=matrix[i][2];
        s[7]+=matrix[2-i][i];
    }
    for(let i=0;i<8;i++)
    {
        if(Math.abs(s[i])===15)
            resetGame(s[i]);
    }
}