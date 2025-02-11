function calculateScore() {
    let score = 0;

    // Correct answers
    const answers = {
        q1: "Your smile",  // Change to your actual favorite color
        q2: "Build a family with you",     
        q3: "Forever",
        q4: "Tokyo"     




    };

    // Get user's answers
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);

    // Check answers
    for (let [question, answer] of Object.entries(answers)) {
        if (formData.get(question) === answer) {
            score++;
        }
    }

    // Display result
    let resultText = "";
    if (score === 4) {
        resultText = "Wow! You know me so well! 😍💖";
    } else if (score === 2) {
        resultText = "Pretty good! You're almost there. 😊";
    } else {
        resultText = "Haha, we need to talk more! 😂";
    }

    document.getElementById("result").innerHTML = `<h3>${resultText}</h3><p>Your Score: ${score}/4</p>`;
}
