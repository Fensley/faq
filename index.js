const iconsone = document.querySelectorAll(".myone");
const iconstwo = document.querySelectorAll(".mytwo");
const iconsthree = document.querySelectorAll(".mythree");

const toggleone = document.querySelector(".tgone");
const toggletwo = document.querySelector(".tgtwo");
const togglethree = document.querySelector(".tgthree");
console.log(toggleone);

iconsone.forEach((each) => {
  each.addEventListener("click", () => {
    toggleone.classList.toggle("toggle");
  });
});

iconstwo.forEach((each) => {
  each.addEventListener("click", () => {
    toggletwo.classList.toggle("toggle");
  });
});

iconsthree.forEach((each) => {
  each.addEventListener("click", () => {
    togglethree.classList.toggle("toggle");
  });
});
