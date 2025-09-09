// State management
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timer = null;
let quizTimer = null;
let timeElapsed = 0;
let isDarkMode = false;
let isSoundEnabled = true;

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
const progressFill = document.getElementById('progressFill');
const timerDisplay = document.getElementById('timerDisplay');
const scoreCircle = document.getElementById('scoreCircle');
const scoreAnimation = document.getElementById('scoreAnimation');
const themeToggle = document.getElementById('themeToggle');
const soundToggle = document.getElementById('soundToggle');

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
    initializeTheme();
    initializeSound();
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
    
    // Theme and sound toggles
    themeToggle.addEventListener('click', toggleTheme);
    soundToggle.addEventListener('click', toggleSound);
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
    startQuizTimer();
    updateProgressBar();
    playSound('click');
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
    
    // Add animation
    addPulseAnimation(selectedOption);
    
    // Save answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Play sound
    playSound('click');
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
        updateProgressBar();
        playSound('click');
    }
}

// Submit quiz
function submitQuiz() {
    const endTime = new Date();
    const timeSpent = Math.round((endTime - startTime) / 1000 / 60); // minutes
    
    // Stop timer
    stopQuizTimer();
    
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
    
    // Play completion sound
    playSound('complete');
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
    if (scoreCircle) {
        if (score >= 80) {
            scoreCircle.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        } else if (score >= 60) {
            scoreCircle.style.background = 'linear-gradient(135deg, #f6ad55, #ed8936)';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
        }
        
        // Add animations
        addBounceAnimation(scoreCircle);
        
        // Create confetti for high scores
        if (score >= 80) {
            createConfetti();
        }
    }
}

// Retry quiz
function retryQuiz() {
    if (currentCategory) {
        startQuiz(currentCategory);
        playSound('click');
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

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const icon = themeToggle.querySelector('i');
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.classList.toggle('active', isDarkMode);
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    playSound('click');
}

// Sound management
function initializeSound() {
    const savedSound = localStorage.getItem('sound');
    if (savedSound === 'false') {
        toggleSound();
    }
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    
    const icon = soundToggle.querySelector('i');
    icon.className = isSoundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    soundToggle.classList.toggle('active', isSoundEnabled);
    
    localStorage.setItem('sound', isSoundEnabled);
}

function playSound(type) {
    if (!isSoundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'click':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'correct':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'incorrect':
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'complete':
            // Play a success melody
            const frequencies = [523, 659, 784, 1047]; // C, E, G, C
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
                    gain.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    osc.start();
                    osc.stop(audioContext.currentTime + 0.3);
                }, index * 100);
            });
            break;
    }
}

// Progress bar update
function updateProgressBar() {
    if (!progressFill) return;
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Timer management
function startQuizTimer() {
    timeElapsed = 0;
    updateTimerDisplay();
    
    quizTimer = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function updateTimerDisplay() {
    if (!timerDisplay) return;
    
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    timerDisplay.textContent = timeString;
    
    // Add warning colors
    const timerElement = timerDisplay.parentElement;
    timerElement.classList.remove('warning', 'danger');
    
    if (timeElapsed > 300) { // 5 minutes
        timerElement.classList.add('danger');
    } else if (timeElapsed > 180) { // 3 minutes
        timerElement.classList.add('warning');
    }
}

// Confetti animation
function createConfetti() {
    if (!scoreAnimation) return;
    
    scoreAnimation.innerHTML = '';
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        scoreAnimation.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        scoreAnimation.innerHTML = '';
    }, 5000);
}

// Enhanced animations
function addPulseAnimation(element) {
    element.classList.add('pulse');
    setTimeout(() => element.classList.remove('pulse'), 600);
}

function addBounceAnimation(element) {
    element.classList.add('bounce');
    setTimeout(() => element.classList.remove('bounce'), 1000);
}

function addShakeAnimation(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}
