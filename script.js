document.addEventListener('DOMContentLoaded', () => {
    const movieSections = document.querySelectorAll('.movies-item');

    movieSections.forEach(section => {
        let isDown = false;
        let startX;
        let scrollLeft;

        section.addEventListener('mousedown', (e) => {
            isDown = true;
            section.classList.add('active');
            startX = e.pageX - section.offsetLeft;
            scrollLeft = section.scrollLeft;
        });

        section.addEventListener('mouseleave', () => {
            isDown = false;
            section.classList.remove('active');
        });

        section.addEventListener('mouseup', () => {
            isDown = false;
            section.classList.remove('active');
        });

        section.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - section.offsetLeft;
            const walk = (x - startX) * 1.5; // Kaydırma hızını azaltarak daha akıcı bir hareket sağlamak için çarpan
            section.scrollLeft = scrollLeft - walk;
        });

        section.addEventListener('wheel', (e) => {
            e.preventDefault();
            section.scrollLeft += e.deltaY;
        });
    });
});
