const conatctBtn = document.getElementById("contact");
const contactForm = document.getElementById("conatct-form");
const closeBtn = document.querySelector(".close");
const dots = document.querySelectorAll('.dot');
const sliderImg = document.querySelector('.slider-img');



conatctBtn.addEventListener("click", () => {
    contactForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    contactForm.style.display = "none";
});



document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll('.desc');
    const projectImage = document.getElementById('project-image');

    descriptions.forEach(desc => {
        desc.addEventListener('click', () => {
            descriptions.forEach(d => d.classList.remove('active'));
            desc.classList.add('active');
            const newImageSrc = desc.getAttribute('data-image');
            projectImage.setAttribute('src', newImageSrc);
        });
    });
});



dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        const translateX = index * -100;
        sliderImg.style.transform = `translateX(${translateX}%)`;
    });
});
