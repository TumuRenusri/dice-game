function rolldice(){
var randomnumber=Math.floor((Math.random() * 6)+1);
var randomdiceimage="dice" + randomnumber+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomnumber>randomNumber2){
    document.querySelector("h1").innerHTML="😊 PLayer 1 wins!!";
}
else if(randomnumber<randomNumber2){
    document.querySelector("h1").innerHTML="😊 PLayer 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="😉 It's a draw!!"
}
}

