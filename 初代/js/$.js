"use strict";
window.$=function (id) {
	return document.getElementById(id);
}

window.Z={
	
	$: function (id){
		return document.getElementById(id);
	},
	toHTTPS: function (){
		if(location.protocol=="http:"){			
			location.protocol="https:";
		}
	},
	loadImg: function (URL){
		let hide=document.createElement("div");
		for(var i=0;i<URL.length;i++){
			let img=document.createElement("img");
			img.src=URL[i].url;
			hide.appendChild(img);
		}
		document.body.appendChild(hide);
		document.body.removeChild(hide);
	},
	isNumber: function (num){
		if(num.length==0) return false;
		for(let i of num){
			i=parseInt(i);
			if(isNaN(i)){
				return false;
			}
		}
		return true;
	},
	isSpace: function (str){
		for(var i of str){
			if(i!=' ') {
				return false;
			}
		}
		return true;
	},
	random: function (a,b){
		return Math.floor(Math.random()*(b+1)+a);
	},
	randColor: function (element){
		var randR=this.random(0,255);
		var randG=this.random(0,255);
		var randB=this.random(0,255);
		element.style.backgroundColor="rgb("+randR+","+randG+","+randB+")";
		return ;
	},

	ourRequest: null,
	ourData:	null,
	XMLHttpRequest: function (URL,method){
		this.ourRequest=new XMLHttpRequest();
		this.ourRequest.onreadystatechange=function (){
			if(this.readyState==4 && this.status==200){
				Z.ourData=JSON.parse(this.responseText);
				method();
			}
		}
		this.ourRequest.open('GET',URL,true);
		this.ourRequest.send();
	},
	getYear: function (){
		return new Date().getFullYear();
	},
	getMonth: function (){
		return new Date().getMonth()+1;
	},
	getDay: function (){
		return new Date().getDay();
	},
	getDate: function (){
		return new Date().getDate();
	},
	getHours: function (){
		return new Date().getHours();
	},
	getMinutes: function (){
		return new Date().getMinutes();
	},
	getSeconds: function (){
		return new Date().getSeconds();
	},
	checkTime: function (i){
		if(i<10) i="0"+i;
		return i;
	},
	getWeekName: function (){
		let weeks=new Array("日","一","二","三","四","五","六");
		return weeks[this.getDay()];
	},
	createCheckFoemat: function(){
		var c={};
		c.isNumber=function (num){
			if(isNaN(num)){
				return false;
			}
			return true;
		}
		c.isSpace=function isSpace(str){
			for(var i of str){
				if(i!=' ') {
					return false;
				}
			}
			return true;
		}
		return c;
	}
}