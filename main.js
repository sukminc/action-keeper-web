const generateBtn = document.getElementById('generate-btn');
const themeBtn = document.getElementById('theme-btn');
const numberDivs = document.querySelectorAll('.number');
const html = document.documentElement;

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

themeBtn.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Lotto Logic
generateBtn.addEventListener('click', () => {
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    
    // Simple animation effect
    let count = 0;
    const interval = setInterval(() => {
        numberDivs.forEach(div => {
            div.textContent = Math.floor(Math.random() * 45) + 1;
        });
        count++;
        if (count > 10) {
            clearInterval(interval);
            const lottoNumbers = generateLottoNumbers();
            displayNumbers(lottoNumbers);
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Numbers';
        }
    }, 50);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numberDivs.forEach((div, index) => {
        div.textContent = numbers[index];
        // Add a small pop animation
        div.style.transform = 'scale(1.1)';
        setTimeout(() => {
            div.style.transform = 'scale(1)';
        }, 200);
    });
}
