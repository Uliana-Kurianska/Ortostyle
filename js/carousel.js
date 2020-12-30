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
        const imgElement1 = document.querySelector('.carousel .img1');
        const imgElement2 = document.querySelector('.carousel .img2');
        const imgElement3 = document.querySelector('.carousel .img3');
        const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 >= images.length ? 0 : idx2 + 1;
        console.log(currentIdx, idx2, idx3);
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
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