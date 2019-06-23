//Pseudo Coding
var random_result;
var lost=0;
var win=0;
var prev=0;


var resetAndStart=function () {
    $(".crystals").empty();
    random_result=Math.floor((Math.random() * 60) + 30);
$("#result").html('Random Result: '+ random_result);

for (var i=0;i<4;i++){

    var randomNumber=Math.floor((Math.random() * 11) + 1);
    //console.log(randomNumber);    

    var crystal=$("<div>");
    crystal.attr({"class":'crystal',"data-random": randomNumber});

    crystal.html(randomNumber);

    $(".crystals").append(crystal);
}
}
resetAndStart();;

$(".crystal").on('click',function(){

    var num=parseInt($(this).attr('data-random'));
    prev += num;
    console.log(prev);

    if(prev>random_result){
        console.log("You Lost!");
        lost++;
        $("#lost-id").html('# of times Lost: '+ lost);
        resetAndStart();
        
    } else if(prev===random_result){
        console.log("You Won!");
        win++;
        $("#win-id").html('# of times Won: '+ win);
        resetAndStart();
    }

});
