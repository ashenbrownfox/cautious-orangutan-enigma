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
    var nav = document.querySelector('nav');
    
    if (nav) {
        nav.addEventListener('click', function(event) {
            if (event.target.tagName === 'A' && event.target.getAttribute('href') !== 'letter/') {
                event.preventDefault();
                var targetId = event.target.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
});