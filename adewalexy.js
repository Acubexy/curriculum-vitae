
  //codes for mobile menu open and closing
  let mobileMenu;
  let nav;
let navLink; mobileMenu=document.querySelector("#mobile-menu");
mobileMenu.style.height="0px";
nav=document.querySelector("#mobile-menu nav");
nav.style.top="0";
navLink=document.querySelectorAll(".nav-link");



 let menuIcon=document.querySelector("header #menu-icon").addEventListener("click", 
  ()=>{

if(mobileMenu.style.height=="0px"){
  mobileMenu.style.height="200px";
 nav.style.top="10px";
  }
  else{
  mobileMenu.style.height="0px";
  nav.style.top="-200px";
  }
  }
 );
