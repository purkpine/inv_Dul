// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const medioText = document.getElementById("medio-text");
let contador = 1;
// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn



// Logic to make YES btn to grow

 let yesScale = 1;
 
// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
    
    contador +=1;
    document.querySelector(".letter-window").classList.add("medio-text");
    medioText.style.display = "block";
         switch (contador) {
      case 2:{
         title.textContent = "jeje creo que le picaste mal";
         catImg.src = "cat_kitty.gif";
          break;
   }
     case 3:{
         title.textContent = "jeje preciosa, andas distraida vd? ";
         catImg.src = "cat_gun.gif";
          break;
   }
     case 4:{
         title.textContent = "estas segura?!";
         catImg.src = "cat_sad.gif";
          break;
   }
     case 5:{
         title.textContent = "andale, ya bien";
         catImg.src = "andele.png";
          break;
   }
    case 6:{
         title.textContent = "ayññ ya no ta siendo gracioso :c";
         catImg.src = "lloro.gif";
         yesScale += 2;
          break;
   }
     case 7:{
         title.textContent = "mmm deja te ayudo poquito...";
         catImg.src = "cat_kitty.gif";
    //if (yesBtn.style.position !== "fixed") {
    //     yesBtn.style.position = "fixed";
    //     yesBtn.style.top = "25%";
    //     yesBtn.style.left = "25%";
    //     yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    // }else{
    //     yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    // };
        noBtn.addEventListener("mouseover", () => {
   const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}); break;
   };
     default:
         ;
 }; });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "wuwuwuwu buen salto de fe!";

    catImg.src = "milesleap.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
