// Collapsible section functionality
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Toggle active class on title
            this.classList.toggle('active');
            
            // Get the next element (section-content)
            const content = this.nextElementSibling;
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Close other open sections
            sectionTitles.forEach(otherTitle => {
                if (otherTitle !== title && otherTitle.classList.contains('active')) {
                    otherTitle.classList.remove('active');
                    otherTitle.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
    
    // Open section if URL hash matches
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection && targetSection.classList.contains('section')) {
            const title = targetSection.querySelector('.section-title');
            if (title) {
                title.classList.add('active');
                title.nextElementSibling.classList.add('active');
            }
        }
    }
});