import { useState } from "react";
import Square from "./square";


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerIs, setWinnerIs] = useState<string | null>(null);


    function isWinner(filledSquares:Array<string|null>){
        const winningStates = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let state of winningStates){
            let result:Array<string|null> = [];
            for(let idx of state){
                result.push(filledSquares[idx]);
            }
            if(result.every((val)=> val === "X")){
                setWinnerIs("X");
                break
            }else if(result.every((val)=> val === "O")){
                setWinnerIs("O");
                break
            }
        }
    }
  function handleSquareClick(i:number) {
    let nextSquares = squares.slice();
    if(nextSquares[i] || winnerIs){
        return;
    }
    if(xIsNext){
        nextSquares[i] = "X";
    }else{
        nextSquares[i] = "O"
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    isWinner(nextSquares);
  }
  let status;
  if(winnerIs){
    status = `Winner is ${winnerIs}`
  }else if(xIsNext){
    status = "next player is X"
  }else{
    status = "next player is O"
  }

//   if(winnerIs){
//     return(
//         <div>
//             winner is {winnerIs}
//         </div>
//     )
//   }

  return (
    <>
      <div>{status}</div>
      <div className="flex flex-row">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="flex flex-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="flex flex-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

export default Board;
