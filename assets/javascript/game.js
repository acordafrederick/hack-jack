$(document).ready(function () {

    // GENERATE RANDOM NUMBER ====================
    let number = Math.floor(Math.random() * 101 + 19);
    $("#number").text(number);
    $("#score").text("0");

    // OTHER GLOBALS ======================
    let score = 0;
    let wins = 0;
    let losses = 0;
    const winMessage = "It's a match! Keep it up!";
    const loseMessage = "Not a match! Try again!";
    const introMessage = "Match the Number";

    // CARDS TO GENERATE RANDOM VALUES ========================
    var cards = {
        "spade": Math.floor(Math.random() * 11 + 1),
        "heart": Math.floor(Math.random() * 11 + 1),
        "club": Math.floor(Math.random() * 11 + 1),
        "diamond": Math.floor(Math.random() * 11 + 1)
    }

    // RESET / STARTING FUNCTION
    function reset() {
        number = Math.floor(Math.random() * 101 + 19);
        $("#number").text(number);
        cards = {
            "spade": Math.floor(Math.random() * 11 + 1),
            "heart": Math.floor(Math.random() * 11 + 1),
            "club": Math.floor(Math.random() * 11 + 1),
            "diamond": Math.floor(Math.random() * 11 + 1)
        }
        score = 0;
    }

    // SET FUNCTIONS FOR WHEN THE PLAYER WINS OR LOSES
    function winning() {
        wins++;
        $("#wins").text(wins);
        $("#score").text("0");
        $("#message").text(winMessage);
    }

    function lose() {
        losses++;
        $("#losses").text(losses);
        $("#score").text("0");
        $("#message").text(loseMessage);
    }

    function matchNumbers() {
        if (score === number) {
            winning();
            reset();
        } else if (score > number) {
            lose();
            reset();
        }
    }

    //  MAKE THE CARDS CLICKABLE AND ITS VALUES APPEAR / CONDITIONS ======================
    $("#spades").on("click", function () {
        score = score + cards.spade;
        $("#score").text(score);
        matchNumbers();
    });

    $("#hearts").on("click", function () {
        score = score + cards.heart;
        $("#score").text(score);
        matchNumbers();
    });
    $("#clubs").on("click", function () {
        score = score + cards.club;
        $("#score").text(score);
        matchNumbers();
    });

    $("#diamonds").on("click", function () {
        score = score + cards.diamond;
        $("#score").text(score);
        matchNumbers();
    });

});

