const canvasTile = document.createElement('div')
canvasTile.className = 'tile';

function modifyCanvas(numberOfTiles) {
    if (numberOfTiles > 100) {
        alert("Canvas too big! Enter a value less than 100.")
        return;
    }
    for (let i = 0; i < numberOfTiles; i++) {
        document.querySelector('.canvas').appendChild(canvasTile)    
    }    
}


modifyCanvas(1)