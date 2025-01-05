// localStorage.setItem('h')

options=document.querySelectorAll('.option')
q=document.querySelector('#q')
next=document.querySelector('.next')
main=document.querySelector('.main')
comment=document.querySelectorAll('.option span')
questionSet=document.querySelector('.question-set')
freshQ={
    q1:{ques:"Which type of JavaScript language is ___", option:["Object-Oriented","Assembly-language","Object-Based","High-level"],cp:2, correct:false},
    q2:{ques:"Which one of the following also known as Conditional Expression:", option:["Alternative to if-else","Switch statement","immediate if","If-then-else statement"],cp:2, correct:false},
    q3:{ques:" In JavaScript, what is a block of statement", option:["Conditional block","block that contains a single statement","both conditional block and a single statement","block that combines a number of statements into a single compound statement"],cp:3, correct:false},
    q4:{ques:"When interpreter encounters an empty statements, what it will do:", option:["Throws an error","Ignores the statements","Prompts to complete the statement","Shows a warning"],cp:1, correct:false},
    q5:{ques:"The 'function' and  'var' are known as:", option:["Keywords","Declaration statements","Data types","Prototypes"],cp:1, correct:false},
    q6:{ques:"Which of the following variables takes precedence over the others if the names are the same?", option:["The local element","Global variable","The two of the above","None of the above"],cp:0, correct:false},
    q7:{ques:"Which one of the following is the correct way for calling the JavaScript code?", option:["Preprocessor","RMI","Function/Method","Triggering Event"],cp:2, correct:false},
    q8:{ques:"Which of the following type of a variable is volatile?", option:["Immutable variable","Volatile variable","Dynamic variable","Mutable variable"],cp:3, correct:false},
    q9:{ques:" Which of the following option is used as hexadecimal literal beginning?", option:["00","0x","0X","Both 0x and 0X"],cp:3, correct:false},
    q10:{ques:"When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.", option:["Displays 'Infinity'","Prints an exception error","Prints an overflow error","Prints the value as such"],cp:0, correct:false},
}
quesobj=JSON.parse(localStorage.getItem('questionList'))||freshQ
localStorage.setItem('questionList', JSON.stringify(quesobj))
count=localStorage.getItem('count')||1;
let again=count


//for result.html as it cannot go to next onclick,upar diya kyuki q m error
let score=0





next?.addEventListener('click',()=>{
    count++;
    localStorage.setItem('count',count)
    if(count<11){
       console.log("k")
       q.innerText=quesobj['q'+count].ques
   options.forEach((option,i)=>{
       option.innerText=quesobj['q'+count].option[i]
       console.log("wth")
       option.classList.remove('correct')
       option.classList.remove('incorrect')
       
   })
    }
    else{
        count=1
        localStorage.setItem('count',count) 
        Object.values(quesobj).forEach((arr)=>{
            s=arr.correct
            if(s==true){
             score++
            }
            localStorage.setItem('score',score) 
        })
        localStorage.setItem('questionList',JSON.stringify(freshQ)) 
        quesobj=JSON.parse(localStorage.getItem('questionList'))
        
            
    }
    if(count==10){
        next.innerHTML=`<a class="submit" href='/result.html'>Submit</a>`
    }

    again=count

    options.forEach((optio)=>{
        sp=document.createElement('span')
        optio.appendChild(sp)
        m=document.querySelectorAll('.option span')
    })

    //timer wala kaam (jese next page m jana ho)
    clearInterval(id)
    questionSet.classList.remove('yellow')
    questionSet.classList.remove('red')


   
})
if(q){
    q.innerText=quesobj['q'+count].ques
    options.forEach((option,i)=>{
    option.innerText=quesobj['q'+count].option[i]
    console.log("wth")
    option.classList.remove('correct')
    })
}

options.forEach((optio)=>{
    sp=document.createElement('span')
    optio.appendChild(sp)
    m=document.querySelectorAll('.option span')
})

//clicking option
options.forEach((option,i)=>{
    option.addEventListener('click',(e)=>{

 //timer khtm hone k baad option click n ho
if(localStorage.time<=0){
    e.preventDefault()
    console.log(e.pointerType) 
    e.pointerType=none
}
setTimeout(()=>{
    if(sec2<=0){
        e.preventDefault()
        e.pointerType=none
    }
})


//clearing every class and innerText
  clearInterval(id)
        options.forEach((optio,j)=>{
            optio.classList.remove('correct')
        optio.classList.remove('incorrect')
        m[j].innerHTML=''
    })
       
    //checking if option clicked mached with correct answer
     if(quesobj['q'+count].cp==i){
            console.log('correct')
            quesobj['q'+count].correct=true
            localStorage.setItem('questionList',JSON.stringify(quesobj))   
        }
        else{
            console.log('incorrect')
            quesobj['q'+count].correct=false
            localStorage.setItem('questionList',JSON.stringify(quesobj))
            option.classList.add('incorrect')
         m[i].innerHTML='YOU CHOOSE'
        }
        //things to show iirespective of which option is clicked
        m[quesobj['q'+count].cp].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
</svg>`
    options[quesobj['q'+count].cp].classList.add('correct')
    })
})

options.forEach(optio=>{
    optio.classList.remove('correct')
optio.classList.remove('incorrect')
})


//timer wala kaam (jese page reload ho)
timer=document.querySelector('.timer scan')
sec2=localStorage.getItem('time')||31
if(sec2>0){//sec>0 isiliye diya taki jab page reload hotoh local storage s time leke wo fir s apna start kre
    id=setInterval(()=>{
        sec2--;
        localStorage.setItem('time',sec2)
        if(sec2<=0){
            clearInterval(id)
            options[quesobj['q'+count].cp].classList.add('correct')
            m[quesobj['q'+count].cp].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
            </svg>`
            
        }
        if(sec2<15){
         questionSet.classList.add('yellow')
        }
        if(sec2<5){
            questionSet.classList.add('red')  
            questionSet.classList.remove('yellow')
        }
        timer.innerHTML=`${sec2} seconds left`
    },1000)
    
}
if(sec2<=0 && questionSet){
    questionSet.classList.add('red')  
    options[quesobj['q'+count].cp].classList.add('correct')
    m[quesobj['q'+count].cp].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
    </svg>`   
}

//timer things when next is clicked
next?.addEventListener('click',()=>{
    sec2=31
    timer=document.querySelector('.timer scan')
      localStorage.setItem('time',sec2)
      //isme sec2>0 isiliye nhi diya kyuki jab user refresh kre toh timer gayab n ho, next clickkrne par hme kya krna
    id=setInterval(()=>{
   sec2--;
   localStorage.setItem('time',sec2)
   if(sec2==0){
       clearInterval(id)
       options[quesobj['q'+count].cp].classList.add('correct')
       m[quesobj['q'+count].cp].innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
       <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
       </svg>`
   }
   if(sec2<15){
       questionSet.classList.add('yellow')
      }
      if(sec2<5){
          questionSet.classList.add('red')  
          questionSet.classList.remove('yellow')
      }
   timer.innerHTML=`${sec2} seconds left`
},1000)
})








// if(again==count){
//     options.forEach((option)=>{
//         option.addEventListener('click',()=>{
//         if(option.classList.value.includes('correct')){
//              console.log("wah")
//              quesobj['q'+count].correct=true
//              localStorage.setItem('questionList',JSON.stringify(quesobj))
//         }
//          else{
//                 quesobj['q'+count].correct=false
//                 localStorage.setItem('questionList',JSON.stringify(quesobj))
//             }
//         //once clicked, say wheather its right or wrong and cann't click option again
//        again++
       
//         })
//     })
// }
//displaying highest score
displayHighestScore=document.querySelector('.displayHighestScore')
hs=localStorage.getItem('highScore')
displayHighestScore.innerHTML=hs>0?'Highest Score '+hs+'/10':''

let a=0

