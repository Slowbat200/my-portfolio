'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const emptyBoard = Array(9).fill(null);

function checkWinner(board: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diags
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return board[a];
  }
  return null;
}

function minimax(newBoard: (string|null)[], isMaximizing: boolean): {score: number, index: number} {
  const winner = checkWinner(newBoard);
  if (winner === 'O') return { score: 1, index: -1 };
  if (winner === 'X') return { score: -1, index: -1 };
  if (newBoard.every((cell) => cell)) return { score: 0, index: -1 };

  let best = isMaximizing ? {score: -Infinity, index: -1} : {score: Infinity, index: -1}
  for (let i = 0; i < 9; i++) {
    if(!newBoard[i]){
      newBoard[i] = isMaximizing ? 'O' : 'X';
      const result = minimax(newBoard, !isMaximizing);
      newBoard[i] = null;
      if(isMaximizing){
        if(result.score > best.score) best = {score: result.score, index: i}
      }else{
        if(result.score < best.score) best = {score: result.score, index: i}
      }
    }
  }
  return best
}

function aiMove(board: (string | null)[]) {
  // 50% chance to play optimally, 50% chance to play randomly
  if (Math.random() < 0.5) {
    // Minimax AI for unbeatable Tic-Tac-Toe
    return minimax(board.slice(), true).index;
  } else {
    // Random move
    const emptyIndices = board.map((cell, idx) => cell ? null : idx).filter(idx => idx !== null) as number[];
    if (emptyIndices.length === 0) return -1;
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  }
}

export default function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>([...emptyBoard]);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell);

  React.useEffect(() => {
    if (!xIsNext && !winner && !isDraw) {
      const move = aiMove(board);
      if (move !== -1) {
        setTimeout(() => {
          const newBoard = board.slice();
          newBoard[move] = 'O';
          setBoard(newBoard);
          setXIsNext(true);
        }, 500);
      }
    }
  }, [xIsNext, board, winner, isDraw]);

  React.useEffect(() => {
    if (winner) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [winner]);

  function handleClick(i: number) {
    if (board[i] || winner || !xIsNext) return;
    const newBoard = board.slice();
    newBoard[i] = 'X';
    setBoard(newBoard);
    setXIsNext(false);
  }

  function handleRestart() {
    setBoard([...emptyBoard]);
    setXIsNext(true);
  }

  return (
    <div className='dark:bg-black bg-white border border-blue-400 text-blue-300 font-mono p-4 rounded h-[500px] max-w-xl mx-5 lg:mx-auto mt-24 lg:mt-36 shadow-lg flex flex-col items-center'>
      <h2 className='mb-4 text-xl font-bold'>Tic-Tac-Toe Console Game</h2>
      <div className='grid grid-cols-3 gap-2 mb-4'>
        {board.map((cell, i) => (
          <button
            key={i}
            className='w-16 h-16 text-3xl flex items-center justify-center border border-blue-700 bg-black hover:bg-blue-900 transition rounded'
            onClick={() => handleClick(i)}
            disabled={!!cell || !!winner || !xIsNext}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className='mb-2'>
        {winner ? (
          <span className='text-green-400'>Winner: {winner}</span>
        ) : isDraw ? (
          <span className='text-yellow-400'>Draw!</span>
        ) : (
          <span>Turn: {xIsNext ? 'You (X)' : 'AI (O)'}</span>
        )}
      </div>
      <button
        className='mt-2 px-4 py-1 border border-blue-400 rounded hover:bg-blue-800'
        onClick={handleRestart}
      >
        Restart
      </button>
      <div className='mt-4 text-xs text-blue-200'>
        You are X. Click a cell to play. Try to beat the AI!
      </div>
    </div>
  );
}
