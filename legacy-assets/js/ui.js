// UI state management
import messages from './config.js';
import { animateText, addFloatingTulips } from './effects.js';

let step = 0;
let progressDots;

// Initialize progress dots
export function initProgressDots() {
    progressDots = document.getElementById('progressDots');
    progressDots.innerHTML = '';
    for (let i = 0; i < messages.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('progress-dot');
        if (i === 0) dot.classList.add('active');
        progressDots.appendChild(dot);
    }
}

// Update progress dots
export function updateProgressDots() {
    const dots = progressDots.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        if (index === step) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Main interaction handler
export function handleMainButtonClick(mainGreeting, interactiveMessage, mainActionButton, playCustomAudioButton, resetButton) {
    if (step < messages.length) {
        // Remove pulse animation after first click
        mainActionButton.classList.remove('pulse-animation');
        
        // Update content with animation
        mainGreeting.innerHTML = messages[step].greeting;
        interactiveMessage.textContent = messages[step].text;
        
        animateText(mainGreeting);
        animateText(interactiveMessage);
        
        // Show tulips at specific steps
        if (step === 2 || step === 4) {
            addFloatingTulips(20);
        }
        
        // Update progress
        updateProgressDots();
        
        // Last step - show audio button
        if (step === messages.length - 1) {
            setTimeout(() => {
                mainActionButton.style.opacity = '0';
                mainActionButton.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    mainActionButton.classList.add('hidden');
                    playCustomAudioButton.classList.remove('hidden');
                    resetButton.classList.remove('hidden');
                    playCustomAudioButton.style.opacity = '0';
                    playCustomAudioButton.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        playCustomAudioButton.style.opacity = '1';
                        playCustomAudioButton.style.transform = 'scale(1)';
                        playCustomAudioButton.classList.add('pulse-animation');
                    }, 50);
                }, 300);
            }, 500);
        }
        step++;
    }
}

// Reset to initial state
export function resetUI(mainGreeting, interactiveMessage, mainActionButton, playCustomAudioButton, resetButton) {
    step = 0;
    mainGreeting.innerHTML = '<span class="heart-beat inline-block">💝</span> Surprise! <span class="heart-beat inline-block">💝</span>';
    interactiveMessage.textContent = "Click the button below to start our little journey...";
    
    mainActionButton.style.opacity = '1';
    mainActionButton.style.transform = 'scale(1)';
    mainActionButton.classList.remove('hidden');
    mainActionButton.classList.add('pulse-animation');
    
    playCustomAudioButton.classList.add('hidden');
    resetButton.classList.add('hidden');
    
    updateProgressDots();
    
    document.querySelectorAll('.falling-tulip').forEach(el => el.remove());
}
