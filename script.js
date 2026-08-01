const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closePopup = document.getElementById("closePopup");

const mainMessage = document.getElementById("mainMessage");
const card = document.getElementById("birthdayCard");
const balloonBtn = document.getElementById("balloonBtn");
const balloonModal = document.getElementById("balloonModal");
const closeBalloon = document.getElementById("closeBalloon");
const balloonMessage = document.getElementById("balloonMessage");
const balloons = document.querySelectorAll(".balloon");
const lastPopup = document.getElementById("lastPopup");

popup.style.display = "none";
lastPopup.style.display = "none";

const messages = [
  "Having you as my best friend is the greatest gift; may your birthday be full of love. 💕 - Josh",
  "Thank you for holding the umbrella over my head during every emotional storm I had to navigate. ✨ - YOvvv",
  "You’re the sibling I got to choose for myself, and I would choose you in every single lifetime. 🎂 - Vasu"
];

let msgIndex = 0;

surpriseBtn.addEventListener("click", () => {
  balloonModal.style.display = "none";
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
	window.location.reload();
  //popup.style.display = "none";
  //lastPopup.style.display="flex";
});


card.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / card.offsetWidth - 0.5) * 12;
  const y = (e.offsetY / card.offsetHeight - 0.5) * 12;
  card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) translateY(-6px)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
});





balloonBtn.addEventListener("click", () => {
  balloonModal.style.display = "flex";
});

/*closeBalloon.addEventListener("click", () => {
  balloonModal.style.display = "none";
  balloons.forEach(balloon => {
    balloon.classList.remove("popped");
  });
  balloonMessage.textContent = "Click a balloon to see a message.";
});
*/
balloons.forEach(balloon => {
  balloon.addEventListener("click", () => {
    const msg = balloon.getAttribute("data-msg");
	const id = balloon.getAttribute("id");
    balloon.classList.add("popped");
	document.getElementById(id+"msg").value =msg;
	const balloonMessage = document.getElementById(id+"msg");
	balloonMessage.textContent = msg;
  });
});


const envelopeWrap = document.getElementById("envelopeWrap");

 envelopeWrap.addEventListener("click", function () {
   envelopeWrap.classList.add("open");
 });

 closePopup.addEventListener("click", function (e) {
   e.stopPropagation();
   document.getElementById("popup").style.display = "none";
 });
