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

const sizeInputBar = document.querySelector('#sizeInputBar')
sizeInputBar.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        modifyCanvas(sizeInputBar.value);
    }
})

const confirmButton = document.querySelector('.confirmButton')
confirmButton.addEventListener('click', () => {
    modifyCanvas(sizeInputBar.value);
})

modifyCanvas(1)