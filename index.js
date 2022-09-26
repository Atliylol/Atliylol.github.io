// ACID IMAGE
let randomImg = new Array();
for (let i = 1; i <= 6; i++) {
	randomImg[i - 1] = i;
}

const acidImg = document.getElementById("acidimg");
const moonImg = document.getElementById("moon");
const moonTxt = document.getElementById("moontxt");

// MOON

let moonTalkNum = Math.floor((Math.random() * 6));
let moonTalk = "";

// FUNCTIONS

window.onload = winLoad;

function winLoad() {
     var randomNum = Math.floor(Math.random() * randomImg.length);
     acidImg.src = acidImg.src + randomImg[randomNum].toString() + ".png";
     if (randomNum == 2) // GTA
     {
	     acidImg.style.width = "325px";
     }
     if (randomNum == 3) // KANYE
     {
	     acidImg.style.width = "250px";
     }
     console.log("random acid: " + randomNum);
}


function moon() {
     if (moonTxt.getAttribute("style").indexOf("animation") != -1)
          return 0;

     switch (moonTalkNum)
     {
          case 0:
          {
               moonTalk = "What is that face? Never saw a talking moon before?";
               moonTxt.style.fontSize = "20px";
               moonImg.src = "./images/body/center/moon_stare.png";
               break;
          }
          case 1:
          {
               moonTalk = "I am not made of cheese!";
               moonTxt.style.fontSize = "24px";
               moonImg.src = "./images/body/center/moon_serious.png";
               break;
          }
          case 2:
          {
               moonTalk = "This city is so boring...";
               moonTxt.style.fontSize = "24px";
               moonImg.src = "./images/body/center/moon_stare.png";
               break;
          }
          case 3:
          {
               moonTalk = "Why is always night?";
               moonTxt.style.fontSize = "24px";
               moonImg.src = "./images/body/center/moon_stare.png";
               break;
          }
          case 4:
          {
               moonTalk = "I'm getting the [$!?!] outta here!";
               moonTxt.style.fontSize = "24px";
               moonImg.src = "./images/body/center/moon_angry.png";
               moonImg.style.position = "absolute";
               moonImg.style.right = "25%";
               moonImg.style.marginRight = 0;
               moonImg.style.animation="madMoon 2s cubic-bezier(1, 0, 1, 1) 0s 1";
               document.querySelector("html").style.overflow = "hidden";
               document.querySelector("html").style.right = "8.25px";
               moonImg.addEventListener('animationend', (event) => {
                    moonImg.style.removeProperty('animation');
                    document.querySelector("html").style.overflow = "visible";
                    document.querySelector("html").style.right = 0;
               });
               break;
          }
          case 5:
          {
               moonTalk = "";
               moonImg.src = "./images/body/center/moon_ascend.png";

               document.querySelector("html").style.overflow = "hidden";
               document.querySelector("html").style.right = "8.25px";

               var ps1 = new Audio('./sounds/ps1.mp3');
               ps1.play();

               break;
          }
     }

     moonTxt.innerHTML = moonTalk;
     moonTxt.style.opacity = 1;
     if (moonTalkNum != 5)
          moonTxt.style.animation="fadeout 1s cubic-bezier(0.9,-0.01, 0.14, 0.88) 1s 1 normal forwards";
     else
          moonTxt.style.animation="fadeout 13s linear 1s 1 normal forwards";

     moonImg.addEventListener('animationend', (event) => {
          moonImg.style.removeProperty('animation');
     });

     moonTxt.addEventListener('animationend', (event) => {
          moonTxt.style.removeProperty('animation');
          moonTxt.style.opacity = 0;
          moonTalk = "";
          moonImg.src = "./images/body/center/moon.png";
          if (moonTalkNum == 5)
          {
               document.querySelector("html").style.overflow = "visible";
               document.querySelector("html").style.right = 0;
          }
          moonTalkNum = Math.floor((Math.random() * 5));
     });
     // moonTxt.style.removeProperty('animation');
}