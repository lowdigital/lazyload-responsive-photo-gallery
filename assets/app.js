document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.gallery-item');
    let visibleCount = 12;

    const loadLazyImage = (img) => {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
    };

    const showInitialItems = () => {
        for (let i = 0; i < visibleCount && i < items.length; i++) {
            items[i].classList.add('visible');
            loadLazyImage(items[i].querySelector('img'));
        }
        observeLastVisibleItem();
    };

    const loadMoreImages = () => {
        let newVisibleCount = visibleCount + 12;
        for (let i = visibleCount; i < newVisibleCount && i < items.length; i++) {
            items[i].classList.add('visible');
            loadLazyImage(items[i].querySelector('img'));
        }
        visibleCount = newVisibleCount;
        observeLastVisibleItem();

        if (visibleCount >= items.length) {
            observer.disconnect();
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreImages();
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const observeLastVisibleItem = () => {
        if (items[visibleCount - 1]) {
            observer.observe(items[visibleCount - 1]);
        }
    };

    Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
            display: ["close"],
        },
        Thumbs: {
            autoStart: false,
        },
        Image: {
            zoom: false,
            click: false,
            wheel: "slide",
        },
        on: {
            "Carousel.change": (fancybox, carousel, slide) => {
                if (slide >= visibleCount) {
                    loadMoreImages();
                }
            }
        }
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
        tippy('[data-tippy-content]', {
            theme: 'light-border',
        });
    }

    showInitialItems();
});