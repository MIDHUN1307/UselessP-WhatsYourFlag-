// script.js
const questions = [
    {
        question: "How does your date treat service staff?",
        options: [
            { text: "Always polite and respectful", points: 5 },
            { text: "Generally nice but can be impatient", points: 3 },
            { text: "Depends on their mood", points: 1 },
            { text: "Often rude or dismissive", points: 0 }
        ]
    },
    {
        question: "How does your date handle disagreements?",
        options: [
            { text: "Discusses calmly and seeks compromise", points: 5 },
            { text: "Listens but may get defensive", points: 3 },
            { text: "Often becomes argumentative", points: 1 },
            { text: "Gets angry or gives silent treatment", points: 0 }
        ]
    },
    {
        question: "How does your date manage their finances?",
        options: [
            { text: "Budgets well and saves regularly", points: 5 },
            { text: "Generally responsible with occasional splurges", points: 3 },
            { text: "Lives paycheck to paycheck", points: 1 },
            { text: "Often in debt or asks to borrow money", points: 0 }
        ]
    },
    {
        question: "How does your date talk about their ex-partners?",
        options: [
            { text: "Respectfully and rarely", points: 5 },
            { text: "Neutrally when relevant", points: 3 },
            { text: "Frequently brings them up", points: 1 },
            { text: "Always speaks negatively about them", points: 0 }
        ]
    },
    {
        question: "How does your date respond to your successes?",
        options: [
            { text: "Genuinely celebrates and supports you", points: 5 },
            { text: "Shows happiness but might change subject", points: 3 },
            { text: "Seems indifferent", points: 1 },
            { text: "Becomes competitive or dismissive", points: 0 }
        ]
    },
    {
        question: "How does your date handle their responsibilities?",
        options: [
            { text: "Consistently reliable and organized", points: 5 },
            { text: "Usually manages well with occasional lapses", points: 3 },
            { text: "Often procrastinates or forgets", points: 1 },
            { text: "Regularly neglects responsibilities", points: 0 }
        ]
    },
    {
        question: "How does your date respect your boundaries?",
        options: [
            { text: "Always respects and remembers them", points: 5 },
            { text: "Usually respects but needs reminders", points: 3 },
            { text: "Often pushes or questions them", points: 1 },
            { text: "Regularly ignores or dismisses them", points: 0 }
        ]
    },
    {
        question: "How does your date maintain relationships with friends/family?",
        options: [
            { text: "Has strong, healthy relationships", points: 5 },
            { text: "Has a few close relationships", points: 3 },
            { text: "Mostly superficial relationships", points: 1 },
            { text: "Isolated or conflictual relationships", points: 0 }
        ]
    },
    {
        question: "How does your date handle stress?",
        options: [
            { text: "Uses healthy coping mechanisms", points: 5 },
            { text: "Sometimes gets overwhelmed but manages", points: 3 },
            { text: "Often becomes irritable or withdrawn", points: 1 },
            { text: "Takes it out on others or self-destructive", points: 0 }
        ]
    },
    {
        question: "How does your date approach your interests?",
        options: [
            { text: "Shows genuine interest and engagement", points: 5 },
            { text: "Listens politely but doesn't engage much", points: 3 },
            { text: "Shows minimal interest", points: 1 },
            { text: "Dismisses or criticizes them", points: 0 }
        ]
    },
    {
        question: "How does your date communicate about their feelings?",
        options: [
            { text: "Open and honest about emotions", points: 5 },
            { text: "Shares feelings when prompted", points: 3 },
            { text: "Rarely discusses emotions", points: 1 },
            { text: "Dismissive or explosive about emotions", points: 0 }
        ]
    },
    {
        question: "How does your date handle personal growth?",
        options: [
            { text: "Actively seeks self-improvement", points: 5 },
            { text: "Open to growth when suggested", points: 3 },
            { text: "Resistant to change", points: 1 },
            { text: "Refuses to acknowledge areas for improvement", points: 0 }
        ]
    },
    {
        question: "How does your date approach shared decision-making?",
        options: [
            { text: "Values your input and seeks consensus", points: 5 },
            { text: "Considers your opinion but may overrule", points: 3 },
            { text: "Makes decisions independently", points: 1 },
            { text: "Imposes decisions without discussion", points: 0 }
        ]
    },
    {
        question: "How does your date handle apologies?",
        options: [
            { text: "Sincerely apologizes and changes behavior", points: 5 },
            { text: "Apologizes but may repeat mistake", points: 3 },
            { text: "Rarely admits fault", points: 1 },
            { text: "Never apologizes or blames others", points: 0 }
        ]
    },
    {
        question: "How does your date approach intimacy and affection?",
        options: [
            { text: "Respectful and attentive to your needs", points: 5 },
            { text: "Generally considerate but sometimes misses cues", points: 3 },
            { text: "Focused mainly on their own needs", points: 1 },
            { text: "Pushy or disregards your comfort", points: 0 }
        ]
    },
    {
        question: "How does your date handle their health?",
        options: [
            { text: "Proactively maintains physical and mental health", points: 5 },
            { text: "Generally takes care of themselves", points: 3 },
            { text: "Neglects health until issues arise", points: 1 },
            { text: "Engages in unhealthy or risky behaviors", points: 0 }
        ]
    },
    {
        question: "How does your date approach shared expenses?",
        options: [
            { text: "Fair and communicative about finances", points: 5 },
            { text: "Generally fair but occasional disagreements", points: 3 },
            { text: "Expects you to cover more than your share", points: 1 },
            { text: "Manipulative or secretive about money", points: 0 }
        ]
    },
    {
        question: "How does your date handle your relationship with others?",
        options: [
            { text: "Supportive of your other relationships", points: 5 },
            { text: "Generally okay but occasionally jealous", points: 3 },
            { text: "Often jealous or possessive", points: 1 },
            { text: "Tries to isolate you from others", points: 0 }
        ]
    },
    {
        question: "How does your date approach future planning?",
        options: [
            { text: "Enthusiastic about shared future plans", points: 5 },
            { text: "Open to discussing the future", points: 3 },
            { text: "Avoids talking about the future", points: 1 },
            { text: "Dismissive or negative about future plans", points: 0 }
        ]
    },
    {
        question: "How does your date handle differences in opinion?",
        options: [
            { text: "Respects and values different perspectives", points: 5 },
            { text: "Tolerates differences but may try to convince", points: 3 },
            { text: "Becomes frustrated with different views", points: 1 },
            { text: "Belittles or mocks differing opinions", points: 0 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById("question").textContent = `Question ${currentQuestionIndex + 1}/${questions.length}: ${questionData.question}`;
        
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";  // Clear previous options

        questionData.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.className = "option-button";
            button.onclick = () => recordAnswer(option.points);
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function recordAnswer(points) {
    totalScore += points;
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    document.getElementById("score").textContent = `Score: ${totalScore}/${maxScore} (${percentage.toFixed(1)}%)`;

    const resultTextElement = document.getElementById("result-text");
    let resultText = "";
    if (percentage >= 80) {
        resultText = "🟢 Strong Green Flag: This person shows very healthy relationship behaviors!";
        resultTextElement.className = "strong-green";
    } else if (percentage >= 60) {
        resultText = "🟡 Mild Green Flag: Generally positive traits, but some areas could use attention.";
        resultTextElement.className = "mild-green";
    } else if (percentage >= 40) {
        resultText = "🟠 Caution: Several concerning behaviors present. Proceed with awareness.";
        resultTextElement.className = "caution";
    } else {
        resultText = "🔴 Red Flag: Significant concerning behaviors. Carefully consider this relationship.";
        resultTextElement.className = "red-flag";
        document.getElementById("concern-text").style.display = "block";
    }

    resultTextElement.textContent = resultText;
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // Set random position, duration, and delay for the heart
    const randomLeft = Math.random(); // Random left position between 0 and 1
    const randomDuration = Math.random() * 3 + 2; // Duration between 2s and 5s
    const randomDelay = Math.random() * 5; // Delay between 0s and 5s

    heart.style.setProperty('--random-left', randomLeft);
    heart.style.setProperty('--random-duration', randomDuration + 's');
    heart.style.setProperty('--random-delay', randomDelay + 's');

    // Remove heart after animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create hearts at intervals
setInterval(createHeart, 1000); // Create a new heart every second


// Load the first question on page load
window.onload = loadQuestion;
