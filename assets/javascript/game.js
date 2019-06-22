//Pseudo Coding
var random_result;
var lost;
var win;

//4 crystal and random result
random_result=Math.floor((Math.random() * 69) + 30;
$("#result").html('Random Result: '+ random_result);

for (var i=0;i<4;i++){

    var random=Math.floor((Math.random() * 11) + 1);
    console.log(random);

    var crystal=$("<div>");
    crystal.attr("class",'crystal');

    $(".crystals").append(crystal);
}

$(".crystal").on('click',function(){

    console.log($(this));
})
//Every crystal has a random number between 1 and 20



//Either after a win or loss a new random number needs to be generated



//When a crystal is clicked it needs to add the previous result until it equals the random number



//For a loss, sum of all clicks should be greater than random number (loss counter incremented by 1)



//For a win, sum of all clicks should be equal to the random number (win counter incremented by 1)