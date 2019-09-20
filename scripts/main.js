function handleLoad() {
    
    var redValue = 0;
    var blueValue = 0;
    
    var body = document.querySelector('body');
    var rangeY = window.innerHeight/255;
    var rangeX = window.innerWidth/255;

    console.log(window.innerWidth);
    function handleScroll() {

        redValue = Math.floor(window.scrollY/rangeY);
        blueValue = Math.floor(window.scrollX/rangeX);
        console.log(`vertical: ${redValue}`);
        console.log(`horizontal: ${blueValue}`);

        body.style.background = `rgb(${redValue}, 0, ${blueValue})`;
    }

    window.addEventListener('scroll', handleScroll);
}

window.addEventListener('load', handleLoad);