'use client';

import React, { useState, useEffect, useRef } from 'react';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const TETROMINOS = {
  I: [[1, 1, 1, 1]],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

const randomTetromino = () => {
  const keys = Object.keys(TETROMINOS);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return TETROMINOS[randKey as keyof typeof TETROMINOS];
};

const Tetris = () => {
  const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array(COLS).fill(0)));
  const [currentPiece, setCurrentPiece] = useState(randomTetromino());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [dropInterval, setDropInterval] = useState(1000);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawBoard = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, COLS * BLOCK_SIZE, ROWS * BLOCK_SIZE);
    board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = 'blue';
          ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
      });
    });
  };

  const drawPiece = (ctx: CanvasRenderingContext2D) => {
    currentPiece.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = 'red';
          ctx.fillRect((x + position.x) * BLOCK_SIZE, (y + position.y) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
      });
    });
  };

  const isValidMove = (piece: number[][], pos: { x: number; y: number }) => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          const newX = x + pos.x;
          const newY = y + pos.y;
          if (newX < 0 || newX >= COLS || newY >= ROWS || board[newY][newX]) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const movePiece = (dir: number) => {
    const newPos = { x: position.x + dir, y: position.y };
    if (isValidMove(currentPiece, newPos)) {
      setPosition(newPos);
    }
  };

  const rotatePiece = () => {
    const rotatedPiece = currentPiece[0].map((_, index) => currentPiece.map(row => row[index]).reverse());
    if (isValidMove(rotatedPiece, position)) {
      setCurrentPiece(rotatedPiece);
    }
  };

  const dropPiece = () => {
    const newPos = { x: position.x, y: position.y + 1 };
    if (isValidMove(currentPiece, newPos)) {
      setPosition(newPos);
    } else {
      // Merge piece into board
      const newBoard = board.map(row => [...row]);
      currentPiece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            newBoard[y + position.y][x + position.x] = value;
          }
        });
      });
      setBoard(newBoard);
      removeFullRows(newBoard);
      setCurrentPiece(randomTetromino());
      setPosition({ x: 0, y: 0 });
    }
  };

  const removeFullRows = (newBoard: number[][]) => {
    let rowsCleared = 0;
    for (let y = 0; y < newBoard.length; y++) {
      if (newBoard[y].every(value => value !== 0)) {
        newBoard.splice(y, 1);
        newBoard.unshift(Array(COLS).fill(0));
        rowsCleared++;
      }
    }
    setScore(prevScore => prevScore + rowsCleared * 100);
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawBoard(ctx);
      drawPiece(ctx);
    }
  }, [board, currentPiece, position]);

  useEffect(() => {
    const interval = setInterval(() => {
      dropPiece();
    }, dropInterval);
    return () => clearInterval(interval);
  }, [currentPiece, position, dropInterval]);

  const handleSpeedUp = () => {
    setDropInterval(100); // Speed up the drop interval
  };

  const handleSpeedNormal = () => {
    setDropInterval(1000); // Revert to normal speed
  };

  return (
    <div className="tetris flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <canvas ref={canvasRef} width={COLS * BLOCK_SIZE} height={ROWS * BLOCK_SIZE} className="border-4 border-gray-700" />
      <div className="mt-4 text-lg">Score: {score}</div>
      <div className="flex gap-2 mt-4">
        <button onClick={() => movePiece(-1)} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Left</button>
        <button onClick={() => movePiece(1)} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Right</button>
        <button onClick={rotatePiece} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Rotate</button>
        <button 
          onMouseDown={handleSpeedUp} 
          onMouseUp={handleSpeedNormal} 
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
        >
          Speed Up
        </button>
      </div>
    </div>
  );
};

export default Tetris;