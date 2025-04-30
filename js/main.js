/*-- Pseudocode/Logic I slacked on Saturday 


1) Initialize all state, then call render()
2) render() will render one of the following:
  2.1) When curQuestionIdx is < questions.length, render the 
       current question and its list of possible answers
  2.2) When curQuestionIdx === questions.length, all questions
       have been answered so render a message based upon
       the results state, for example:
       "Congrats - you win by answering 8 out of 10 correctly!"
3) When a player clicks their answer to a question:
  3.1) Update the current question object's playerAnswer to the
       index of the answer.
  3.2) Call render().  Since an answer has been selected, render their
       selected answer differently (different styling).
4) When a player clicks the "Next" button:
  4.1) Increment curQuestionIdx
  4.2) If curQuestionIdx === questions.length, all questions have been 
       answered - so update the results state
  4.3) Call render()

--*/



/*----- constants -----*/


/*----- state variables -----*/

// Define, but don't initialize/assign to the state variables
let questions;  // array of question objects
let curQuestionIdx;  // index of cur question in the questions array being answered
let correctScore;

/*----- cached elements  -----*/
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');

/*----- event listeners -----*/


/*----- functions -----*/
init();  // Start the Quiz

// Initialize all state, then call render()
function init() {
  questions = [
    {
      question: 'Text of question 1?',
      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
      correctAnswerIdx: 0, // index of 'Answer 1'
      playerAnswerIdx: null // this is the property you update when they
      // click an answer when this is the current question
    },
    {
      question: 'Text of question 2?',
      answers: ['Another Answer 1', 'Another Answer 2', 'Another Answer 3', 'Another Answer 4'],
      correctAnswerIdx: 1, // index of 'Another Answer 2'
      playerAnswerIdx: null // this is the property you update when they
      // click an answer when this is the current question
    },
  ];
  curQuestionIdx = 0;
  correctScore = null;
  render();
}

function render() {
  if (correctScore === null) {
    // Answering a question
    renderQuestion();
  } else {
    // Rendering the score

  }
}

function renderQuestion() {
  const question = questions[curQuestionIdx];
  questionEl.innerText = question.question;
  // "Build" the html string using the answers array
  let html = '';
  question.answers.forEach((answer, idx) => {
    html += `<article>(${idx + 1}) ${answer}</article>`;
  });
  answersEl.innerHTML = html;
}