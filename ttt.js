const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = 'X';
let gameEnded = false;

function cellClicked(event) {
    const cell = event.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell'));

    if (cell.classList.contains('cell') && !cell.innerText && !gameEnded) {
        cell.innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            document.getElementById('message').classList.add('winner');
            gameEnded = true;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = `It's a draw!`;
            document.getElementById('message').classList.add('draw');
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return document.querySelector(`[data-cell="${index}"]`).innerText === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...document.querySelectorAll('.cell')].every(cell => {
        return cell.innerText;
    });
}
