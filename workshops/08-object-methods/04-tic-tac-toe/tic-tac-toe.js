// YOUR CODE BELOW
const ticTacToe = {
    board: Array(3).fill().map(() => Array(3).fill(null)),
    move: function(charatcter, rowNum, colNum){
        if(this.board[rowNum][colNum] === null) {
            this.board[rowNum][colNum] = charatcter;
            console.log(this.board);
            return this.board;
        }else {
            console.log(this.board);
            return this.board;
        }
    },
    clear: function() {
        this.board = Array(3).fill().map(() => Array(3).fill(null));
        console.log(this.board);
        return this.board;
    }
}