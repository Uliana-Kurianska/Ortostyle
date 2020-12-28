{
    const images = [
        'img/gallery-01.png',
        'img/gallery-02.png',
        'img/gallery-03.png',
        'img/gallery-04.png',
        'img/gallery-05.png',
        'img/gallery-06.png',
        'img/gallery-07.png',
        'img/gallery-08.png',
        'img/gallery-09.png',
        'img/gallery-10.png',
        
    ]

    let currentIdx = 0;
    function showCurrent() {
        const imgElement = document.querySelector('.carousel .current-img');
        imgElement.src = images[currentIdx];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

    setInterval(showNext, 3000);
    document.querySelector('.carousel .next').addEventListener('click', showNext);
    document.querySelector('.carousel .prev').addEventListener('click', showPrev);
    showCurrent();
}