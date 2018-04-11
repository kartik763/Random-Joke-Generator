loadJokes();


document.querySelector('#button-click').addEventListener('click',loadJokes);
let output=document.querySelector('.result-div');

function loadJokes(){
   console.log('event heard');
   const xhr=new XMLHttpRequest();

   xhr.open('GET',`https://api.icndb.com/jokes/random`,true);
    
   
   


   xhr.onload=function(){
      if(this.status===200){
      
      
      let response=JSON.parse(this.responseText);
      output.innerHTML=`${response.value.joke}`; 
      }
   }

   xhr.send();
}

onmousemove = function(e){
document.body.style.backgroundColor= `rgb(225, ${e.clientX}, ${e.clientY})`;
}

