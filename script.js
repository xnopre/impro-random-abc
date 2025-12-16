// Alphabet français
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let shuffledAlphabet = [];
let currentIndex = 0;

// Algorithme de Fisher-Yates pour mélanger l'alphabet
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Affiche un écran spécifique
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Affiche le bouton test uniquement sur l'écran d'accueil
    const testButton = document.getElementById('test-button');
    const restartButton = document.getElementById('restart-button');
    const counter = document.getElementById('counter');
    const helpButton = document.getElementById('help-button');

    if (screenId === 'welcome-screen') {
        testButton.style.display = 'block';
        restartButton.style.display = 'none';
        counter.style.display = 'none';
        helpButton.style.display = 'block';
    } else if (screenId === 'letter-screen') {
        testButton.style.display = 'none';
        restartButton.style.display = 'block';
        counter.style.display = 'block';
        helpButton.style.display = 'none';
    } else {
        testButton.style.display = 'none';
        restartButton.style.display = 'none';
        counter.style.display = 'none';
        helpButton.style.display = 'none';
    }
}

// Démarre le jeu
function startGame() {
    shuffledAlphabet = shuffleArray(alphabet);
    currentIndex = 0;
    showLetter();
    showScreen('letter-screen');
}

// Affiche la lettre courante
function showLetter() {
    document.getElementById('letter').textContent = shuffledAlphabet[currentIndex];
    document.getElementById('counter').textContent = `${currentIndex + 1}/${shuffledAlphabet.length}`;
}

// Passe à la lettre suivante
function nextLetter() {
    currentIndex++;
    if (currentIndex >= shuffledAlphabet.length) {
        showScreen('end-screen');
    } else {
        showLetter();
    }
}

// Retourne à la lettre précédente
function previousLetter() {
    if (currentIndex > 0) {
        currentIndex--;
        showLetter();
    }
}

// Retourne à l'écran d'accueil
function restartGame() {
    showScreen('welcome-screen');
}

// Affiche l'écran de test avec toutes les lettres
function showTest() {
    const grid = document.getElementById('alphabet-grid');
    grid.innerHTML = '';

    alphabet.forEach(letter => {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'test-letter';
        letterDiv.textContent = letter;
        grid.appendChild(letterDiv);
    });

    showScreen('test-screen');
}

// Ferme l'écran de test
function closeTest() {
    showScreen('welcome-screen');
}

// Affiche la modal d'aide
function showHelp() {
    const modal = document.getElementById('help-modal');
    modal.classList.add('active');
}

// Ferme la modal d'aide
function closeHelp() {
    const modal = document.getElementById('help-modal');
    modal.classList.remove('active');
}

// Gestion de la navigation au clavier
document.addEventListener('keydown', function(event) {
    // Vérifie si on est sur l'écran des lettres
    const letterScreen = document.getElementById('letter-screen');
    if (letterScreen.classList.contains('active')) {
        if (event.key === 'ArrowLeft') {
            previousLetter();
        } else if (event.key === 'ArrowRight') {
            nextLetter();
        }
    }

    // Ferme la modal avec la touche Escape
    const helpModal = document.getElementById('help-modal');
    if (event.key === 'Escape' && helpModal.classList.contains('active')) {
        closeHelp();
    }
});

// Ferme la modal si on clique en dehors du contenu
document.addEventListener('click', function(event) {
    const modal = document.getElementById('help-modal');
    if (event.target === modal) {
        closeHelp();
    }
});
