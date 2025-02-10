const feedbacks = document.querySelectorAll(".feedback");

const updateOpacityFeedbacks = () => {
  feedbacks.forEach((item) => item.classList.remove("opacity"));

  if (window.innerWidth < 768) {
    feedbacks[0].classList.add("opacity");
    feedbacks[1].classList.add("opacity");
    feedbacks[feedbacks.length - 1].classList.add("opacity");
    feedbacks[feedbacks.length - 2].classList.add("opacity");
  } else {
    feedbacks[0].classList.add("opacity");
    feedbacks[feedbacks.length - 1].classList.add("opacity");
  }
};

updateOpacityFeedbacks();
window.addEventListener("resize", updateOpacityFeedbacks);
