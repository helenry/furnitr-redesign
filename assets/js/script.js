const bar = document.querySelector(".bar");
const navMobile = document.querySelector(".mobile");
const close = document.querySelector(".close");
const menus = document.querySelectorAll(".mobile ul li a");

navMobile.style.display = "none";

bar.addEventListener("click", function () {
  navMobile.style.display = "";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  navMobile.style.display = "none";
  document.body.style.overflow = "";
});

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", () => {
    navMobile.style.display = "none";
    document.body.style.overflow = "";
  });
}
