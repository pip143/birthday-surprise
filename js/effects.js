// Visual effects and animations

// Create floating particles
export function createParticles() {
    const container = document.getElementById('particleContainer');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
    }
}

// Enhanced tulip creation
export function createBlueTulip() {
    const tulip = document.createElement('img');
    tulip.classList.add('falling-tulip');
    tulip.src = 'images/bt.png';
    tulip.style.left = `${Math.random() * 100}vw`;
    tulip.style.animationDuration = `${Math.random() * 10 + 8}s`;
    tulip.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(tulip);
    
    // Remove tulip after animation
    setTimeout(() => {
        tulip.remove();
    }, (parseFloat(tulip.style.animationDuration) + parseFloat(tulip.style.animationDelay)) * 1000);
    
    return tulip;
}

// Add multiple floating tulips
export function addFloatingTulips(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(createBlueTulip, i * 200);
    }
}

// Add text animation
export function animateText(element) {
    element.classList.remove('text-fade-in');
    void element.offsetWidth; // Trigger reflow
    element.classList.add('text-fade-in');
}

// Easter egg: Add heart emoji on double click
export function initEasterEgg() {
    document.body.addEventListener('dblclick', (e) => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'float 3s ease-out forwards';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    });
}
