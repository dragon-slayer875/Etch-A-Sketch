const canvasTile = document.createElement('div')
canvasTile.className = 'tile';
const canvas = document.querySelector('.canvas')

function modifyCanvas(numberOfTiles) {
    if (numberOfTiles > 100) {
        alert("Canvas too big! Enter a value less than 100.")
        return;
    }
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < numberOfTiles**2; i++) {
        canvas.appendChild(canvasTile.cloneNode(true));    
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