//This function is used to create the carousel
function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}
//This function makes the carousel to move forward
function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
//This function runs the carosel
function startPlayback() {    
    setTimeout(moveForward, slideInterval);
}
startPlayback();