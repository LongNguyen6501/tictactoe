import { useState } from "react"

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">{value}</button>
  );
}
export default function Game() {
  const [boardState, setBoardState] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(null)

  function handleClick(i) {
    let newBoardState = boardState.slice()
    if (winner === null && boardState[i] === null) {
      if (turn % 2 === 0) {
        newBoardState[i] = 'x'
      } else {
        newBoardState[i] = 'o'
      }
      setBoardState(newBoardState)
      setTurn(turn + 1)
    }

    setWinner(winCalculate(newBoardState))
  }
  return (
    <div>
      <h1 className="title">Tic Tac Toe</h1>
      <p className="winner">Winner: {winner}</p>
      <section className="mainGame">
        <div>
          <div>
            <Square value={boardState[0]} onClick={() => handleClick(0)} />
            <Square value={boardState[1]} onClick={() => handleClick(1)} />
            <Square value={boardState[2]} onClick={() => handleClick(2)} />
          </div>

          <div>
            <Square value={boardState[3]} onClick={() => handleClick(3)} />
            <Square value={boardState[4]} onClick={() => handleClick(4)} />
            <Square value={boardState[5]} onClick={() => handleClick(5)} />
          </div>

          <div>
            <Square value={boardState[6]} onClick={() => handleClick(6)} />
            <Square value={boardState[7]} onClick={() => handleClick(7)} />
            <Square value={boardState[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      </section >
    </div>

  )
}

function winCalculate(boardState) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < winLines.length; i++) {
    const a = winLines[i][0]
    const b = winLines[i][1]
    const c = winLines[i][2]
    if (boardState[a] != null && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return boardState[a]
    }
  }
  return null
}