let ratings = document.querySelectorAll("li");

ratings.forEach((item) => {
  item.addEventListener("click", (e) => {
    let clickedRating = e.target.getAttribute("id");

    for (i = 0; i < ratings.length; i++) {
      ratings[i].style.backgroundColor = "hsl(216, 12%, 8%)";
      if (i == clickedRating - 1) {
        ratings[clickedRating - 1].style.backgroundColor = "hsl(216, 12%, 54%)";
      }
    }

    let ratingNumber = document.getElementsByTagName("span")[0];
    ratingNumber.innerHTML = clickedRating;
  });
});

document.getElementById("thankYou").style.display = "none";
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  document.getElementById("thankYou").style.display = "flex";
  document.getElementById("rating").style.display = "none";
});
