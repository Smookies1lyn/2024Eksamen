let slideIndex = 0;
showSlides(slideIndex);

function changeImage(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hermanSlide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// Automatisk vis første slide når siden indlæses
window.onload = function() {
    showSlides(slideIndex);
}

