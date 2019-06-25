//Pseudo Coding

//Variable declaration
var CompGuess;
var lost = 0;
var win = 0;
var tempNumber = 0;

//create reset and start function for the game
var resetStart = function () {
    $(".crystals").empty();
    //Four crystal images
    var images = ['https://www.crystalinks.com/lodalite300.jpg',
        'https://www.crystalinks.com/aquamarine.jpg',
        'https://www.crystalinks.com/malachite.jpg',
        'https://www.crystalinks.com/ruby.jpg'];
    CompGuess = Math.floor((Math.random() * 60) + 30);
    $("#result").html('Can you match this Number? ' + CompGuess);
    //for loop to create div and random number
    for (var i = 0; i < 4; i++) {

        var randomNumber = Math.floor((Math.random() * 11) + 1);
        //console.log(randomNumber);    

        var crystal = $("<div>");
        crystal.attr({ "class": 'crystal', "data-random": randomNumber });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });
        //crystal.html(randomNumber);

        $(".crystals").append(crystal);
    }

    $("#tempNumber").html("Total Score: " + tempNumber);

}
resetStart();;

$(document).on('click', ".crystal", function () {

    //Tracking tempNumberious number
    var num = parseInt($(this).attr('data-random'));
    tempNumber += num;
    $("#tempNumber").html("Total Score: " + tempNumber);
    //console.log(tempNumber);

    //loss condition
    if (tempNumber > CompGuess) {
        console.log("You Lost!");
        lost++;
        $("#lost-id").html('Number of Games Lost: ' + lost);
        tempNumber = 0;
        resetStart();
        //win condition
    } else if (tempNumber === CompGuess) {
        console.log("You Won!");
        win++;
        $("#win-id").html('Number of Games Won: ' + win);
        tempNumber = 0;
        resetStart();
    }

});