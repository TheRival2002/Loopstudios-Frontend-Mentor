const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");
const title = document.querySelector(".sub-header h1");

const trailer = document.querySelector(".trailer");

mobileNav.addEventListener("click", function () {
  primaryNav.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});

window.addEventListener("DOMContentLoaded", () => {
  letterFadeUp();
});

window.addEventListener("mousemove", (e) => {
  const interactable = e.target.closest(".subgrid");
  const interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animate(e, interacting);

  if (interacting) {
    icon.className = "fa-solid fa-eye fa-2xs";
  } else {
    icon.className = "";
  }
});

function animate(e, interacting) {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetWidth / 2;

  const animating = {
    transform: `translate(${x}px,${y}px) scale(${interacting ? 3 : 1})`,
  };

  trailer.animate(animating, {
    duration: 800,
    fill: "forwards",
  });
}

function letterFadeUp() {
  const titleText = title.textContent.split("");
  let letters = titleText.map((el, index) => {
    let letter = `<span style="animation-delay: ${index * 35}ms">${el}</span>`;
    if (index === 9) {
      letter = `<span style="animation-delay: ${
        index * 35
      }ms">${el}</span><br>`;
    }
    if (index === 21) {
      letter = `<span style="animation-delay: ${
        index * 35
      }ms">${el}</span><br>`;
    }
    if (index === 26) {
      letter = `<span style="width: 15px;
      animation-delay: ${index * 35}ms">${el}</span>`;
    }
    return letter;
  });
  title.innerHTML = letters.join("");
  const spans = title.querySelectorAll("span");
  spans.forEach((span) => {
    span.classList.add("animate");
  });
}
