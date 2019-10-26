// Make sure document is loaded

$(document).ready(function() {

    // Declare Variables

    var randomNumber = Math.floor((Math.random() * 120) + 19);
    console.log(randomNumber);
    var crystal1Value = Math.floor((Math.random() * 12) + 1);
    console.log(crystal1Value);
    var crystal2Value = Math.floor((Math.random() * 12) + 1);
    console.log(crystal2Value);
    var crystal3Value = Math.floor((Math.random() * 12) + 1);
    console.log(crystal3Value);
    var crystal4Value = Math.floor((Math.random() * 12) + 1);
    console.log(crystal4Value);

    // Win/Loss and Total Score
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // function to reset game

    function resetGame() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        console.log(randomNumber);
        wins = 0;
        losses = 0;
        crystal1Value = Math.floor((Math.random() * 12) + 1);
        console.log(crystal1Value);
        crystal2Value = Math.floor((Math.random() * 12) + 1);
        console.log(crystal2Value);
        crystal3Value = Math.floor((Math.random() * 12) + 1);
        console.log(crystal3Value);
        crystal4Value = Math.floor((Math.random() * 12) + 1);
        console.log(crystal4Value);
        totalScore = 0;
        $("#match").html(randomNumber);
        $("#score-number").html(totalScore);
    }

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