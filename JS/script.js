$(document).ready(function() {
  var currentPlayer = 1
  var player1score = 0
  var player2score = 0
  var clickCount = 0
  var numberOfQuestions = 8
  var questions = [{
    question: '1) What is 2*5?',
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  }, {
    question: '2) What is 3*6?',
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  }, {
    question: '3) What is 8*9?',
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  }, {
    question: '4) What is 5*9?',
    choices: [3, 12, 5, 45, 7],
    correctAnswer: 3
  }, {
    question: '5) What is 15/3?',
    choices: [3, 12, 5, 8, 7],
    correctAnswer: 2
  }, {
    question: '6) What is 15*3?',
    choices: [3, 12, 5, 45, 7],
    correctAnswer: 3
  }, {
    question: '7) What is 18/3?',
    choices: [3, 12, 6, 8, 7],
    correctAnswer: 2
  }, {
    question: '8) What is 21/3?',
    choices: [3, 12, 5, 8, 7],
    correctAnswer: 4
  }, {
    question: '9) What is 55/5?',
    choices: [3, 12, 5, 11, 7],
    correctAnswer: 3
  }, {
    question: '10) What is 42/3?',
    choices: [3, 14, 5, 8, 7],
    correctAnswer: 1
  }]

  $('.choice').click(function() {

    // $('div').data('choice')
    // console.log($(this).data('choice'))
    var choice = $(this).data('choice')
      // check if correct choice or wrong choice.
    correctAnswer = questions[clickCount].correctAnswer
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
      nextQuestion()
      console.log('Next question is ' + questions[clickCount].question)
    } else {
      // alert('wrong, next player')
      console.log('wrong ans')
      console.log('current player is ' + currentPlayer)
      switchPlayer()
      console.log('next player is ' + currentPlayer)
      nextQuestion()
      console.log('Next question is ' + questions[clickCount].question)
    }
    // player score increase by 1 if correct choice.
    console.log('Player 1 score is ' + player1score)
    $('.player1').text('Player 1 score is: ' + player1score)
    console.log('Player 2 score is ' + player2score)
    $('.player2').text('Player 2 score is: ' + player2score)

    // also to change the player.
  })

  // function endGame() {
  //   if (clickCount === 10) {
  //     alert('Game Over!')
  //   }
  // }


  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }

  // $('.player1')
  // var quiz = $('#quiz')
  // Quiz div object
  $('#start').on('click', function() {
    // alert('start working')
    $('#quiz').text(questions[0].question)
    $('.choice').eq(0).text(questions[0].choices[0])
    $('.choice').eq(1).text(questions[0].choices[1])
    $('.choice').eq(2).text(questions[0].choices[2])
    $('.choice').eq(3).text(questions[0].choices[3])
    $('.choice').eq(4).text(questions[0].choices[4])

  })

  $('#next').on('click', nextQuestion)

  function nextQuestion() {
    console.log("number of clicks=" + clickCount);

    clickCount += 1

    if (clickCount == 10) {
      // alert('Game Over!')
        document.location.reload();

        if (player1score > player2score) {
          alert('Game over! Player 1 wins!')
        } else if (player2score > player1score) {
          alert('Game over! Player 2 wins!')
        } else {
          alert('Game over! Draw!')
        }

    }



    console.log("number of clicks=" + clickCount);
    $('#quiz').text(questions[clickCount].question)
    $('.choice').eq(0).text(questions[clickCount].choices[0])
    $('.choice').eq(1).text(questions[clickCount].choices[1])
    $('.choice').eq(2).text(questions[clickCount].choices[2])
    $('.choice').eq(3).text(questions[clickCount].choices[3])
    $('.choice').eq(4).text(questions[clickCount].choices[4])

    }

  // listen to the click on quiz start
  // generate the question. start at 0
  // add radio to the div
  // function choiceButtons()
  // radio to hold the individual choices.
  // alert radio working.
  // there should be another trigger for player to answer question
  // if the question correct, add score to player 1
  // if not, skip the question, move to player 2

})
