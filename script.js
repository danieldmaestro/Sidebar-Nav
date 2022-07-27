const openSideBar = document.querySelector('.open-side');
const closeSideBar = document.querySelector('.close-side');
const nav = document.querySelector('.sidenav');


openSideBar.addEventListener('click', () => {
    nav.classList.add('open');
});

closeSideBar.addEventListener('click', () => {
    nav.classList.remove('open');
});