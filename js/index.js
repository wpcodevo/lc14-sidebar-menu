const navLinks = [...document.querySelectorAll(".nav-link")];
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let i = 0;
    while (i < navLinks.length) {
      navLinks[i++].className = "nav-link";
    }
    link.classList.add("active");
  });
});

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  if (navigation.classList.contains("active")) {
    toggle.innerHTML = `<ion-icon name="chevron-back-outline"></ion-icon>`;
  } else {
    toggle.innerHTML = `<ion-icon name="chevron-forward-outline"></ion-icon>`;
  }
});
