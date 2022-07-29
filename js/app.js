const play = document.querySelector(".about__play");
const video = document.querySelector(".about__video video");
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

play.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
  play.classList.add("about__play--hidden");
});

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  });
});
