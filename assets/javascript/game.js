// $(document).ready(function () {

//     // GENERATE RANDOM NUMBER ====================
//     let number = Math.floor(Math.random() * 101 + 19);
//     $("#randomNumber").text(number);

//     // OTHER GLOBALS ======================
//     var yourScore = 0;
//     var wins = 0;
//     var losses = 0;
//     var winner = "YOU WON!";
//     var loser = "YOU LOST!";

//     // CARDS TO GENERATE RANDOM VALUES ========================
//     var cards = {
//         "spade": Math.floor(Math.random() * 11 + 1),
//         "heart": Math.floor(Math.random() * 11 + 1),
//         "club": Math.floor(Math.random() * 11 + 1),
//         "diamond": Math.floor(Math.random() * 11 + 1)
//     }

//     // RESET / STARTING FUNCTION
//     function reset() {
//         number = Math.floor(Math.random() * 101 + 19);
//         $('#randomNumber').text(number);
//         cards = {
//             "spade": Math.floor(Math.random() * 11 + 1),
//             "heart": Math.floor(Math.random() * 11 + 1),
//             "club": Math.floor(Math.random() * 11 + 1),
//             "diamond": Math.floor(Math.random() * 11 + 1)
//         }
//         yourScore = 0;
//     }

//     // SET FUNCTIONS FOR WHEN THE PLAYER WINS OR LOSES
//     function winning() {
//         wins++;
//         $("#wins").text(wins);
//         $("#message").text(winner);
//         $("#yourScore").empty();
//     }

//     function lose() {
//         losses++;
//         $("#losses").text(losses);
//         $("#message").text(loser);
//         $("#yourScore").empty();
//     }

//     //  MAKE THE CARDS CLICKABLE AND ITS VALUES APPEAR / CONDITIONS ======================
//     $("#spade").on("click", function () {
//         yourScore = yourScore + cards.spade;
//         $("#yourScore").text(yourScore);

//         if (yourScore === number) {
//             winning();
//             reset();
//         } else if (yourScore > number) {
//             lose();
//             reset();
//         }
//     });

//     $("#heart").on("click", function () {
//         yourScore = yourScore + cards.heart;
//         $("#yourScore").text(yourScore);

//         if (yourScore === number) {
//             winning();
//             reset();
//         } else if (yourScore > number) {
//             lose();
//             reset();
//         }
//     });
//     $("#club").on("click", function () {
//         yourScore = yourScore + cards.club;
//         $("#yourScore").text(yourScore);

//         if (yourScore === number) {
//             winning();
//             reset();
//         } else if (yourScore > number) {
//             lose();
//             reset();
//         }
//     });
//     $("#diamond").on("click", function () {
//         yourScore = yourScore + cards.diamond;
//         $("#yourScore").text(yourScore);

//         if (yourScore === number) {
//             winning();
//             reset();
//         } else if (yourScore > number) {
//             lose();
//             reset();
//         }
//     });

// });

