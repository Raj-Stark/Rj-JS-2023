const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNum = getRandomNum();

  console.log(randomNum);

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

const getRandomNum = () => {
  return Math.floor(Math.random() * colors.length);
};
