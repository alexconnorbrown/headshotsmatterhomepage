document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.enter-button');
    const square = document.querySelector('.square');
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add 'dim-effect' and 'blur-effect' to buttons, image, and content
            buttons.forEach(btn => btn.classList.add('dim-effect', 'blur-effect'));
            square.classList.add('dim-effect', 'blur-effect', 'bobbing');
            content.classList.add('dim-effect', 'blur-effect');

            showWhiteBox(this);
        });
    });

    overlay.addEventListener('click', hideWhiteBox);
});

function showWhiteBox(clickedButton) {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = 1;
        document.getElementById('white-box').style.display = 'flex';
        document.getElementById('white-box').style.opacity = 1;
    }, 10);
}

function hideWhiteBox() {
    // Remove 'dim-effect' and 'blur-effect' from buttons, image, and content
    document.querySelectorAll('.enter-button').forEach(btn => {
        btn.classList.remove('dim-effect', 'blur-effect');
    });
    document.querySelector('.square').classList.remove('dim-effect', 'blur-effect', 'bobbing');
    document.getElementById('content').classList.remove('dim-effect', 'blur-effect');

    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('white-box').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('white-box').style.display = 'none';
    }, 500);
}
