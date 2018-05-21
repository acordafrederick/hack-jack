// hide the ff elements for intro
$("#game-container, #open-info, #close-info").hide();
$("#info-container").hide();

$(document).ready(function () {

    $("body").addClass("logo-bg");
    setTimeout(function() {
        $("body").removeClass("logo-bg");
        $("#info-container").slideToggle().show();
    },5000);

    $("#play-btn").click(function() {
        $("#info-container").slideToggle();
        setTimeout(function() {
            $("#game-container, #open-info").show();
        }, 500);
    });

    $("#open-info").click(function() {
        $("#game-container").fadeTo(0, 0);
        $("#play-btn, #open-info").hide();
        $("#info-container").slideToggle().show();
        $("#close-info").show();
    });

    $("#close-info").click(function() {
        $("#info-container").slideToggle();
        setTimeout(function() {
            $("#game-container").fadeTo(0, 1);
            $("#open-info").show();
        }, 500);
    })

    // GENERATE RANDOM NUMBER ====================
    let number = Math.floor(Math.random() * 101 + 19);
    $("#number").text(number);
    $("#score").text("0");

    // OTHER GLOBALS ======================
    let score = 0;
    let wins = 0;
    let losses = 0;
    const winMessage = "It's a match. Keep it up!";
    const loseMessage = "Not a match. Try again!";
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
        $("#message").text(winMessage).fadeTo(100, 1);
        opacityToZero();
    }

    function lose() {
        losses++;
        $("#losses").text(losses);
        $("#score").text("0");
        $("#message").text(loseMessage).fadeTo(100, 1);
        opacityToZero();
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

    function showIntroMessage() {
        $("#message").delay(5000).text(introMessage).fadeTo(0, 1);
    }

    function opacityToZero() {
        setTimeout(function() {
            $("#message").fadeTo(400, 0);
        }, 3000);
    }

    //  MAKE THE CARDS CLICKABLE AND ITS VALUES APPEAR / CONDITIONS ======================
    $("#spades").click(function () {
        score = score + cards.spade;
        $("#score").text(score);
        matchNumbers();
    });

    $("#hearts").click(function () {
        score = score + cards.heart;
        $("#score").text(score);
        matchNumbers();
    });

    $("#clubs").click(function () {
        score = score + cards.club;
        $("#score").text(score);
        matchNumbers();
    });

    $("#diamonds").click(function () {
        score = score + cards.diamond;
        $("#score").text(score);
        matchNumbers();
    });

    $("#game-info").click(function() {
        $("body").css("background-color", "red");
    });

});

