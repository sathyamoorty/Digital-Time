let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let ampm=document.getElementById("am")

setInterval(time,1000)

function time(){

let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let am=h>=12? "PM":"AM";

 if(h>12){
    h=h-12;
 }
 h=(h<10)? "0"+h:h;
 m=(m<10)? "0"+m:m;
 s=(s<10)? "0"+s:s;

hour.innerHTML=h;
min.innerHTML=m;
sec.innerHTML=s;
ampm.innerHTML=am;

}





