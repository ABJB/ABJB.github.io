
console.log("JS Script is now connected!!!");
var intoString="Hy, I am Ashwin. The quick brown fox jumps right over the lazy dog.";
var intoStringSpeed=50;


function onload(){
	// starting intro page typewriter effect
	typeWriter(document.querySelector("#cover .underlay .underlayContent"), intoString,
			   intoStringSpeed, 0);
}

// util functions
function typeWriter(htmlTag, string, speed, i) {
	console.log(i);
	if (i < string.length) {
		htmlTag.innerHTML += string.charAt(i++);
    	setTimeout(typeWriter,speed,htmlTag, string, speed, i);
	}	
}