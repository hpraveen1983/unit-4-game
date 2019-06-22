//Pseudo Coding
var random_result;
var lost=0;
var win=0;
var prev=0;


random_result=Math.floor((Math.random() * 60) + 30);
$("#result").html('Random Result: '+ random_result);

for (var i=0;i<4;i++){

    var randomNumber=Math.floor((Math.random() * 11) + 1);
    console.log(randomNumber);

    var crystal=$("<div>");
    crystal.attr({"class":'crystal',"data-random": randomNumber});

    crystal.html(randomNumber);

    $(".crystals").append(crystal);
}

$(".crystal").on('click',function(){

    var num=console.log($(this).attr('data-random'));
    prev += num;

    if(prev>random_result){
        lostCounter=lost--;
        $("#lost-id").html('# of times Lost: '+ lostCounter);
    } else if(prev===random_result){
        winCounter=win++;
        $("#win-id").html('# of times Won: '+ winCounter);
    }

});
