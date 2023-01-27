let btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', changeTheme));

init();

function init() {
    if (localStorage.theme) {
        document.querySelector('link').setAttribute('href', localStorage.theme + '.css');
    }
}
function changeTheme() {
    document.querySelector('link').setAttribute('href', this.innerHTML.toLowerCase() + '.css');
    localStorage.theme = this.innerHTML.toLowerCase();
}