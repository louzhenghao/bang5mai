
    //nav's slide 
    var nav=document.getElementsByClassName('nav');

    nav[0].childNodes[1].childNodes[1].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[1].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[3].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[3].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[5].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[5].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[7].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[7].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[9].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[9].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[11].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[11].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[13].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[13].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[15].onmouseover=function(){
    			nav[0].childNodes[1].childNodes[15].childNodes[0].style.backgroundColor="#fe0d4a";
    }
    nav[0].childNodes[1].childNodes[1].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[1].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[3].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[3].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[5].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[5].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[7].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[7].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[9].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[9].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[11].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[11].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[13].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[13].childNodes[0].style.backgroundColor="black";
    }
    nav[0].childNodes[1].childNodes[15].onmouseout=function(){
    			nav[0].childNodes[1].childNodes[15].childNodes[0].style.backgroundColor="black";
    }

    //first zoom
    var cd=document.getElementById("commoditydetials");
    var box=document.getElementById("box");
    var img1=document.getElementById("img1");
    var slider=document.getElementById("slider");
    var img2=document.getElementById("img2");
    var Bimg=document.getElementById("Bimg");
    console.log(cd.offsetLeft);
    console.log(box.offsetLeft);
    function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
            scrollPos = window.pageYOffset; }  
            else if (document.compatMode && document.compatMode != 'BackCompat')  
                { scrollPos = document.documentElement.scrollTop; }  
            else if (document.body) { scrollPos = document.body.scrollTop; }   
            return scrollPos;   
        }

    img1.onmouseover=function(){
        slider.style.display="block";
        img2.style.display="block";
    }

    img1.onmouseout=function(){
        slider.style.display="none";
        img2.style.display="none";
    }

    img1.onmousemove=function(){
        var ev=ev||window.event;
        var left=ev.clientX-box.offsetLeft-cd.offsetLeft-slider.offsetWidth/2;
        var top=ev.clientY-box.offsetTop-cd.offsetTop+getScrollTop()-slider.offsetHeight/2;
        var maxLeft=img1.offsetWidth-slider.offsetWidth;
        var maxTop=img1.offsetHeight-slider.offsetHeight;
        left=left>maxLeft?maxLeft:left<0?0:left;
        top=top>maxTop?maxTop:top<0?0:top;
        slider.style.left=left+"px";
        slider.style.top=top+"px";
        var w=left/maxLeft;
        var h=top/maxTop;
        var BimgLeft=img2.offsetWidth-Bimg.offsetWidth;
        var BimgTop=img2.offsetHeight-Bimg.offsetHeight;
        Bimg.style.left=w*BimgLeft+"px";
        Bimg.style.top=h*BimgTop+"px";
        img2.style.zIndex='1';
    }

    //second zoom
    var img3=document.getElementById("img3");
    var slider1=document.getElementById("slider1");
    var img4=document.getElementById("img4");
    var Bimg1=document.getElementById("Bimg1");

    img3.onmouseover=function(){
        slider1.style.display="block";
        img4.style.display="block";
    }

    img3.onmouseout=function(){
        slider1.style.display="none";
        img4.style.display="none";
    }

    img3.onmousemove=function(){
        var ev=ev||window.event;
        var left=ev.clientX-box.offsetLeft-cd.offsetLeft-slider1.offsetWidth/2;
        var top=ev.clientY-box.offsetTop-cd.offsetTop+getScrollTop()-slider1.offsetHeight/2;
        var maxLeft=img3.offsetWidth-slider1.offsetWidth;
        var maxTop=img3.offsetHeight-slider1.offsetHeight;
        left=left>maxLeft?maxLeft:left<0?0:left;
        top=top>maxTop?maxTop:top<0?0:top;
        slider1.style.left=left+"px";
        slider1.style.top=top+"px";
        var w=left/maxLeft;
        var h=top/maxTop;
        var BimgLeft=img4.offsetWidth-Bimg1.offsetWidth;
        var BimgTop=img4.offsetHeight-Bimg1.offsetHeight;
        Bimg1.style.left=w*BimgLeft+"px";
        Bimg1.style.top=h*BimgTop+"px";
        img4.style.zIndex='1';
    }

    //Net content onclick and change the down amount
    var nc1=document.getElementById("netcontent1");
    var nc2=document.getElementById("netcontent2");
    var pic1=document.createElement("img");
    var pic2=document.createElement("img");
    var c=document.getElementById("content");
    nc1.appendChild(pic1);
    nc2.appendChild(pic2);
    nc1.onclick=function(){
        nc1.style.border="1px solid #ff0853";
        pic1.src='任务所需小图/img/duigou.png';
        pic1.style.position='relative';
        pic1.style.top='11px';
        pic1.style.right='-8px';
        nc2.style.borderColor='white';
        pic2.src='';
        var content='';
        for(var i=0;i<5;i++){
            content=content+nc1.innerHTML[i];
        }
        c.innerHTML=content;
    }

    nc2.onclick=function(){
        nc2.style.border="1px solid #ff0853";
        pic2.src='任务所需小图/img/duigou.png';
        pic2.style.position='relative';
        pic2.style.top='11px';
        pic2.style.right='-8px';
        nc1.style.borderColor='white';
        pic1.src='';
        var content='';
        for(var i=0;i<5;i++){
            content=content+nc2.innerHTML[i];
        }
        c.innerHTML=content;
    }

    //change the amount
    var add=document.getElementById('add');
    var reduce=document.getElementById('reduce');
    var amount=document.getElementById('amount');

    add.onclick=function(){
        var num=amount.value;
        if(num>=5){
            add.style.cursor='not-allowed';
            return;
        }
        else{
            num++;
            amount.value=num;
            reduce.style.cursor='pointer';
        }
    }
    reduce.onclick=function(){
        var num=amount.value;
        if(num<=1){
            reduce.style.cursor='not-allowed';
            return;
        }
        else{
            num--;
            amount.value=num;
            add.style.cursor='pointer';
        }
    }

    //close the promptpage
    var close=document.getElementById('close');
    var pp=document.getElementById('promptpage');
    var keepshopping=document.getElementById('keepshopping');
    var addshopcar=document.getElementById('addshopcar');
    close.onclick=function(){
        pp.style.display='none';
    }
    keepshopping.onclick=function(){
        pp.style.display='none';
    }
    addshopcar.onclick=function(){
        pp.style.display='block';
    }

    //operate to sp0 sp1
    var sp0=document.getElementById('sp0');
    var sp1=document.getElementById('sp1');

    sp0.onmouseover=function(){
        sp0.style.border="2px solid #ff9003";
        sp1.style.borderColor='white';
        img1.style.display='block';
        img3.style.display='none';
    }
    sp0.onmouseout=function(){
    }
    sp1.onmouseover=function(){
        sp1.style.border="2px solid #ff9003";
        sp0.style.borderColor='white';
        img1.style.display='none';
        img3.style.display='block';
    }
    sp1.onmouseout=function(){
    }