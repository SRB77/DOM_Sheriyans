const btn = document.querySelector("button");
const growth = document.querySelector(".growth");
let h4 = document.querySelector("h4");
let width = 0;

btn.addEventListener("click", () => {
  // Reset width to 0 for new download
  width = 0;
  const random = Math.floor(Math.random() * 101);
  let intervalId = setInterval(() => {
    if (width <= 100) {
      growth.style.width = `${width}%`;
      h4.innerText = `${width}%`;
      width++;
    } else {
      clearInterval(intervalId);
    }
  }, random);
});
