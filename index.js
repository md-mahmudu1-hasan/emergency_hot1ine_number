// HeartCount
function heartCount() {
  let accessHeart = document.querySelectorAll(".heart");
  let countHeart = document.getElementById("heart-count");
  let count = 0;
  for (let heart of accessHeart) {
    heart.addEventListener("click", function () {
      count++;
      countHeart.innerText = count;
    });
  }
}
heartCount();
