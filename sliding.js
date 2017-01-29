var wrapDiv = document.querySelector("#wrapDiv");
var rightBtn = document.querySelector("#rightBtn");
var leftBtn = document.querySelector("#leftBtn");

var position = 0;


rightBtn.addEventListener("click", function(){
	if(position===0) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, -600, 0)";
		position += 1;
	}
	else if(position===1) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, -1200, 0)";
		position += 1;
	}
	else if(position===2) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, -1800, 0)";
		position += 1;
	}
	else return false;
});

leftBtn.addEventListener("click", function(){
	if(position===3) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, -1200, 0)";
		position -= 1;
	}
	else if(position===2) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, -600, 0)";
		position -= 1;
	}
	else if(position===1) {
		wrapDiv.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
		position -= 1;
	}
	else return false;
});
