/******************************************************

 - 구현한 기능

1. 무한 롤링 가능함
2. 인디케이터를 누르면 원하는 곳으로 이동함
3. 인디케이터에 회색으로 위치가 표시됨

 - 문제점

1. 엄청난 하드코딩으로 이뤄낸 결과물
2. 덕분에 유지 보수는 꿈도 못 꿀 것 같다.
3. 정규표현식을 사용하지 않았다(?)

******************************************************/


var rightBtn = document.querySelector("#rightBtn");
var leftBtn = document.querySelector("#leftBtn");

var wrapDivStyle = document.querySelector("#wrapDiv");
var wrapBtn = document.querySelector("#wrapBtn");
var wrapIndicator = document.querySelector("#wrapIndicator");
var getSpan = document.querySelectorAll("span");

var value = -600; //초기 위치 값

function mode(evt){
	if (evt==="rightBtn") value -= 600;
	else if (evt==="leftBtn") value += 600;
}

function addStyle(addValue){ 
	wrapDivStyle.setAttribute("style",
	"transform:translateX("+addValue+"px); transition:all 0.5s ease-in-out;");
}

wrapBtn.addEventListener("click", function(evt){

	var getTargetID = evt.target.id;

	mode(getTargetID); //왼쪽 버튼이냐, 오른쪽 버튼이냐 

	addStyle(value); //위치를 옮긴다


	///////////////////////// 인디케이터 색깔 입히기
	var newValue = (value/(-600))-1;

	for(var i=0; i<getSpan.length; i++) getSpan[i].setAttribute("style","");
	
	if (newValue===(-1)) {
		newValue = 3;
		document.querySelectorAll("span")[newValue].setAttribute("style","color:gray");
	}
	else if (newValue===4) {
		newValue = 0;
		document.querySelectorAll("span")[newValue].setAttribute("style","color:gray");
	}
	else document.querySelectorAll("span")[newValue].setAttribute("style","color:gray");


	////////////////////////// 끝에 가면 원래로 돌리기
	if(value===0){
		setTimeout(function(){		
			wrapDivStyle.setAttribute("style",
			"transform:translateX(-2400px); transition:none;");
			value = -2400;
		}, 500);
	}
	if(value===(-3000)) {
		setTimeout(function(){
			wrapDivStyle.setAttribute("style",
			"transform:translateX(-600px); transition:none;");		
			value = -600;
		}, 500);
	}
});

////////////////////////// 인디케이터 자체 이벤트
wrapIndicator.addEventListener("click", function(evt){

	var getTarget = evt.target;
	var getTagName = getTarget.tagName;

	for(var i=0; i<getSpan.length; i++) getSpan[i].setAttribute("style","");
	if (getTagName==="SPAN") getTarget.setAttribute("style","color:gray");

	addStyle(parseInt(getTarget.id*(-600)));
});

