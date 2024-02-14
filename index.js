// Old dynamic typing code

/*
const text = document.querySelector(".sec-text");

const textLoad = () => {
setTimeout(()=>{
    text.textContent = "Software Engineer";
},0);

setTimeout(()=>{
    text.textContent = "Competitive programmer";
},4100);

setTimeout(()=>{
    text.textContent = "ML & AI Enthusiast";
},8000);
}
textLoad();
setInterval(textLoad, 12000);

*/

var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-li li");

hamburger.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open"); 
});