const inputElement = document.getElementById('input');
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');
const numerologyCountElement = document.getElementById('numerology-count');

// --- The numerological values for each alphabet ---
const values = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1, j: 1,
    k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2, s: 3, t: 4,
    u: 6, v: 6, w: 6, x: 5, y: 1, z: 7
};

// --- Calculation Functions ---

function countWords(text) {
    // Trim whitespace from both ends and split by one or more spaces
    const words = text.trim().split(/\s+/);
    // If the text is empty after trimming, the word count is 0
    return text.trim() === '' ? 0 : words.length;
}

function countCharacters(text) {
    // Counts all characters, including spaces
    return text.length;
}

function calculateNumerology(text) {
    let total = 0;
    // Convert text to lowercase to handle both 'a' and 'A'
    const lowerText = text.toLowerCase();

    for (const char of lowerText) {
        // Check if the character is a letter and has a value
        if (values[char]) {
            total += values[char];
        }
        // Check if the character is a number
        else if (!isNaN(parseInt(char, 10))) {
            total += parseInt(char, 10);
        }
        // Ignore all other characters (spaces, punctuation, etc.)
    }
    return total;
}

// --- NEW: Function to calculate the Digital Root (N) ---
function calculateDigitalRoot(number) {
    // The digital root of 0 is 0.
    if (number === 0) {
        return 0;
    }
    // A mathematical formula for digital root.
    // If a number is a multiple of 9, its digital root is 9.
    // Otherwise, it's the remainder when divided by 9.
    if (number % 9 === 0) {
        return 9;
    } else {
        return number % 9;
    }
}

// --- Main Update Function ---

function updateStats() {
    const text = inputElement.value;
    
    const wordCount = countWords(text);
    const charCount = countCharacters(text);
    const numerologyValue = calculateNumerology(text);
    
    // --- UPDATED: Calculate digital root and format the output ---
    const digitalRoot = calculateDigitalRoot(numerologyValue);
    const formattedNumerology = `${numerologyValue}(${digitalRoot})`;

    wordCountElement.textContent = `Words: ${wordCount}`;
    charCountElement.textContent = `Characters: ${charCount}`;
    numerologyCountElement.textContent = `Numerology: ${formattedNumerology}`;
}

// --- Event Listener ---

// Update the statistics whenever the user types
inputElement.addEventListener('input', updateStats);

// Initial calculation on page load
updateStats();
