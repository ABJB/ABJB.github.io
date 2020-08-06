console.log("navbar.js is now connected !!");
// document.addEventListener('DOMContentLoaded', function(){ 
//     console.log("page loaded ");
//     var pathname = window.location.pathname;
//     $('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');

// }, false);

document.querySelector(".swindle button").addEventListener("click", function(){
    if(this.classList.contains("swindle-button-effect")){
    	this.classList.remove("swindle-button-effect");
    	// console.log("Class Is present");
    }else{
    	this.classList.add("swindle-button-effect");
    	// console.log("Class not present");
    }
});

function myFunction(){
	var element=document.querySelector(".nav-drop");
	if (window.getComputedStyle(element).display === "none") {
    	element.classList.add("nav-drop-vis");
  	}else{
  		element.classList.remove("nav-drop-vis");
  	}
}

function copy() {
  newClip=document.querySelector("#copyTxt1").innerText;
  navigator.clipboard.writeText(newClip).then(function() {
      
  }, function() {
    
  });
}