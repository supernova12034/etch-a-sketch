let cont = document.querySelector('#container1');
let btn = document.querySelector('#btn1');
let count = 16 * 16;
let displayCount = 0;


function one(){
    for(let i = 0;i<count; i++){
     displayCount++;   
     let box = document.createElement("div");   
      //let test = document.createTextNode(displayCount);  
       //box.appendChild(test);
       cont.appendChild(box);
       box.id = "id1";
       box.style.backgroundColor = "#07F193";
       box.style.height = "30px";
       box.style.width = "30px";
       box.style.gap = "5px";


        box.addEventListener("mouseover",function(e){
            

        });

        box.addEventListener("click",function(e){
            box.remove();
        });

        function colorGen(){
            let red = Math.random() * 255;
            let green = Math.random() * 255;
            let blue = Math.random() * 255;
            box.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }




    }




}

one();

btn.addEventListener("click",function(e){
displayCount = 0;
let count2 = Number(prompt("Please enter the number of divs you would like: "));
count = count2 * count2;
cont.style.gridTemplateColumns = `repeat(${count2}, 1fr)`;
cont.style.gridTemplateRows = `repeat(${count2}, 1fr)`;

one();

});




/* 
Problem here was that, even though we got the 
number of columns right, the number of divs being
created was also affected.

What we needed is for the number of divs being created
and the number of columns to be seperate and independent
from each other.
*/