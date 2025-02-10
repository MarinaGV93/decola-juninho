const faqsAnswer = document.querySelectorAll(".answer");
const faqsQuestion = document.querySelectorAll(".open-answer-button");
const plusIcon = document.querySelectorAll(".plus-icon");

faqsQuestion.forEach((question, index) => {
  question.addEventListener("click", () => {
    const currentAnswer = faqsAnswer[index];
    const currentIcon = plusIcon[index];
    const activeAnswer = document.querySelector(".active");
    const activeIcon = document.querySelector(".icon-active");

    if (activeAnswer) {
      if (activeAnswer === currentAnswer)
        return (
          currentAnswer.classList.remove("active"),
          currentIcon.classList.remove("icon-active")
        );

      activeAnswer.classList.remove("active");
      activeIcon.classList.remove("icon-active");
    }

    currentAnswer.classList.add("active");
    currentIcon.classList.add("icon-active");
  });
});
