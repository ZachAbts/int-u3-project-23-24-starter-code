// Declare varient.querySelector("class=option-one")
let optiononebutton=document.querySelector(".down");
let optiontwobutton=document.querySelector(".bed")
let screenOne=document.querySelector(".optionOneScreen");
let screenEnd=document.querySelector(".optionEnd")
let button1=document.querySelector(".button1")
let button2=document.querySelector(".button2")

optiononebutton.addEventListener('click', function(){
    console.log("test");
    screenOne.style.display="block"
    screenEnd.style.display="none"
});
let optionEnd=document.querySelector(".bed");
optiontwobutton.addEventListener('click', function() {
    console.log("two");
    screenEnd.style.display="block"
    screenOne.style.display="none"
});
button1.addEventListener('click', function() {
    console.log("two");
    screenEnd.style.display="block"
    screenOne.style.display="none"
});
button2.addEventListener('click', function(){
    console.log("two");
    screenEnd.style.display="block"
    screenOne.style.display="none"
});










// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });