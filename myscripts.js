
let b=document.getElementById("sec").value;
let c=document.getElementById("thi").value;

var x=Math.floor(Math.random()*3)+1;

document.getElementById("fir").addEventListener("click",function(){
   
    let a=document.getElementById("fir").value;
    
    if(x==a){
        document.querySelector("h1").innerHTML="Sucess !";        
        document.querySelector("h1").style.color="blue";        
        document.querySelector("body").style.backgroundColor="green";        

    }
    else{
        document.querySelector("h1").innerHTML="Failed !";
        document.querySelector("body").style.backgroundColor="red"; 
    }

});

document.getElementById("sec").addEventListener("click",function(){
   
    let a=document.getElementById("sec").value;

if(x==a){
    document.querySelector("h1").innerHTML="Sucess !";        
    document.querySelector("h1").style.color="blue";        
    document.querySelector("body").style.backgroundColor="green";        

}
else{
    document.querySelector("h1").innerHTML="Failed !";
    document.querySelector("body").style.backgroundColor="red"; 
}

});
document.getElementById("thi").addEventListener("click",function(){
   
    let a=document.getElementById("thi").value;

if(x==a){
    document.querySelector("h1").innerHTML="Sucess !";        
    document.querySelector("h1").style.color="blue";        
    document.querySelector("body").style.backgroundColor="green";        

}
else{
    document.querySelector("h1").innerHTML="Failed !";
    document.querySelector("body").style.backgroundColor="red"; 
}
});

