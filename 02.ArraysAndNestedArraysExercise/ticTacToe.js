function ticTacToe(moves) {
    const playField = [[false, false, false],
                       [false, false, false],
                       [false, false, false]];

    let fieldsTaken = 0;
    let player = 'X';

    function isWinning(playField, r, c) {
        if ((playField[0][0] === playField[1][1] && playField[0][0] === playField[2][2] && playField[0][0] !== false) ||
            (playField[0][2] === playField[1][1] && playField[0][2] === playField[2][0] && playField[0][2] !== false) ||
            (playField[r][0] === playField[r][1] && playField[r][0] === playField[r][2] && playField[r][0] !== false) ||
            (playField[0][c] === playField[1][c] && playField[0][c] === playField[2][c] && playField[0][c] !== false)) {
            return true
        }
    }

    for (let move of moves) {
        const [r, c] = move.split(' ').map(item => parseInt(item));

        if (playField[r][c]) {
            console.log("This place is already taken. Please choose another!")
        } else {
            playField[r][c] = player;
            fieldsTaken += 1;

            if (isWinning(playField, r, c)) {
                console.log(`Player ${player} wins!`);
                break
            } else if (fieldsTaken === 9) {
                console.log("The game ended! Nobody wins :(");
                break
            } else {
                if (player === 'X') {player = 'O'} else {player = 'X'}
            }
        }
    }

    playField.forEach(row => {
        console.log(row.join('\t'))
    })
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);