var looper;
var degrees = 0;

function rotateAnimation(el, speed){
        var pic = document.getElementById("pic");
        pic.style.transform = "rotate("+degrees+"deg)";
        looper = setTimeout("rotateAnimation(\""+el+"\","+speed+")",speed);
        degrees++;
        if(degrees > 359){
                degrees = 1;
        }
}

rotateAnimation(pic, 50);



function rotateAnimation2(el, speed){
        var pic2 = document.getElementById("pic2");
        pic2.style.transform = "rotate("+degrees+"deg)";
        looper = setTimeout("rotateAnimation2(\""+el+"\","+speed+")",speed);
        degrees++;
        if(degrees > 359){
                degrees = 1;
        }

}

rotateAnimation2(pic2, 50);

function animation(el){
        if(el.className = "hide"){
                el.className = "show";
        }

        else {
                el.className = "hide";
        }
}

var onButton = document.getElementById("onButton");

onButton.addEventListener("click",function(){
        animation(pic);
},false);
