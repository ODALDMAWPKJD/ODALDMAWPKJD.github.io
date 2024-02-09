document.addEventListener('DOMContentLoaded', function() {
    let secondtbtn = document.getElementById('btn-2');

    secondtbtn.addEventListener('mouseenter', function() {
        // Move the button to the center when the mouse enters
        secondtbtn.style.top = '50%';
        secondtbtn.style.left = '50%';

        // Enable continuous movement with mousemove
        secondtbtn.addEventListener('mousemove', function(event) {
            // Move the button to the current mouse position
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            secondtbtn.style.top = `${mouseY}px`;
            secondtbtn.style.left = `${mouseX}px`;
        });
    });

    secondtbtn.addEventListener('mouseleave', function() {
        // Remove the mousemove event listener when the mouse leaves
        secondtbtn.removeEventListener('mousemove');
    });
});
