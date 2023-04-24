const canvasTile = document.createElement('div')
canvasTile.className = 'tile';
const canvas = document.querySelector('.canvas')
canvas.style = `grid-template-columns: repeat(1, 1fr); grid-template-rows: repeat(1, 1fr);`

function modifyCanvas(numberOfTiles) {
    if (numberOfTiles > 100) {
        alert("Canvas too big! Enter a value less than 100.")
        return;
    }

    canvas.style = `grid-template-columns: repeat(${numberOfTiles}, 1fr); grid-template-rows: repeat(${numberOfTiles}, 1fr);`
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (let i = 0; i < numberOfTiles**2; i++) {
        canvas.appendChild(canvasTile.cloneNode(true));    
    }
    
    const canvasTiles = document.querySelectorAll('.tile')
    canvasTiles.forEach(tile => {
        tile.addEventListener('mousedown', () => {
            tile.classList.add('tileSelected')
        })
    });
    canvasTiles.forEach(tile => {
        tile.addEventListener('mouseenter', (e) => {
            if (e.buttons == 0) {
                return;
            }
            tile.classList.add('tileSelected')
        } )
    });    
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

const resetButton = document.querySelector('.resetButton')
resetButton.addEventListener('click', () => {
    const canvasTiles = document.querySelectorAll('.tile')
    canvasTiles.forEach(tile => {
        tile.classList.remove('tileSelected')
    });
})

modifyCanvas(16)