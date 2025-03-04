// Create theme switcher. Save the theme in local storage. During reloading the page check storage and apply the theme that is available there. add classes for changing themes.


const checkbox = document.querySelector('#checkbox');
const body = document.body;

function applyTheme(theme) {
    body.classList.toggle('red-theme', theme === 'red');
    checkbox.checked = theme === 'red';
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

checkbox.addEventListener('change', () => {
    const newTheme = checkbox.checked ? 'red' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});