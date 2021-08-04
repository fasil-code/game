function getRandom() {
  return Math.floor(Math.random()*3)+1;
}

function checkResult(result) {
  if (result) {
        document.querySelector("h1").innerHTML="Sucess !";        
        document.querySelector("h1").style.color="blue";        
        document.querySelector("body").style.backgroundColor="green";   
  }
  else {
        document.querySelector("h1").innerHTML="Failed !";
        document.querySelector("body").style.backgroundColor="red"; 
   }
}

var x = getRandom();

document.getElementById("fir").addEventListener("click",function(){
   
   let a=document.getElementById("fir").value;
   checkResult(a==x);
   x = getRandom();

});

document.getElementById("sec").addEventListener("click",function(){
   
   let a=document.getElementById("sec").value;
   checkResult(a==x);
   x = getRandom();

});

document.getElementById("thi").addEventListener("click",function(){
   
   let a=document.getElementById("thi").value;
   checkResult(a==x);
   x = getRandom();

});

