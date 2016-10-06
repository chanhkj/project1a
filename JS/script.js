$(document).ready(function () {
  // assume player 1 starts first:
  var currentPlayer = 1
  var player1score = 0
  var player2score = 0
  var clickCount = 0
  // create array for the question numbering.
  var questionsNumber = ['Qn: 1', 'Qn: 2', 'Qn: 3', 'Qn: 4', 'Qn: 5', 'Qn: 6', 'Qn: 7', 'Qn: 8', 'Qn: 9', 'Qn: 10']
  // create array of objects containing the questions, choices, correct answers.
  var questions = [{
    question: 'What is 2*5?',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: 'What is 3*6?',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: 'What is 8*9?',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: 'What is 5*9?',
    choices: [3, 12, 5, 45, 7],
    correctAnswer: 3
  }, {
    question: 'What is 15/3?',
    choices: [3, 12, 5, 8, 7],
    correctAnswer: 2
  }, {
    question: 'What is 15*3?',
    choices: [3, 12, 5, 45, 7],
    correctAnswer: 3
  }, {
    question: 'What is 18/3?',
    choices: [3, 12, 6, 8, 7],
    correctAnswer: 2
  }, {
    question: 'What is 21/3?',
    choices: [3, 12, 5, 8, 7],
    correctAnswer: 4
  }, {
    question: 'What is 55/5?',
    choices: [3, 12, 5, 11, 7],
    correctAnswer: 3
  }, {
    question: 'What is 42/3?',
    choices: [3, 14, 5, 8, 7],
    correctAnswer: 1
  }]
  // create shuffle function to shuffle the array of questions on reload.
  function shuffle (questions) {
    var j, x, i
    for (i = questions.length; i; i--) {
      j = Math.floor(Math.random() * i)
      x = questions[i - 1]
      questions[i - 1] = questions[j]
      questions[j] = x
    }
  }
  // check whether answers are correct or not. add score to player if player answers correctly.

  $('.choice').click(function () {

    // $('div').data('choice')
    // console.log($(this).data('choice'))
    var choice = $(this).data('choice')
    // check if correct choice or wrong choice.
    var correctAnswer = questions[clickCount].correctAnswer
    if (correctAnswer === choice) {
      // alert('correct next player')
      console.log('correct ans')
      // questionsNumber = clickCount
      if (currentPlayer === 1) {
        player1score += 1
      } else {
        player2score += 1
      }
      console.log('current player is ' + currentPlayer)
      switchPlayer()
      console.log('next player is ' + currentPlayer)
      console.log('Next question is ' + questions[clickCount].question)
      nextQuestion()
    } else {
      // alert('wrong, next player')
      console.log('wrong ans')
      console.log('current player is ' + currentPlayer)
      switchPlayer()
      console.log('next player is ' + currentPlayer)
      console.log('Next question is ' + questions[clickCount].question)
      nextQuestion()
    }
    // player score increase by 1 if correct choice.
    console.log('Player 1 score is ' + player1score)
    $('.player1').text('Player 1 score is: ' + player1score)
    console.log('Player 2 score is ' + player2score)
    $('.player2').text('Player 2 score is: ' + player2score)
  // nextQuestion()
  // also to change the player.
  })

  // create switchPlayer function
  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }
  // Quiz div object
  // click start button to start the quiz
  $('#start').on('click', function () {
    // alert('start working')
    $('#number').text(questionsNumber[0])
    shuffle(questions)
    $('#quiz').text(questions[0].question)
    $('.choice').eq(0).text(questions[0].choices[0])
    $('.choice').eq(1).text(questions[0].choices[1])
    $('.choice').eq(2).text(questions[0].choices[2])
    $('.choice').eq(3).text(questions[0].choices[3])
    $('.choice').eq(4).text(questions[0].choices[4])
  })

  // click next button to move to the next question.

  // $('#next').on('click', nextQuestion)

  // create next question function to move to the next question on every click

  function nextQuestion () {
    console.log('number of clicks=' + clickCount)
    clickCount += 1
    if (clickCount === 10) {
      // alert('Game Over!')
      if (player1score > player2score) {
        alert('Game over! Player 1 wins!')
      } else if (player2score > player1score) {
        alert('Game over! Player 2 wins!')
      } else {
        alert('Game over! Draw!')
      }
    } else {
      console.log('number of clicks=' + clickCount)
      // update the question numbering base on the click.
      $('#number').text(questionsNumber[clickCount])
      // update to the next question base on the click.
      $('#quiz').text(questions[clickCount].question)
      $('.choice').eq(0).text(questions[clickCount].choices[0])
      $('.choice').eq(1).text(questions[clickCount].choices[1])
      $('.choice').eq(2).text(questions[clickCount].choices[2])
      $('.choice').eq(3).text(questions[clickCount].choices[3])
      $('.choice').eq(4).text(questions[clickCount].choices[4])
    }
  }
  // reload the browser once you click the restart button.
  $('#reload').on('click', function () {
    // alert('reload')
    document.location.reload()
  })
// listen to the click on quiz start
// generate the question. start at 0
// add radio to the div
// radio to hold the individual choices.
// alert radio working.
// there should be another trigger for player to answer question
// if the question correct, add score to player 1
// if not, skip the question, move to player 2
})
