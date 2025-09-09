// State management
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timer = null;

// DOM elements
const categorySection = document.getElementById('categorySection');
const quizSection = document.getElementById('quizSection');
const resultsSection = document.getElementById('resultsSection');
const quizTitle = document.getElementById('quizTitle');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const questionText = document.getElementById('questionText');
const questionOptions = document.getElementById('questionOptions');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const backToCategoriesBtn = document.getElementById('backToCategories');
const retryBtn = document.getElementById('retryBtn');
const newCategoryBtn = document.getElementById('newCategoryBtn');
const finalScore = document.getElementById('finalScore');
const correctAnswers = document.getElementById('correctAnswers');
const totalAnswers = document.getElementById('totalAnswers');
const timeTaken = document.getElementById('timeTaken');

// Category mapping
const categoryNames = {
    algorithms: 'Algorithms & Data Structures',
    javascript: 'JavaScript',
    react: 'React',
    'system-design': 'System Design',
    database: 'Database',
    networking: 'Networking'
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showCategorySection();
});

// Event listeners
function initializeEventListeners() {
    // Category selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            startQuiz(category);
        });
    });

    // Quiz navigation
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    
    // Results navigation
    backToCategoriesBtn.addEventListener('click', showCategorySection);
    retryBtn.addEventListener('click', retryQuiz);
    newCategoryBtn.addEventListener('click', showCategorySection);
}

// Show category selection
function showCategorySection() {
    hideAllSections();
    categorySection.style.display = 'block';
    resetQuizState();
}

// Hide all sections
function hideAllSections() {
    categorySection.style.display = 'none';
    quizSection.style.display = 'none';
    resultsSection.style.display = 'none';
}

// Reset quiz state
function resetQuizState() {
    currentCategory = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    startTime = null;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Start quiz
function startQuiz(category) {
    currentCategory = category;
    currentQuestions = getRandomQuestions(category, 5);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    startTime = new Date();
    
    showQuizSection();
    displayCurrentQuestion();
    startTimer();
}

// Show quiz section
function showQuizSection() {
    hideAllSections();
    quizSection.style.display = 'block';
    quizTitle.textContent = categoryNames[currentCategory];
    totalQuestionsEl.textContent = currentQuestions.length;
}

// Display current question
function displayCurrentQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        submitQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // Clear previous options
    questionOptions.innerHTML = '';
    
    // Create options
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question';
        radio.value = index;
        radio.id = `option${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            radio.checked = true;
            optionDiv.classList.add('selected');
        }
        
        // Add click event
        optionDiv.addEventListener('click', function() {
            selectOption(index);
        });
        
        questionOptions.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Select option
function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const selectedOption = document.querySelectorAll('.option')[optionIndex];
    selectedOption.classList.add('selected');
    selectedOption.querySelector('input[type="radio"]').checked = true;
    
    // Save answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Update navigation buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayCurrentQuestion();
    }
}

// Go to next question
function goToNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
    }
}

// Submit quiz
function submitQuiz() {
    const endTime = new Date();
    const timeSpent = Math.round((endTime - startTime) / 1000 / 60); // minutes
    
    // Calculate score
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / currentQuestions.length) * 100);
    
    // Display results
    showResults(score, correctCount, currentQuestions.length, timeSpent);
}

// Show results
function showResults(score, correct, total, timeSpent) {
    hideAllSections();
    resultsSection.style.display = 'block';
    
    finalScore.textContent = score;
    correctAnswers.textContent = correct;
    totalAnswers.textContent = total;
    timeTaken.textContent = `${timeSpent} phút`;
    
    // Add score-based styling
    const scoreCircle = document.querySelector('.score-circle');
    if (score >= 80) {
        scoreCircle.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
    } else if (score >= 60) {
        scoreCircle.style.background = 'linear-gradient(135deg, #f6ad55, #ed8936)';
    } else {
        scoreCircle.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
    }
}

// Retry quiz
function retryQuiz() {
    if (currentCategory) {
        startQuiz(currentCategory);
    }
}

// Start timer
function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(() => {
        if (startTime) {
            const elapsed = Math.floor((new Date() - startTime) / 1000);
            // Timer display could be added here if needed
        }
    }, 1000);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (quizSection.style.display === 'block') {
        switch(e.key) {
            case 'ArrowLeft':
                if (!prevBtn.disabled) {
                    goToPreviousQuestion();
                }
                break;
            case 'ArrowRight':
                if (!nextBtn.disabled) {
                    goToNextQuestion();
                }
                break;
            case 'Enter':
                if (submitBtn.style.display !== 'none') {
                    submitQuiz();
                } else if (!nextBtn.disabled) {
                    goToNextQuestion();
                }
                break;
        }
    }
});

// Add progress bar animation
function animateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    // Progress bar animation could be added here
}

// Add smooth transitions
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .category-card, .btn, .option {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .quiz-section, .results-section {
            animation: slideInUp 0.5s ease-out;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize smooth transitions
addSmoothTransitions();
