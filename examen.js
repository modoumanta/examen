  var video = document.getElementById("myVideo");
  var btn = document.getElementById("myBtn");

  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "";
    } else {
      video.pause();
      btn.innerHTML = "";
    }
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "600px";
    document.getElementById("main").style.marginLeft = "700px";
    document.body.style.backgroundColor = "gray";
    document.main.style.backgroundColor = "black";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }



  function openNav1() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav1() {
    document.getElementById("myNav").style.display = "none" ;
  }


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let cpt1=0;
    
let left1=document.querySelector('.left1');
let right1=document.querySelector('.right1');




let univers1=document.querySelector('.univers1');
let univers=document.querySelector('.univers');


let sliders1=Array.from(univers1.children);
let screenWidth1=univers.getBoundingClientRect().width=`350`;





-right1.addEventListener('click',avance1);
left1.addEventListener('click',recule1);

setInterval(avance1,2000000)


function avance1(){
    cpt1++;
    if(cpt1===sliders1.length-1){cpt1=0;}

    let decal1=-screenWidth1*cpt1;
    univers1.style.transform=`translateX(${decal1}px)`;
}




function recule1(){
    cpt1--;
    if(cpt1<0){cpt1=sliders1.length-1;}

    let decal1=-screenWidth1*cpt1;
    univers1.style.transform=`translateX(${decal1}px)`;

    document.univers.style.backgroundColor= `rgba(187, 178, 178, 0.986)`;
}



let cpt2=0;
    
let left2=document.querySelector('.left2');
let right2=document.querySelector('.right2');




let univers2=document.querySelector('.univers2');
let univers12=document.querySelector('.univers12');


let sliders2=Array.from(univers2.children);
let screenWidth2=univers.getBoundingClientRect().width=`350`;





-right2.addEventListener('click',avance2);
left2.addEventListener('click',recule2);

setInterval(avance2,2000000);



function avance2(){
    cpt2++;
    if(cpt2===sliders2.length-1){cpt2=0;}

    let decal2=-screenWidth2*cpt2;
    univers2.style.transform=`translateX(${decal2}px)`;
}




function recule2(){
    cpt2--;
    if(cpt2<0){cpt2=sliders2.length-1;}

    let decal2=-screenWidth2*cpt2;
    univers2.style.transform=`translateX(${decal2}px)`;

    document.univers12.style.backgroundColor= `rgba(187, 178, 178, 0.986)`;
}



