// Import necessary libraries and components
'use client'

import React, { useState, useRef, useEffect } from "react";
import confetti from 'canvas-confetti';

// Initial output messages for the game
const initialOutput = [
  "Welcome to Hangman Console Game!",
  "Type 'start' to play Hangman or 'help' for commands."
];

// List of words to be used in the game
const words = ["react", "portfolio", "console", "developer", "typescript", "javascript", "hangman", "frontend", "backend", "api", "random", "game", "nextjs", "tailwind", "component", "function", "variable", "object", "array", "state"];

// Function to get a random word from the list
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Main Hangman component
export default function Hangman() {
  // State variables for output, input, and game status
  const [output, setOutput] = useState(initialOutput);
  const [input, setInput] = useState("");
  const [game, setGame] = useState<null | { word: string; guessed: string[]; wrong: number; active: boolean }>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the bottom of the output div when output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Function to handle commands entered by the user
  const handleCommand = (cmd: string) => {
    let lines = [];
    if (game && game.active) {
      // Handle a guess in the Hangman game
      const guess = cmd.trim().toLowerCase();
      if (guess.length !== 1 || !/^[a-z]$/.test(guess)) {
        lines.push("Please enter a single letter.");
      } else if (game.guessed.includes(guess)) {
        lines.push(`You already guessed '${guess}'.`);
      } else {
        const guessed = [...game.guessed, guess];
        let wrong = game.wrong;
        if (!game.word.includes(guess)) wrong++;
        const display = game.word
          .split("")
          .map((c) => (guessed.includes(c) ? c : "_"))
          .join(" ");
        if (display.replace(/ /g, "") === game.word) {
          lines.push(`You win! The word was '${game.word}'. Type 'start' to play again.`);
          confetti();
          setGame(null);
        } else if (wrong >= 6) {
          lines.push(`Game over! The word was '${game.word}'. Type 'start' to play again.`);
          setGame(null);
        } else {
          setGame({ ...game, guessed, wrong });
          lines.push(display);
          lines.push(`Wrong guesses: ${wrong}/6`);
        }
      }
    } else {
      // Handle non-game commands
      if (cmd === "help") {
        lines.push("Commands: start, help, clear");
      } else if (cmd === "clear") {
        setOutput(initialOutput);
        return;
      } else if (cmd === "start") {
        const word = getRandomWord();
        setGame({ word, guessed: [], wrong: 0, active: true });
        lines.push("Hangman started! Guess a letter:");
        lines.push(word.replace(/./g, "_ "));
      } else {
        lines.push(`Unknown command: '${cmd}'. Type 'help'.`);
      }
    }
    setOutput((prev) => [...prev, "> " + cmd, ...lines]);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim().toLowerCase());
      setInput("");
    }
  };

  return (
    <div className="bg-black border border-green-400 text-green-400 font-mono p-4 rounded h-[500px] max-w-xl lg:mx-auto mx-5 lg:mt-36 mt-12 shadow-lg flex flex-col">
      <div ref={outputRef} className="flex-1 overflow-y-auto mb-2 whitespace-pre-line" style={{ minHeight: 0 }}>
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="mr-2">&gt;</span>
        <input
          className="flex-1 bg-black text-green-400 outline-none border-b border-green-700"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
}