document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollToContactButton = document.getElementById('scrollToContact');
    var contactSection = document.getElementById('contact');
    
    if (scrollToContactButton && contactSection) {
        scrollToContactButton.addEventListener('click', function() {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    var navLinks = document.querySelectorAll('.nav-links a');
    
    if (navLinks) {
        navLinks.forEach(function(link) {
            if (link.getAttribute('href') !== 'letter/') { // Check if the href is not 'letter/'
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    var targetId = this.getAttribute('href').substring(1);
                    var targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });
    }
});