//Z.toHTTPS();				      /*强制跳转HTTPS*/
var t;
var IMG=new Array();
var textColor;
var index_img=0;
var colors = new Array();
var greetings = new Array();
var img_URL=new Array();
Z.XMLHttpRequest("first_data.json",function (){
	let data=Z.ourData;
	colors=data.colors;
	img_URL=data.imgURL;
	greetings=data.greetings;
	Z.loadImg(img_URL);                   /*预加载图片*/
	return ;
});
window.onload = function(){
	if($("showTime"))
		startTime();
	document.body.style.display="block";
	call();
	time_Change();
}
window.onresize=function(){
	call();
}
function call(){
	if($("content")){
		center($("content")); 
		center($("content_svg"));
		center_content_text($("content_text"));
	}
}
function startTime(){
	m=Z.checkTime(Z.getMinutes());
	s=Z.checkTime(Z.getSeconds());
	t=setTimeout("startTime()",500);
	if($("year"))
		$("year").innerHTML=Z.getYear();
	$("week").innerHTML="周"+Z.getWeekName();
	$("hours").innerHTML=Z.getHours();
	$("minutes").innerHTML=m;
	$("seconds").innerHTML=s;
	$("showDate").innerHTML=Z.getYear()+"-"+Z.getMonth()+"-"+Z.getDate();
}

function stopTime(){
	clearTimeout(t);
}	
function reColor(i){
	document.bgColor=colors[i];
}
function time_Change(){
	var time=new Date().getHours();
	var greetings_index;
	if((time>=18||time<6) && colors[0]!="#000000"){
		colors[0]="#000000";
		textColor="#FFFFFF";
		document.fgColor=textColor;
		document.bgColor=colors[0];
	}
	else if(time<18 && colors[0]!="#ffffff"){
	     colors[0]="#ffffff";
		 textColor="#000000";
		 document.fgColor=textColor;
		 document.bgColor=colors[0];
	}
	if($("footer")){
		$("friendlyLink").style.color=textColor;
		$("new").style.color=textColor;
		$("id_s").style.color=textColor;
	}
	if($("greeting")){
		if(time>=18) index=4;
		else if(time>=13) index=3;
			 else if(time>=11) index=2;
			      else if(time>=9) index=1;
					   else if(time>=6) index=0;
							else index=5;
		if(index==4 || index==5) {
			$("titleImg").style.backgroundImage="url(https://cdn.jsdelivr.net/gh/lgzzk1024/lgzzk@main/doge1.gif)";
		}else{
			$("titleImg").style.backgroundImage="url(https://cdn.jsdelivr.net/gh/lgzzk1024/lgzzk@main/dog.gif)";
		}
		$("greeting").innerHTML=greetings[index];
	}
	setTimeout("time_Change()",100);
}
function center(position){
	var win_screen=document.documentElement;
	position.style.left=(win_screen.clientWidth-position.clientWidth)/2+"px";
	position.style.top=(win_screen.clientHeight-position.clientHeight)/2+"px";
};
function center_content_text(position){
	var win_screen=document.documentElement;
	position.style.left=(win_screen.clientWidth-position.clientWidth)/2+"px";
};
function next_img(){
	if(++index_img==img_URL.length) index_img=0;
	content.style.backgroundImage="url("+img_URL[index_img].url+")";
}
function last_img(){
	if(--index_img<0) index_img=img_URL.length-1;
	content.style.backgroundImage="url("+img_URL[index_img].url+")";
}
