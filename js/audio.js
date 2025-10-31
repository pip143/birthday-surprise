// Audio management

let backgroundMusic;
let customAudio;

export function initAudio() {
    backgroundMusic = document.getElementById('backgroundMusic');
    customAudio = document.getElementById('customAudio');
}

// Start background music on first user interaction
export function startBackgroundMusic() {
    const startMusic = () => {
        backgroundMusic.volume = 0.25;
        backgroundMusic.play().catch(e => console.log("Autoplay prevented:", e));
        document.removeEventListener('click', startMusic);
    };
    document.addEventListener('click', startMusic, { once: true });
}

// Fade out background music
export function fadeOutBackgroundMusic() {
    return new Promise((resolve) => {
        const fadeOut = setInterval(() => {
            if (backgroundMusic.volume > 0.1) {
                backgroundMusic.volume -= 0.1;
            } else {
                backgroundMusic.pause();
                clearInterval(fadeOut);
                resolve();
            }
        }, 100);
    });
}

// Fade in background music
export function fadeInBackgroundMusic() {
    backgroundMusic.volume = 0;
    backgroundMusic.play().catch(e => console.log("Autoplay prevented:", e));
    const fadeIn = setInterval(() => {
        if (backgroundMusic.volume < 0.25) {
            backgroundMusic.volume += 0.05;
        } else {
            clearInterval(fadeIn);
        }
    }, 100);
}

// Play custom audio
export async function playCustomAudio() {
    customAudio.volume = 1;
    await customAudio.play();
    return customAudio;
}

// Resume background music
export function resumeBackgroundMusic() {
    backgroundMusic.volume = 0.25;
    backgroundMusic.play().catch(e => console.log("Autoplay prevented:", e));
}
