var k;

$(document).ready(function(){
	$(".begin").addClass("disabled");
	$(".stop").on("click",function(){
		$(".stop").addClass("disabled");
		$(".begin").removeClass("disabled");
		k=1;
	});
	$(".begin").on("click",function(){
		$(".begin").addClass("disabled");
		$(".stop").removeClass("disabled");
		k=0;
	});
	
	onScreen();
	setInterval(onScreen,1500);
	
	
	});
	
	
	function onScreen(){
		
		$(".mtxt").html(changeColor());
		
	}
	
	function changeColor(){
	while (k!= 1){
	var x ,y ,z,a,b,c,l;
		x=Math.floor(Math.random()*9)+1;
		y=Math.floor(Math.random()*9)+1;
		z=Math.floor(Math.random()*9)+1;
		a=Math.floor(Math.random()*9)+1;
		b=Math.floor(Math.random()*9)+1;
		c=Math.floor(Math.random()*9)+1;
		clr=(x*100000)+(z*10000)+(y*1000)+(a*100)+(b*10)+c;
		l=1000000-clr;
		l="#" + l;
		clr = "#" + clr;
		$(".mtxt").css("color",clr);
		$("body").css("background-color",clr);
		$(".box2").css("background-color","#006600");
		return clr;
		}
	}