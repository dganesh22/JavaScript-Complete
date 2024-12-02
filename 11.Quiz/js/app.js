const quizData = [
    {
        question: "Which language runs in browser?",
        a: "java",
        b: "python",
        c: "javscript",
        d: "php",
        correct: "c"
    },
    {
        question: "What does HTML Stands for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Markup Language",
        d: "Hyperloop Markdown Language",
        correct: "a"
    },
    {
        question: "Which of the form control doesn't use input element?",
        a: "Checkbox",
        b: "Radio",
        c: "Search",
        d: "Mutiline Text",
        correct: "d"
    },
    {
        question: "In HTML page if background image is smaller than screen what will happen?",
        a: "it will be streched",
        b: "it will be repeated",
        c: "it will be clipped",
        d: "it will leave a blank space",
        correct: "b"
    },
    {
        question: "Which attribute will tags display the text if the image cannot be loaded?",
        a: "src",
        b: "href",
        c: "alt",
        d: "title",
        correct: "c"
    },
    {
        question: "Which attribute display the text on mouse hover on html element?",
        a: "id",
        b: "name",
        c: "class",
        d: "title",
        correct: "d"
    }
]

// target the dom properties
let quiz = document.getElementById("quiz")
let ansEle = document.querySelectorAll(".answer")

let questionEl = document.getElementById("question")
let a_txt = document.getElementById("a_txt")
let b_txt = document.getElementById("b_txt")
let c_txt = document.getElementById("c_txt")
let d_txt = document.getElementById("d_txt")

let subBtn = document.getElementById("submit")

// score
let currentQuiz = 0 // index of the questions 
let score = 0 // score

// all answers must be clear 
function deselectAns() {
    ansEle.forEach(item => (item.checked = false ))
}

// method to load questions and answers
function loadQuiz(data) {
    deselectAns()
    let curQuizData = data[currentQuiz]
    questionEl.innerText = curQuizData.question
    a_txt.innerText = curQuizData.a
    b_txt.innerText = curQuizData.b
    c_txt.innerText = curQuizData.c
    d_txt.innerText = curQuizData.d
}

loadQuiz(quizData)

// selected answer input element
function selectedAns() {
    let ans;
    ansEle.forEach(item => {
        if(item.checked === true) {
            ans = item.id
        }
    })
    return ans
}

// submit handler
subBtn.addEventListener("click", function() {
    // console.log(`btn clicked`)
    let answer = selectedAns()
    // console.log(`answre = `, answer)
    if(answer) {
        // correct anwser
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        // increment the quiz
        currentQuiz++

        // reload the quiz 
        if(currentQuiz < quizData.length) {
            loadQuiz(quizData)
        } else {
            quiz.innerHTML = `<div>
                <h1 class="result"> You have scored ${score}/${quizData.length} </h1>
                <button onclick="history.go(0)" class="btn">Play Again</button>`
        }
    }
})