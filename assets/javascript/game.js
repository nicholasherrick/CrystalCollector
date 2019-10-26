// Make sure document is loaded

$(document).ready(function() {

    // Declare mathmatical variables

    var randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log("Random Number = " + randomNumber);
    var crystal1Value = Math.floor((Math.random() * 12) + 1);
    console.log("Crystal 1 = " + crystal1Value);
    var crystal2Value = Math.floor((Math.random() * 12) + 1);
    console.log("Crystal 2 = " + crystal2Value);
    var crystal3Value = Math.floor((Math.random() * 12) + 1);
    console.log("Crystal 3 = " + crystal3Value);
    var crystal4Value = Math.floor((Math.random() * 12) + 1);
    console.log("Crystal 4 = " + crystal4Value);

    // Declare  Win/Loss and total score variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // Function to reset game

    function resetGame() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        console.log("Random Number = " + randomNumber);
        wins = 0;
        losses = 0;
        crystal1Value = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 1 = " + crystal1Value);
        crystal2Value = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 2 = " + crystal2Value);
        crystal3Value = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 3 = " + crystal3Value);
        crystal4Value = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 4 = " + crystal4Value);
        totalScore = 0;
        // Updates HTML with newly generated variables
        $("#match").html(randomNumber);
        $("#score-number").html(totalScore);
    }

    // Updates the HTML page with global variables

    $("#match").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);

    // Functions for clicking on each crystal

    $("#crystal-1").on("click", function() {
        totalScore = totalScore + crystal1Value;
        $("#score-number").text(totalScore);
            // Determine Win/Loss logic
        if (totalScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
            alert("You Lost!");
            resetGame();
        }
        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("You Won!");
            resetGame();
        }
    });

    $("#crystal-2").on("click", function() {
        totalScore = totalScore + crystal2Value;
        $("#score-number").text(totalScore);

        if (totalScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
            alert("You Lost!");
            resetGame();
        }
        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("You Won!");
            resetGame();
        }
    });

    $("#crystal-3").on("click", function() {
        totalScore = totalScore + crystal3Value;
        $("#score-number").text(totalScore);

        if (totalScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
            alert("You Lost!");
            resetGame();
        }
        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("You Won!");
            resetGame();
        }
    });

    $("#crystal-4").on("click", function() {
        totalScore = totalScore + crystal4Value;
        $("#score-number").text(totalScore);

        if (totalScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
            alert("You Lost!");
            resetGame();
        }
        else if (totalScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("You Won!");
            resetGame();
        }
    });
});