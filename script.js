const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slidey').length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

function updateSlider() {
  const slideWidth = document.querySelector('.slidey').clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
let next = document.getElementById("next")
let prev = document.getElementById("prev")

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
let serch=document.getElementById("srch");
serch.addEventListener('click',()=>{
        let srchin=document.getElementById("searchinput");
        // srchin.style.display="block";
 srchin.style.display=srchin.style.display=="block"?"none":"block";
})
let overlay=document.getElementById("overlay");
let profile=document.getElementById("profile");
profile.addEventListener('click',()=>{
        let form=document.getElementById("bigform");
        // srchin.style.display="block";
 form.style.display="block";
  overlay.style.display="block";
  let body=document.getElementsByTagName("BODY")[0];
  body.style.overflow="hidden";
})
let cross=document.getElementById("cross");
cross.addEventListener('click',()=>{
  let form=document.getElementById("bigform");
  form.style.display="none";
  overlay.style.display="none";
  let body=document.getElementsByTagName("BODY")[0];
  body.style.overflow="scroll";
})

let cart=document.getElementById("cart");
cart.addEventListener('click',()=>{
  let btn=document.querySelector(".next");
  let sidebar=document.getElementById("sidebar");
  sidebar.style.display="block"
  btn.style.display="none";
  let overlay=document.getElementById("overlay");
  overlay.style.display="block";
  let body=document.getElementsByTagName("BODY")[0];
  body.style.overflow="hidden";
})
let sidecross=document.getElementById("sidecross");
sidecross.addEventListener('click',()=>{
  let btn=document.querySelector(".next");
  btn.style.display="block";
  let sidebar=document.getElementById("sidebar");
  sidebar.style.display="none";
  sidebar.style.transition="all 0.5s linear 0s";
  let overlay=document.getElementById("overlay");
  overlay.style.display="none";
  let body=document.getElementsByTagName("BODY")[0];
  body.style.overflow="scroll";
})

