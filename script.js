function place_nav_bar() {
    const img = document.querySelector('.img_titre');
    const navbar = document.querySelector('.navbar');

    const imgHeight = img.offsetHeight;
    const imgOffsetTop = img.offsetTop;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if (scrollTop > imgOffsetTop + imgHeight) {
        navbar.style.position = 'fixed';
        navbar.style.bottom = 'auto';
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'absolute';
        navbar.style.bottom = 'auto';
        navbar.style.top = `${imgOffsetTop + imgHeight}px`;
    }

    var url = location.href;
    var urlFilename = url.substring(url.lastIndexOf('/') + 1);

    if (urlFilename == "index.html" || urlFilename == "" || urlFilename == "memory_category.html" || urlFilename == "logic_category.html" || urlFilename == "chance_category.html") {

        if (scrollTop > imgOffsetTop + imgHeight) {
            document.getElementById("titre_jeux").style.position = 'fixed';
            document.getElementById("titre_jeux").style.top = `${navbar.offsetHeight}px`

        } else {
            document.getElementById("titre_jeux").style.position = 'absolute';
            document.getElementById("titre_jeux").style.top = `${navbar.offsetHeight + imgOffsetTop + imgHeight}px`

        }
    }



}

window.addEventListener('scroll', function () {
    place_nav_bar();
});

window.addEventListener('resize', function () {
    place_nav_bar();
});

window.addEventListener('load', function () {
    place_nav_bar();

    const img = document.querySelector('.img_titre');

    const imgHeight = img.offsetHeight;
    const imgOffsetTop = img.offsetTop;
    const container = document.querySelector('.container');
    container.style.marginTop = `${(imgOffsetTop + imgHeight) / 100 + 17}%`;


    let titre_x = imgHeight / 10;
    const titre = document.querySelector('h1')

    titre.style.setProperty('--titre_place', `${titre_x}px`)

    titre.style.animationName = 'none';
    void titre.offsetWidth;
    titre.style.animationName = 'arrivee_titre'

    titre.addEventListener('animationend', function () {
        titre.style.transition = '0.25s all ease-in-out'
        titre.addEventListener('mouseenter', function () {
            titre.style.transform = "scale(1.1)"
        });

        titre.addEventListener('mouseleave', function () {
            titre.style.transform = "scale(1)"
        })
    });

});
