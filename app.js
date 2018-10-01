setTimeout(function(){
    console.log("3 sec have passed");
},3000);
time=0;
var timer=setInterval(function(){
    time+=1;
    console.log(time+"sec passed");
    if(time>8){
        clearInterval(timer);
    }
},2000)