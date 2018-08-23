var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");//is this because it's class why not class name?
var body = document.getElementById("gradient");
var button = document.querySelector("button");
// var rcolor1 = "#"+Math.floor(Math.random()*16777215).toString(16);
// var rcolor2 = "#"+Math.floor(Math.random()*16777215).toString(16);





colorGradient();
function colorGradient(){
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+"," 
	+color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//use input as...well input, rather than click or mouseover right?

color1.addEventListener("input", colorGradient);//don't need to run the function as colorGradient() just list since input is calling for us
	
color2.addEventListener("input", colorGradient);
// colorGradient();


// function getRandomInt(min, max){
// 	return.Math.floor(Math.random() * (max-min + 1)) +min;
// }

button.addEventListener("click", function(){
	console.log("Color Me");
	var rcolor1 = "#"+Math.floor(Math.random()*16777215).toString(16);
	var rcolor2 = "#"+Math.floor(Math.random()*16777215).toString(16);
	console.log(rcolor1);
	console.log(rcolor2);

	color1.value = rcolor1; 
	color2.value = rcolor2;
	body.style.background = "linear-gradient(to right," 
	+ rcolor1 
	+"," 
	+rcolor2 
	+ ")";

	css.textContent = body.style.background + ";";
}
)