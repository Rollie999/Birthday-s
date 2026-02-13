function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can swap this for '💖' or '✨'
    
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(heart);

    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


const currentPath = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.nav-panel a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.borderBottom = "2px solid white";
        link.style.color = "#ffd700"; 
    }
});


const photos = document.querySelectorAll('.twirl-pic');
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.style.animationDuration = '1s';
    });
    photo.addEventListener('mouseout', () => {
        photo.style.animationDuration = '6s'; 
    });
});