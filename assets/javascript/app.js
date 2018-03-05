$(document).ready(function() {
  //declaration of variables:
  var clickCount = 0;
  var correctCount = 0;
  var incorrectCount = 0;
  var number = 60;
  var intervalId;
  // var timer = false;
//define quiz as object...
  var quiz = {
    questions: [
      {
        text: "What color is a Himalayan Poppy",
        correctAnswer: "blue",
        testAnswers: ["pink", "orange", "blue", "red"]
      },
      {
        text: "Name the seventh planet from the sun",
        correctAnswer: "Uranus",
        testAnswers: ["Neptune", "Uranus", "Saturn", "Jupiter"]
      },
      {
        text: "Who directed the Lord of the Rings trilogy?",
        correctAnswer: "Peter Jackson",
        testAnswers: [
          "Jack Benny",
          "Ron Howard",
          "Clint Eastwood",
          "Peter Jackson"
        ]
      },
      {
        text: "What is the largest freshwater lake in the world?",
        correctAnswer: "Lake Superior",
        testAnswers: ["Lake Ontario", "Lake Mead", "Lake Superior", "Salt Lake"]
      },
      {
        text: "How many valves does a trumpet have?",
        correctAnswer: "3",
        testAnswers: ["2", "3", "5", "4"]
      },
      {
        text: "",
        correctAnswer: "",
        testAnswers: ["", "", "", ""]
      }
    ]
  };

  //when start button clicked, game question goes to #displayQuestion and answer0 will need to be fed to each
  //paragraph tag, timer will begin countdown. next question button?

  $("#btnStart").on("click", function() {
    var quesIndex = clickCount; //index set

    var displayQuestion = $("#displayQuestion"); //create variables for jquery

    var question = quiz.questions[quesIndex].text; //create variable

    var answer0 = quiz.questions[quesIndex].testAnswers[0]; //this is probably unnecessary but it helped me see things easier
    var answer1 = quiz.questions[quesIndex].testAnswers[1];
    var answer2 = quiz.questions[quesIndex].testAnswers[2];
    var answer3 = quiz.questions[quesIndex].testAnswers[3];
    // var correctAnswer = quiz.questions[quesIndex].correctAnswer;

    displayQuestion.text(question); //output question and answers
    $("#answerA").text(answer0);
    $("#answerB").text(answer1);
    $("#answerC").text(answer2);
    $("#answerD").text(answer3);

    $("#timer").text(number+" seconds!");
    timerRun(number);
  });

  $(".para").on("click", function(event) {
    // console.log($(event.target))

    // for (var i = 0; i < ("para").length; i++) {
    if ($(event.target).text() === quiz.questions[clickCount].correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    if (clickCount < 5) {
      clickCount++;
      switchQuestion(quiz);
      correctQuiz();
    } else {
      correctQuiz();
      endGame(clickCount);
    }
  });

  $("#btnEnd").on("click", function() {
    var clickCount = 5;

    endGame(clickCount);
    $("#displayEndGame").text("Looks like you give up!");
  });

  $("#btnReset").on("click", function() {
    window.location.href = window.location.href;
  });
  //this function called to give results of quiz
  function correctQuiz() {
    totalCount = correctCount + incorrectCount;

    if (totalCount === 5) {
      totalTime= 60-number;
      var results =
        "You have answered " + correctCount + " correctly out of 5 questions in just "+ totalTime + " seconds!" ;
        stop();

      $("#displayQuestion").text(results);
    }
  }

  //this is to start/switch questions in the display at start and after each click of a <p>
  function switchQuestion(quiz) {
    var quesIndex = clickCount; //index set

    var displayQuestion = $("#displayQuestion"); //create variables for jquery

    var question = quiz.questions[quesIndex].text; //create variable

    var answer0 = quiz.questions[quesIndex].testAnswers[0]; //this is probably unnecessary but it helped me see things easier
    var answer1 = quiz.questions[quesIndex].testAnswers[1];
    var answer2 = quiz.questions[quesIndex].testAnswers[2];
    var answer3 = quiz.questions[quesIndex].testAnswers[3];

    displayQuestion.text(question); //output question and answers
    $("#answerA").text(answer0);
    $("#answerB").text(answer1);
    $("#answerC").text(answer2);
    $("#answerD").text(answer3);
  }

  function endGame(clickCount) {
    if (clickCount === 5) {
      $("#displayEndGame").text("Game Over!");
    }
  }

  //set timer functions and display on html:

  //start timer
  function timerRun() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    number--;
    $("#timer").html(number);

    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
    }
  }

  //  The stop function
  function stop() {
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
});
