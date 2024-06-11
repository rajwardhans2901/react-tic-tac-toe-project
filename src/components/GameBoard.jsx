import { useState } from "react"

let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    
    function selectSqaureHandler(rowIndex, colIndex) {
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X'
            console.log(updatedBoard)
            return updatedBoard
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=>
                            <li key={colIndex}>
                                <button onClick={()=>selectSqaureHandler(rowIndex, colIndex)} >{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )

}
