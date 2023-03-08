const quizbtn = document.querySelector('#quizbtn');
const questionEl = document.querySelector('#question');
const text_a = document.querySelector('#text_a');
const text_b = document.querySelector('#text_b');
const text_c = document.querySelector('#text_c');
const text_d = document.querySelector('#text_d');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');



const quizData = [
    {  
        question:"who is the presedent of somalia?",
        a: "farmaajo",
        b: "Shariif",
        c: "Jaamow",
        d: "Hassan",
        correct: "d"
},
{
    question:"What is the best programming language in  2023?",
    a: "java",
    b: "Html",
    c: "Python",
    d: "Javascript",
    correct: 'c'
},
{
    question:"How old is Jaamow?",
    a: "15",
    b: "18",
    c: "20",
    d: "26",
    correct: 'd'
},
{
    question:"What is the color of the sky?",
    a: "green",
    b: "black",
    c: "white",
    d: "blue",
    correct: 'd'
},
{
    question:"What is the total surah of the Quran?",
    a: "112",
    b: "114",
    c: "6666",
    d: "None of the Above",
    correct: 'b'
},


]
  

let curentQuiz = 0;
let score = 0;
let randamQuiz = 0;

// randamQuiz = Math.floor(Math.random() * quizData.length);
// curentQuiz = randamQuiz;

loadQuiz();

function loadQuiz(){
    
    console.log(randamQuiz)
    enablebtn()
    deselectAnswer();
    
    const currenQuizData = quizData[curentQuiz];

        questionEl.innerText = currenQuizData.question;
        text_a.innerText =  currenQuizData.a;
        text_b.innerText =  currenQuizData.b;
        text_c.innerText =  currenQuizData.c;
        text_d.innerText =  currenQuizData.d;

}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id;
            
        }
       
    });
    return answer;

}

function disableButton(){
    quizbtn.disabled = true;
}
function enablebtn(){
    quizbtn.disabled = false;
}


function deselectAnswer(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}

quizbtn.addEventListener('click', ()=>{

    let answer = getSelected();
   
    if(answer){
        if(answer === quizData[curentQuiz].correct){
            score++;
        }

        curentQuiz++;
        
        if(curentQuiz <  quizData.length){
        // disable button
        disableButton();
        loadQuiz();
    }
    else{
        if(score < quizData.length/2){
        quiz.innerHTML = `<h2>OOPS! you failed: you scored ${score}/${quizData.length}</h2>
        <button onClick=location.reload()>Try Again</button>
            `
        }
   
        else{
            quiz.innerHTML = `<h2>Congratudalation you did amazing! you Scored ${score}/${quizData.length}</h2>
            <button onClick=location.reload()>Play Again</button>
        `
        }
        // TODO: show results
        

    }
    }

 
    
    
})

