document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const topMenu = document.getElementById('topMenu');

    // 1. Раскатывание верхней панели на весь экран по клику на стрелочку
    menuToggle.addEventListener('click', () => {
        topMenu.classList.toggle('expanded');
        
        // Блокируем скролл основной страницы, когда меню раскрыто во весь экран
        if (topMenu.classList.contains('expanded')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Закрытие меню при клике на любую ссылку внутри сетки
    const matrixButtons = document.querySelectorAll('.matrix-btn');
    matrixButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            topMenu.classList.remove('expanded');
            document.body.style.overflow = '';
        });
    });

    // 2. Логика плавного появления элементов при прокрутке (Scroll Reveal)
    const scrollElements = document.querySelectorAll('.reveal-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.05)) {
                displayScrollElement(el);
            }
        });
    };

    // Слушатель скролла
    window.addEventListener('scroll', () => { 
        handleScrollAnimation();
    });

    // Первичный запуск проверки при загрузке страницы
    setTimeout(handleScrollAnimation, 150);
});