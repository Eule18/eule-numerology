const inputElement = document.getElementById('input');
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');
const numerologyCountElement = document.getElementById('numerology-count');
const values = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 8, g: 3, h: 5, i: 1, j: 1,
    k: 2, l: 3, m: 4, n: 5, o: 7, p: 8, q: 1, r: 2, s: 3, t: 4,
    u: 6, v: 6, w: 6, x: 5, y: 1, z: 7
};
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return text.trim() === '' ? 0 : words.length;
}
function countCharacters(text) {
    return text.length;
}
function calculateNumerology(text) {
    let total = 0;
    const lowerText = text.toLowerCase();
    for (const char of lowerText) {
        if (values[char]) { total += values[char]; }
        else if (!isNaN(parseInt(char, 10))) { total += parseInt(char, 10); }
    }
    return total;
}
function updateStats() {
    const text = inputElement.value;
    const wordCount = countWords(text);
    const charCount = countCharacters(text);
    const numerologyValue = calculateNumerology(text);
    wordCountElement.textContent = `Words: ${wordCount}`;
    charCountElement.textContent = `Characters: ${charCount}`;
    numerologyCountElement.textContent = `Numerology: ${numerologyValue}`;
}
inputElement.addEventListener('input', updateStats);
updateStats();
