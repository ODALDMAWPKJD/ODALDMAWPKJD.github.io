document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('.side-nav');
    const h1 = document.getElementById('s-nav-prof');
    const toggle = document.querySelector('.toggle');

    let isOpen = true;
    let isClose = true;

    h1.addEventListener('click', Hide);
    toggle.addEventListener('click', Show);

    function Hide() {
        if (isClose) {
            sidenav.style.transform = "translateX(-100%)";
            document.querySelector('.toggle').style.display = 'block';
        }
    }

    function Show() {
        if (isOpen) {
            document.querySelector('.toggle').style.display = 'none';
            document.querySelector('.side-handler').style.display = "block";
            sidenav.style.transform = "translateX(0)";
        }
    }
});