$(document).ready(function () {
  var currentPlayer = 1
  var clickCount = 0
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
    correctAnswer: 0
  }, {
    question: 'What is 15/3?',
    choices: [3, 12, 5, 8, 7],
    correctAnswer: 0
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
    correctAnswer: 0
  }]

  // var quiz = $('#quiz') //Quiz div object
  $('#start').on('click', function () {
    // alert('start working')
    $('#quiz').text(questions[0].question)
    $('.choice1').text(questions[0].choices[0])
    $('.choice2').text(questions[0].choices[1])
    $('.choice3').text(questions[0].choices[2])
    $('.choice4').text(questions[0].choices[3])
    $('.choice5').text(questions[0].choices[4])
  })

  $('#next').on('click', function () {
    // alert('next working')
        clickCount +=1
      $('#quiz').text(questions[clickCount].question)
      $('.choice1').text(questions[clickCount].choices[0])
      $('.choice2').text(questions[clickCount].choices[1])
      $('.choice3').text(questions[clickCount].choices[2])
      $('.choice4').text(questions[clickCount].choices[3])
      $('.choice5').text(questions[clickCount].choices[4])

  })

  // listen to the click on quiz start
  // generate the question. start at 0
  // there should be another trigger for player to answer question
  // if the question correct, add score to player 1
  // if not, skip the question, move to player 2

})
