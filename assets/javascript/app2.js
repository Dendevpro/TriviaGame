$(document).ready(function () {
    //Variables
    var currentQuestion; // Stores the current question
    var correctAnswer; // Store and display the correct answers count to the user at the end of each game
    var wrongAnswer; // Store and display the wrong answers count to the user at the end of each game

    var timer; // Sets up the timer 

    // Question variables
    // with the user choices and the correct answer

    var questionArray = [
        q1 = {
            question: "Question 1 - How many states are in the brazilian territory?",
            userChoices: ["25", "26", "27"],
            flags: [false, true, false],
            answer: 1
        },

        q2 = {
            question: "Question 2 - How long is the country's coastline?",
            userChoices: ["2568 miles", "3873 miles", "4654 miles"],
            flags: [false, false, true],
            answer: 2
        },

        q3 = {
            question: "Question 3 - Where is located the capital of Brazil?",
            userChoices: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
            flags: [false, false, true],
            answer: 2
        },

        q4 = {
            question: "Question 4 - What is their official language?",
            userChoices: ["Portuguese", "Brazilian", "Spanish"],
            flags: [true, false, false],
            answer: 0
        },

        q5 = {
            question: "Question 5 - Which color is not in the brazilian flag?",
            userChoices: ["Red", "White", "Blue"],
            flags: [true, false, false],
            answer: 0
        },

        q6 = {
            question: "Question 6 - How many World Cup Titles has their national soccer team?",
            userChoices: ["4", "5", "6"],
            flags: [false, true, false],
            answer: 1
        },

        q7 = {
            question: "Question 7 - What is the brazilian national Spirit (liquor)?",
            userChoices: ["Grapa", "Marufo", "Cachaça"],
            flags: [false, false, true],
            answer: 2
        },

        q8 = {
            question: "Question 8 - What is the brazilian currency?",
            userChoices: ["Real", "Peso", "Cabral"],
            flags: [true, false, false],
            answer: 0
        },

        q9 = {
            question: "Question 9 - What is the legal age to drink alcohol in the country?",
            userChoices: ["16", "18", "21"],
            flags: [false, true, false],
            answer: 1
        },

        q10 = {
            question: "Question 10 - Which ocean bathes the brazilian coastline?",
            userChoices: ["Atlantic", "Pacific", "Indian"],
            flags: [true, false, false],
            answer: 0
        }
    ];

    $("#game-output").hide(); // Hides content before game starts
    $("#score-board").hide(); // Hide score DIVs before game starts

    // Starts a new game and
    // Create a Countdown Timer
    // that will start by clicking the play button (id=game-starter)
    $("#game-starter").click(function () {
        newGame();
        $("#timer").html("<div class='card' id='timerDiv'>" + "<h1 style='font-weight: bold'>" + "45" + "</h1>" + "</div>");
        timer = 45;
        setInterval(function () {
            timer--;
            if (timer >= 0) {
                $("#timer").html("<div class='card' id='timerDiv'>" + "<h1 style='font-weight: bold'>" + timer + "</h1>" + "</div>");
                // console.log(timer);
            }
            if (timer === 0) {
                $("#game-output").hide();
                $("#score-board").show();
                $(".display-4").html("Time is up");
                $(".lead").text("Your Score is...");
                $("#timer").html("<button class='btn btn-danger'; style='margin: .5rem'>" + "Play Again" + "</button>");
                $("#right-answer").html("<h4 style='color:red'>" + correctAnswer + "  right" + "</h4>");
                $("#wrong-answer").html("<h4 style='color:red'>" + wrongAnswer + "  wrong" + "</h4>");
            }
        }, 1000);
    });

    function stopTimer() {
        clearInterval(timer);
    };
    stopTimer();

    function resetTimer() {
        timer = 45;
        setInterval(function () {
        }, 1000);
    };
    resetTimer();

    function resetGame() {
        emptyDiv();
        $("#game-output").show();
        $("#score-board").hide();
        $(".display-4").html("How well do you know Brazil?");
        $(".lead").html("Let's test your knowledge in this trivia game!");
        $("#timer").html("<div class='card' id='timerDiv'>" + "<h1 style='font-weight: bold'>" + "45" + "</h1>" + "</div>");
        $("#instructions").hide();
        $("#game-starter").hide();
        resetTimer();
        newGame();


    }
    function emptyDiv() {
        $("#question").empty();
        $("#choiceA").empty();
        $("#choiceB").empty();
        $("#choiceC").empty();
    }

    // Starts the game by populating the DOM with the 1st question,
    // the user choices, the next question button and the countdown timer
    function newGame() {
        $("#game-output").show();
        $("#score-board").hide();
        $("#instructions").hide();
        $("#game-starter").hide();
        $(".lead").html(" ");
        // Display the 1st question
        // and the 3 user choices
        $("#question").append(q1.question);
        $("#choiceA").append(q1.userChoices[0]);
        $("#choiceB").append(q1.userChoices[1]);
        $("#choiceC").append(q1.userChoices[2]);
        currentQuestion = 0;
        correctAnswer = 0;
        wrongAnswer = 0;
    }

    function nextQuestion() {

        $("button.answer").click(function () {
            currentQuestion++;

            var answer = $(this).attr("data-answer");
            for (var i = 0; i < questionArray.length; i++) {
                $("#question").text(questionArray[currentQuestion].question);
                $("#choiceA").text(questionArray[currentQuestion].userChoices[0]);
                $("#choiceB").text(questionArray[currentQuestion].userChoices[1]);
                $("#choiceC").text(questionArray[currentQuestion].userChoices[2]);
                console.log("user choice " + questionArray[currentQuestion].answer)
                if (answer === questionArray[currentQuestion].answer) {
                    correctAnswer++;
                    console.log(questionArray[currentQuestion].answer);
                }

                else {
                    wrongAnswer++;
                }
            }
        })
    }
    nextQuestion();

    $("#timer").on('click', function () {
        resetGame();
    });

})
