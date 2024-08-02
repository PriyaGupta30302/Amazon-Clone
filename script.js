const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev'); // decrease 
const next_btn = document.querySelector('.control_next'); // increase

let n = 0;
const intervalTime = 3000; // Time in milliseconds between slides
let slideInterval;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block'; 
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        n = (n + 1) % imgs.length; // Move to the next image, loop back to the start
        changeSlide();
    }, intervalTime);
}

// Initialize the slider
changeSlide();
startSlideInterval();

// prev_btn.addEventListener('click', (e) => {
//     clearInterval(slideInterval); 
//     if (n > 0) {
//         n--;
//     } else {
//         n = imgs.length - 1;
//     }
//     changeSlide();
//     startSlideInterval(); 
// });

// next_btn.addEventListener('click', (e) => {
//     clearInterval(slideInterval); 
//     if (n < imgs.length - 1) {
//         n++;
//     } else {
//         n = 0;
//     }
//     changeSlide();
//     startSlideInterval(); 
// });
