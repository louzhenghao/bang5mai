	//帮5买.js

	//顶部悬浮
	window.onload=function(){
		var top=document.getElementsByClassName('main_top')[0];
		window.onscroll=function(){
			var st=document.documentElement.scrollTop || document.body.screenTop;
			if (st>180){
				top.style.position='fixed';
				top.style.zIndex='1';
			}
			else {
				top.style.position='static';
			}
		}
	}

	//滑入滑出
	var pic=document.getElementById('pic');
    var intervalId1;
    setOne2();
    pic.onmouseover = function(){
        window.clearInterval(intervalId1);
        setOne1();
    }
    pic.onmouseout = function(){
        window.clearInterval(intervalId1);
        setOne2();
    }
    function setOne1(){
        intervalId1 = window.setInterval(creatOne1,10);
    }
    function setOne2(){
        intervalId1 = window.setInterval(creatOne2,10);
    }
    function creatOne1(){
        if (parseInt(pic.style.right)!=0) {
            pic.style.right = (parseInt(pic.style.right)+1)+'px';
        }   
    }
    function creatOne2(){
        if (parseInt(pic.style.right)!=-60) {
            pic.style.right = (parseInt(pic.style.right)-1)+'px';
        }   
    }

    var pic1=document.getElementById('pic1');
    var intervalId2;
    setTwo2();
    pic1.onmouseover = function(){
        window.clearInterval(intervalId2);
        setTwo1();
    }
    pic1.onmouseout = function(){
        window.clearInterval(intervalId2);
        setTwo2();
    }
    function setTwo1(){
        intervalId2 = window.setInterval(creatTwo1,10);
    }
    function setTwo2(){
        intervalId2 = window.setInterval(creatTwo2,10);
    }
    function creatTwo1(){
        if (parseInt(pic1.style.right)!=0) {
            pic1.style.right = (parseInt(pic1.style.right)+1)+'px';
        }   
    }
    function creatTwo2(){
        if (parseInt(pic1.style.right)!=-60) {
            pic1.style.right = (parseInt(pic1.style.right)-1)+'px';
        }   
    }

    var pic2=document.getElementById('pic2');
    var intervalId3;
    var serwei=document.getElementById('serwei');
    var erwei=document.getElementById('erwei');

    setThree2();
    pic2.onmouseover = function(){
    	erwei.style.display='block';
 		serwei.style.display='none';
        window.clearInterval(intervalId3);
        setThree1();
    }
    pic2.onmouseout = function(){
    	erwei.style.display='none';
    	serwei.style.display='block';
        window.clearInterval(intervalId3);
        setThree2();
    }
    function setThree1(){
        intervalId3 = window.setInterval(creatThree1,10);
    }
    function setThree2(){
        intervalId3 = window.setInterval(creatThree2,10);
    }
    function creatThree1(){
        if (parseInt(pic2.style.right)!=0) {
            pic2.style.right = (parseInt(pic2.style.right)+1)+'px';
        }   
    }
    function creatThree2(){
        if (parseInt(pic2.style.right)!=-60) {
            pic2.style.right = (parseInt(pic2.style.right)-1)+'px';
        }   
    }

    var pic3=document.getElementById('pic3');
    var intervalId4;
    setFour2();
    pic3.onmouseover = function(){
        window.clearInterval(intervalId4);
        setFour1();
    }
    pic3.onmouseout = function(){
        window.clearInterval(intervalId4);
        setFour2();
    }
    function setFour1(){
        intervalId4 = window.setInterval(creatFour1,10);
    }
    function setFour2(){
        intervalId4 = window.setInterval(creatFour2,10);
    }
    function creatFour1(){
        if (parseInt(pic3.style.right)!=0) {
            pic3.style.right = (parseInt(pic3.style.right)+1)+'px';
        }   
    }
    function creatFour2(){
        if (parseInt(pic3.style.right)!=-60) {
            pic3.style.right = (parseInt(pic3.style.right)-1)+'px';
        }   
    }

	//轮播图
	function getStyle(obj,style){  
		if(obj.currentStyle) 
		{  
			return obj.currentStyle[style];  
		} 
		else 
		{  
			return getComputedStyle(obj)[style];  
		}  
	}
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == 'opacity'){
					now = parseInt(getStyle(obj,attr)*100);
				}else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == 'opacity'){
					obj.style[attr] = cur / 100;
				}else{
					obj.style[attr] = cur + 'px';
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-795*index},function(){
			if(index==7){
				slider.style.left = '-795px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider,{left:-795*index},function(){
			if(index==0){
				slider.style.left = '-4770px';
				index = 6;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].className = "";
		}
		if(index >6 ){
			oNavlist[0].className = "active";
		}else if(index<=0){
			oNavlist[5].className = "active";
		}else {
			oNavlist[index-1].className = "active";
		}
	}
	var srt=document.getElementById('screenrotationchart');
	var oNavlist=document.getElementById('nav_num').children;
	var slider=document.getElementById('slider');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var index=1;
	var timer;
	var isMoving=false;
	srt.onmouseover = function(){
		animate(left,{opacity:100})
		animate(right,{opacity:100})
		clearInterval(timer)
	}
	srt.onmouseout=function(){
		animate(left, {opacity:0})
		animate(right,{opacity:0})
		timer=setInterval(next, 4000);
	}
	right.onclick=next;
	left.onclick=prev;
	for (var i=0;i<oNavlist.length;i++){
		(function(i){
			oNavlist[i].onclick=function(){
				index=i+1;
				navmove();
				animate(slider,{left:-795*index});
			}
		})(i);
	}
	
	timer = setInterval(next, 4000);

	//话费充值
	var amount=document.getElementById("amount");
	prepaidrefill.onchange=function(){
		var num=document.getElementById("prepaidrefill").value;
		amount.innerHTML=num;
	}
	
	//left Wheel planting
	var notice =document.getElementsByClassName('notice');
	var newflash=document.getElementsByClassName('newflash')[0];

	var intervalIdnf;

	setTimer();
	newflash.onmouseover=function(){
		clearTimer();
	}
	newflash.onmouseout=function(){
		setTimer();
	}
	function setTimer(){
		intervalIdnf=window.setInterval(creat, 1);
	}
	function clearTimer(){
		window.clearInterval(intervalIdnf);
	}
	function creat(){
		for (var i=0;i<13;++i){
			notice[i].style.top=(parseFloat(notice[i].style.top)-0.1)+'px';
		}
		for (var i=0;i<13;i++){
			if(parseInt(notice[i].style.top)==-30){
				notice[i].style.top=360+'px';
			}
		}
	}