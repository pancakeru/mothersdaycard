document.addEventListener('DOMContentLoaded', function () {
    const bg = document.querySelector('.bg');
    const heart = document.querySelector('.heart');
    const roseLeft = document.querySelector('.rose-left');
    const roseRight = document.querySelector('.rose-right');
    const motherText = document.querySelector('.mother-text');
    const newButton = document.querySelector('.new-button');
    const msg = document.querySelector('.message-text');
    const back = document.querySelector('.back-button');
    const pic = document.querySelector('.portrait');

    motherText.style.opacity = '0';
    msg.style.opacity = '0';

    heart.addEventListener('mouseenter', () => {
        bg.style.transform = 'scale(1.3)'; // Increase size by 10%
        heart.querySelector('p').style.transform = 'scale(1.1) translate(-50%, -50%)'; // Increase size of text
    });

    heart.addEventListener('mouseleave', () => {
        bg.style.transform = 'scale(1)'; // Return to original size
        heart.querySelector('p').style.transform = 'scale(1) translate(-50%, -50%)'; // Return text to original size
    });

    heart.addEventListener('click', () => {
        heart.style.opacity = '0';
        bg.style.opacity = '0';
        newButton.style.opacity = '0';

        roseLeft.style.display = 'block';
        roseRight.style.display = 'block';
        roseLeft.style.animation = 'slideLeft 1s forwards';
        roseRight.style.animation = 'slideRight 1s forwards';

        motherText.style.display = 'block';
        motherText.style.animation = 'slideDown 1s forwards';

        newButton.style.display = 'block';
        newButton.style.animation = 'fadeIn 1s forwards';

        pic.style.animation = 'fadeIn 1s forwards';
    });

    newButton.addEventListener('click', () => {
        msg.style.animation = 'fadeIn 1s forwards';
        newButton.style.animation = 'fadeOut 1s forwards';
        back.style.animation = 'fadeIn 1s forwards';
        pic.style.animation = 'fadeOut 1s forwards';
    });

    back.addEventListener('click', () => {
        msg.style.animation = 'fadeOut 1s forwards';
        back.style.animation = 'fadeOut 1s forwards';
        newButton.style.animation = 'fadeIn 1s forwards';
        pic.style.animation = 'fadeIn 1s forwards';
    });

});
