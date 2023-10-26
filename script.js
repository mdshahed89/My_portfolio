var menuBar=document.querySelector(".fa-bars");
var navBar=document.querySelector(".nav");

menuBar.addEventListener('click',function(){
    navBar.classList.toggle("active");
    navBar.classList("fa-xmark")
})

var skillp=document.querySelector(".skills");
var expp=document.querySelector(".experience");
var edup=document.querySelector(".education");

document.querySelector("#skill").addEventListener('click',function(){
    skillp.style.opacity=1;
    expp.style.opacity=0;
    edup.style.opacity=0;
})
document.querySelector("#exp").addEventListener('click',function(){
    skillp.style.opacity=0;
    expp.style.opacity=1;
    edup.style.opacity=0;
})
document.querySelector("#edu").addEventListener('click',function(){
    skillp.style.opacity=0;
    expp.style.opacity=0;
    edup.style.opacity=1;
})