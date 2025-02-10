const faqsAnswer = document.querySelectorAll(".answer");
const faqsQuestion = document.querySelectorAll(".open-answer-button");

faqsQuestion.forEach((question, index) => {
  question.addEventListener("click", () => {
    const currentAnswer = faqsAnswer[index];
    const activeAnswer = document.querySelector(".active");

    if (activeAnswer) {
      if (activeAnswer === currentAnswer)
        return currentAnswer.classList.remove("active");

      activeAnswer.classList.remove("active");
    }

    currentAnswer.classList.add("active");
  });
});
