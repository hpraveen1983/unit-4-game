//Pseudo Coding
var random_result;
var lost=0;
var win=0;
var prev=0;


var resetAndStart=function () {
    $(".crystals").empty();
    var images =['https://image.shutterstock.com/image-photo/amazing-colorful-quartz-rainbow-flame-600w-736064353.jpg',
    'https://image.shutterstock.com/image-photo/amethyst-cluster-mineral-specimen-closeup-600w-1412059817.jpg',
    'https://image.shutterstock.com/image-photo/amazing-colorful-blue-agate-crystal-600w-1012382911.jpg',
    'https://image.shutterstock.com/image-illustration/3d-render-emerald-green-crystal-600w-674585770.jpg'];
    random_result=Math.floor((Math.random() * 60) + 30);
$("#result").html('Random Result: '+ random_result);

for (var i=0;i<4;i++){

    var randomNumber=Math.floor((Math.random() * 11) + 1);
    //console.log(randomNumber);    

    var crystal=$("<div>");
    crystal.attr({"class":'crystal',"data-random": randomNumber});
    crystal.css({"background-image":"url('"+ images[i] +"')",
    "background-size":"cover"});
    crystal.html(randomNumber);

    $(".crystals").append(crystal);
}

$("#prev").html("Total Score: "+prev);

}
resetAndStart();;

$(document).on('click',".crystal",function(){

    var num=parseInt($(this).attr('data-random'));
    prev += num;
    $("#prev").html("Total Score: "+prev);
    console.log(prev);

    if(prev>random_result){
        console.log("You Lost!");
        lost++;
        $("#lost-id").html('# of times Lost: '+ lost);
        prev=0;
        resetAndStart();
        
    } else if(prev===random_result){
        console.log("You Won!");
        win++;
        $("#win-id").html('# of times Won: '+ win);
        prev=0;
        resetAndStart();
    }

});
