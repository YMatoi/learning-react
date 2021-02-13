import React, { useState } from 'react'

type BoardProps = {
    num: number;
}

const Board = (props: BoardProps) => {
    const size = props.num * props.num
    const [board, setBoard] = useState(Array(size).fill("-"))

    function setBoardXY(x: number, y: number, state: string) {
        const pos = props.num * y + x
        const copy = board.slice()
        copy[pos] = state
        setBoard(copy)
    }

    const [turn, setTurn] = useState(1)
    function toggleTurn() { setTurn(1 - turn) }

    function onClickBoard(x: number, y: number) {
        if (board[props.num * y + x] == "-") {
            setBoardXY(x, y, turn.toString())
            toggleTurn()
        }
    }

    const items = []
    for (let y = 0; y < props.num; y++) {

        const xs = []
        for (let x = 0; x < props.num; x++) {
            xs.push(
                <button onClick={() => { onClickBoard(x, y) }}>x: {x} y:{y} state: {board[props.num * y + x]}</button>
            )
        }
        items.push(<div>{xs}</div>)
    }

    return (
        <div>
            {items}
        </div>
    )
}

export default Board;