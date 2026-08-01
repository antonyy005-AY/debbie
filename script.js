const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closePopup = document.getElementById("closePopup");

const mainMessage = document.getElementById("mainMessage");
const card = document.getElementById("birthdayCard");
const balloonBtn = document.getElementById("balloonBtn");
const balloonModal = document.getElementById("balloonModal");

const balloons = document.querySelectorAll(".balloon");
const lastPopup = document.getElementById("lastPopup");

// Ensure popups are hidden initially
if (popup) popup.style.display = "none";
if (lastPopup) lastPopup.style.display = "none";

// Surprise button: from balloon modal to envelope popup
if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    if (balloonModal) balloonModal.style.display = "none";
    if (popup) popup.style.display = "flex";
  });
}

// Close envelope popup & reload page
if (closePopup) {
  closePopup.addEventListener("click", (e) => {
    e.stopPropagation();
    if (popup) popup.style.display = "none";
    // Optional small delay so user sees it closing
    setTimeout(() => {
      window.location.reload();
    }, 150);
  });
}

// 3D tilt effect on card (works on desktop; harmless on mobile)
card.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / card.offsetWidth - 0.5) * 12;
  const y = (e.offsetY / card.offsetHeight - 0.5) * 12;
  card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) translateY(-6px)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
});

// Open balloon modal
if (balloonBtn) {
  balloonBtn.addEventListener("click", () => {
    if (balloonModal) balloonModal.style.display = "flex";
  });
}

// Balloon pop logic
balloons.forEach((balloon) => {
  balloon.addEventListener("click", () => {
    const msg = balloon.getAttribute("data-msg");
    const id = balloon.getAttribute("id");

    balloon.classList.add("popped");

    const balloonMessageEl = document.getElementById(id + "msg");
    if (balloonMessageEl) {
      balloonMessageEl.textContent = msg;
    }
  });
});

// Envelope open animation (optional, since you already use CSS :open class)
const envelopeWrap = document.getElementById("envelopeWrap");
if (envelopeWrap) {
  envelopeWrap.addEventListener("click", function () {
    envelopeWrap.classList.add("open");
  });
}

// Safety: prevent envelope click from closing popup unintentionally
if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      // Optional: close when clicking outside envelope
      // popup.style.display = "none";
    }
  });
}
