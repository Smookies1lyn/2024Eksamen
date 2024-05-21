


document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            dropdownToggle.textContent = this.textContent;
            dropdownMenu.style.display = 'none';
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdownMenu.style.display = 'none';
        }
    });
});



let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    const offset = -currentIndex * (100 / visibleItems);
    carousel.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function nextSlide() {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of visible items
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});