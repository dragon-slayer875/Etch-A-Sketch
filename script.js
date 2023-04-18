const canvasTile = document.createElement('div')
canvasTile.className = 'tile';

function modifyCanvas(numberOfTiles) {
    for (let i = 0; i < numberOfTiles; i++) {
        console.log('Hello')
        // document.querySelector('.canvas').appendChild(canvasTile)    
    }    
}

modifyCanvas(1)