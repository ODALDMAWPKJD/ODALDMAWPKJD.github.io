document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    let text = document.querySelector('.text-in')
    let isClick = true;
    let messages = [
        "I'm so lucky to have you in my life. 😊",
        "Thinking of you always puts a smile on my face. 😍",
        "You're the best thing that's ever happened to me. ❤️",
        "Just wanted to remind you how much I love you. 💕",
        "sorry ulittttttt kaninaaaaa",
    ];

    btn.addEventListener('click', () => {
        if (isClick) {
            text.innerHTML = messages[Math.floor(Math.random() * messages.length)];
        }
    }); 
});
