// hide the ff elements for intro
$("#info-container, #game-container, #open-info, #close-info").hide();

$(document).ready(function () {

// GAME'S LOGIC ==========

    // generate a random number for the player
    let number = Math.floor(Math.random() * 101 + 19);
    $("#number").text(number);
    $("#score").text("0");

    // generate random value for each card
    let cards = {
        "spade": Math.floor(Math.random() * 11 + 1),
        "heart": Math.floor(Math.random() * 11 + 1),
        "club": Math.floor(Math.random() * 11 + 1),
        "diamond": Math.floor(Math.random() * 11 + 1)
    }

    // other global variables
    let score = 0;
    let wins = 0;
    let losses = 0;
    const winMessage = "It's a match. Keep it up!";
    const loseMessage = "Not a match. Try again!";
    const introMessage = "Match the Number";

    // function to reset the number, score, and cards' values.
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

    // function for when the player matches the number
    function winning() {
        wins++;
        $("#wins").text(wins);
        $("#score").text("0");
        $("#message").text(winMessage).fadeTo(100, 1);
        opacityToZero();
    }

    // function for when the player exceeds the number
    function lose() {
        losses++;
        $("#losses").text(losses);
        $("#score").text("0");
        $("#message").text(loseMessage).fadeTo(100, 1);
        opacityToZero();
    }

    // function to flash a message accordingly if the player wins or loses a round
    function matchNumbers() {
        if (score === number) {
            winning();
            reset();
        } else if (score > number) {
            lose();
            reset();
        }
    }

    // function to fade the message out to 0 opacity after 3 secs
    function opacityToZero() {
        setTimeout(function() {
            $("#message").fadeTo(400, 0);
        }, 3000);
    }

// USER EVENTS (GAME) ==========

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

// USER EVENTS (INTERFACE) ==========

    // intro. showcase of logo
    $("body").addClass("logo-bg");
    setTimeout(function() {
        $("body").removeClass("logo-bg");
        $("#info-container").slideToggle().show();
    },5000);

    // event to hode info and show game and info button
    $("#play-btn").click(function() {
        $("#info-container").slideToggle();
        setTimeout(function() {
            $("#game-container, #open-info").show();
        }, 500);
    });

    // event to show info but changing the game's opacity to 0 to keep the player's stats
    $("#open-info").click(function() {
        $("#game-container").fadeTo(0, 0);
        $("#play-btn, #open-info").hide();
        $("#info-container").slideToggle().show();
        $("#close-info").show();
    });

    // event to hide the info and changing the game's opacity back to 1
    $("#close-info").click(function() {
        $("#info-container").slideToggle();
        setTimeout(function() {
            $("#game-container").fadeTo(0, 1);
            $("#open-info").show();
        }, 500);
    });

});

