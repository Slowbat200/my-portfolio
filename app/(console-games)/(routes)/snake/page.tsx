'use client';

import { useEffect, useRef, useState } from 'react';

type Position = { x: number; y: number };

const CELL_SIZE = 20;
const WIDTH = 400;
const HEIGHT = 400;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver) return;

      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check collision
        if (
          newHead.x < 0 ||
          newHead.x >= WIDTH / CELL_SIZE ||
          newHead.y < 0 ||
          newHead.y >= HEIGHT / CELL_SIZE ||
          prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          // genearte new food
          setFood({
            x: Math.floor(Math.random() * (WIDTH / CELL_SIZE)),
            y: Math.floor(Math.random() * (HEIGHT / CELL_SIZE)),
          });
        } else {
          newSnake.pop(); // move forward
        }
        return newSnake
      });
    }, 150);
    return () => clearInterval(interval);
  },[direction, food, gameOver]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw snake
    ctx.fillStyle = 'lime';
    snake.forEach(({x, y}) => {
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }, [snake, food]);

  const handleRestart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 0, y: -1 });
    setGameOver(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-0 lg:mt-12 gap-4">
      <h1 className="text-3xl font-bold">Snake Game</h1>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        className="border-2 border-white"
      />
      {gameOver && (
        <div className="text-center">
          <p className="text-red-500 text-xl font-bold mt-4">Game Over</p>
          <button
            onClick={handleRestart}
            className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
