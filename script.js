const board = document.querySelector('.grid-container');
const sizeNumber = document.querySelector('.sketch-size');
const slider = document.querySelector('.slider')

function startGrid() {
    for (let i = 0; i < 16 ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        };
    };

slider.addEventListener('input', function() {
    sizeNumber.textContent = `${slider.value} x ${slider.value}`;
    border()
})

function adjustGrid() {
    board.innerHTML = '';
    board.style.setProperty("grid-template-rows", `repeat(${slider.value}, 1fr)`);
    board.style.setProperty("grid-template-columns", `repeat(${slider.value}, 1fr)`);
        for (let i = 0; i < (slider.value ** 2); i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            board.appendChild(square);
        };
    }

    function rainbow() {
        let r = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        return `rgb(${r},${b},${g})`
    }

const colorButtons = document.querySelectorAll('button')
colorButtons.forEach((colorButton) => {
    colorButton.addEventListener('click', () => {
        if (colorButton.classList.contains('black')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'black'
            })
        } else if (colorButton.classList.contains('grey')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'grey'
            })
        } else if (colorButton.classList.contains('silver')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'silver'
            })
        } else if (colorButton.classList.contains('brown')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'brown'
            })
        } else if (colorButton.classList.contains('darkgreen')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'darkgreen'
            })
        } else if (colorButton.classList.contains('red')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'red'
            })
        } else if (colorButton.classList.contains('fuchsia')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'fuchsia'
            })
        } else if (colorButton.classList.contains('orange')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'orange'
            })
        } else if (colorButton.classList.contains('yellow')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'yellow'
            })
        } else if (colorButton.classList.contains('green')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'green'
            })
        } else if (colorButton.classList.contains('greenyellow')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'greenyellow'
            })
        } else if (colorButton.classList.contains('darkblue')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'darkblue'
            })
        } else if (colorButton.classList.contains('blue')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'blue'
            })
        } else if (colorButton.classList.contains('lightblue')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'lightblue'
            })
        } else if (colorButton.classList.contains('purple')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'purple'
            })
        } else if (colorButton.classList.contains('reset')) {
            resetGrid()
        } else if (colorButton.classList.contains('blueviolet')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'blueviolet'
            })
        } else if (colorButton.classList.contains('eraser')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'white'
            })
        } else if (colorButton.classList.contains('rainbow')) {
            board.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = rainbow()
            })
        }
    })
})

const pickInputColor = document.querySelector('#pick')
pickInputColor.addEventListener('input', function() {
    board.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = pickInputColor.value;
    })
});

function border() {
    board.innerHTML = ''
    if (document.getElementById('on-grid').checked) {
        for (let i = 0; i < (slider.value ** 2); i++) {
            board.style.setProperty("grid-template-rows", `repeat(${slider.value}, 1fr)`);
            board.style.setProperty("grid-template-columns", `repeat(${slider.value}, 1fr)`);
            const square = document.createElement('div')
            square.classList.add('square')
            board.appendChild(square)
            square.style.border = '0px'
        } 
    } else {
        adjustGrid()
    }
}

function resetGrid() {
    if (document.getElementById('on-grid').checked) {
        board.innerHTML = ''
        border()
    } else {
        board.innerHTML = ''
        adjustGrid()
    }
}

window.onload = () => {
    startGrid()
    adjustGrid()
}