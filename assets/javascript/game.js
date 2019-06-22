//Pseudo Coding
var random_result;
var lost;
var win;


random_result=Math.floor((Math.random() * 60) + 30);
$("#result").html('Random Result: '+ random_result);

for (var i=0;i<4;i++){

    var randomNumber=Math.floor((Math.random() * 11) + 1);
    console.log(randomNumber);

    var crystal=$("<div>");
    crystal.attr({"class":'crystal',"data-random": randomNumber});

    $(".crystals").append(crystal);
}

$(".crystal").on('click',function(){

    console.log($(this).attr('data-random'));
})
