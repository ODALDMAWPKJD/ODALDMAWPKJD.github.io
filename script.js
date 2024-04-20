document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    let text = document.querySelector('.text-in')
    let isClick = true;
    let messages = [
        "Nigga",
        "Hangol ug siopao",
        "Di mo bayad",
        "NIgga japon",
        "Untro pod ka NIgga",
    ];

    btn.addEventListener('click', () => {
        if (isClick) {
            text.innerHTML = messages[Math.floor(Math.random() * messages.length)];
        }
    }); 
});
