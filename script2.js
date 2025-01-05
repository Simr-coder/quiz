scorew=document.querySelector('.bar h1 span')
finalScore=localStorage.getItem('score')
green=document.querySelector('.green')
percent=document.querySelectorAll('.percent h1')
quote=document.querySelector('.quote')

percentCorrect=finalScore*10
scorew.innerHTML=`${localStorage.getItem('score')}`
percent[0].innerHTML=finalScore*10+'%'
percent[1].innerHTML=100-finalScore*10+'%'
green.style.width=`${finalScore*10}%`

if(finalScore<5){
quote.innerText='“Work more hard!!”'
}
else if(finalScore==5){
    quote.innerText='“Be consistent, you will definitely make it!!”' 
}
highScore=localStorage.getItem('highScore')||0
highScore=highScore<finalScore?finalScore:highScore
localStorage.setItem('highScore',highScore)
// else{
// quote.innerText='“Work more hard!!”'
// }


