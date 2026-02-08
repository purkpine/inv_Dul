// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const contador = 1;
// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

//noBtn.addEventListener("click", () => {
//   const min = 200;
//    const max = 200;
//
//    const distance = Math.random() * (max - min) + min;
//    const angle = Math.random() * Math.PI * 2;
//
//    const moveX = Math.cos(angle) * distance;
//    const moveY = Math.sin(angle) * distance;

//    noBtn.style.transition = "transform 0.3s ease";
//    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
//});

// Logic to make YES btn to grow

 let yesScale = 1;
 
 yesBtn.style.position = "relative"
 yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
    
     yesScale += 0.25;
     switch (contador) {
case "2":
    title.textContent = "jeje creo que le picaste mal";

    catImg.src = "cat_kitty.gif";
  case "3":
    title.textContent = "segura?!!";

    catImg.src = "cat_gun.gif";
  case "4":
    title.textContent = "es neta?!!";

    catImg.src = "cat_sad.gif";
case "5":
    title.textContent = "andale, ya bien";

    catImg.src = "lloro.gif";
case "6":
    title.textContent = "segura?!!";

    catImg.src = "cat_gun.gif";
  default:
    title.textContent = "wololo";
    contador +=1;
}

     if (yesBtn.style.position !== "fixed") {
         yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";
         yesBtn.style.left = "50%";
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
 });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "wuwuwuwu buen salto de fe!";

    catImg.src = "milesleap.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
