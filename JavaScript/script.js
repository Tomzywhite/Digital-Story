// Love Letter Section
document.addEventListener("DOMContentLoaded", function () {
    const loveLetter = "From the moment we started talking, I knew you were special. Every day with you has been a gift. Even though distance separates us, my love for you knows no bounds. ❤️";
    document.getElementById("letter").innerText = loveLetter;
});



questions.forEach((q, index) => {
    const questionElem = document.createElement("p");
    questionElem.innerText = q.question;
    quizContainer.appendChild(questionElem);

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", function () {
            if (option === q.answer) {
                alert("Correct! 🎉");
            } else {
                alert("Oops! Try again.");
            }
        });
        quizContainer.appendChild(button);
    });
});
