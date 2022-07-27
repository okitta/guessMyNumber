'use strict';
const eventlisten = document.querySelector('.check');
let number = Math.trunc(Math.random()*20)+1;
let score=20; 
let highScore=0;
eventlisten.addEventListener('click',function(){
    const inputforcheck = Number(document.querySelector('.guess').value);
 if(!inputforcheck)
    {
        document.querySelector('.message').textContent='Please insert an input';
    }
    else if(inputforcheck < 1 || inputforcheck > 20)
    {
        document.querySelector('.message').textContent='Input out of range please insert number between 1 and 20'
    }
    else if(inputforcheck < number)
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='You Loss';
            
        }
        
    }
    else if(inputforcheck > number)
    {
        
        if(score>0)
        {
        document.querySelector('.message').textContent='Too High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='You Loss';
            
        }
    }
    else
    {
        document.querySelector('.message').textContent='Congratulation';
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').textContent=number;
        document.querySelector('.number').style.width='30rem';
        if(score > highScore)
        {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
})

document.querySelector('.again').addEventListener('click' , function(){
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.number').textContent='?'
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.guess').value= '';
    score=20;
    document.querySelector('.score').textContent=score;
    number = Math.trunc(Math.random()*20)+1;

})