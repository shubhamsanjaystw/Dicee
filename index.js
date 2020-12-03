var randomNo1=Math.floor((Math.random() *5)+1);
var url1='images/dice'+randomNo1+'.png';
document.querySelector(".img1").src = url1;

var randomNo2=Math.floor((Math.random() *5)+1);
var url2='images/dice'+randomNo2+'.png';
console.log(url2)
document.querySelector(".img2").src = url2;


if (randomNo1>randomNo2){
  document.querySelector('h1').innerHTML='Player One WINS';
}
else if (randomNo1<randomNo2){
  document.querySelector('h1').innerHTML='Player Two WINS';
}
else{
  document.querySelector('h1').innerHTML='!!! Draw !!!';
}
