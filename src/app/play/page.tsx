"use client";
import React, { useState } from "react";
import EnemyActionCard from "./components/EnemyActionCard";

function Play() {
  // Initial state for player and enemy
  const [playerState, setPlayerState] = useState({ health: 100, actions: [] });
  const [enemyState, setEnemyState] = useState({ health: 100, actions: [] });
  const [enemyTactic, setEnemyTactic] = useState("Attack");
  const [enemyActions, setEnemyActions] = useState([
    {
      title: "Action 1",
      description: "Description of Action 1",
      initiative: 1,
      imageUrl: "/images/sword_swing.webp",
    },
    {
      title: "Action 2",
      description: "Description of Action 2",
      initiative: 2,
      imageUrl: "/images/sword_swing.webp",
    },
    {
      title: "Action 3",
      description: "Description of Action 3",
      initiative: 3,
      imageUrl: "/images/sword_swing.webp",
    },
    {
      title: "Action 4",
      description: "Description of Action 4",
      initiative: 4,
      imageUrl: "/images/sword_swing.webp",
    },
  ]);

  return (
    <div className="flex flex-col items-center p-4 h-screen max-h-screen overflow-hidden">
      {/* Title */}
      <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold">Game</h1>
      </div>
      {/* Enemy area */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Enemy</h2>
        <p className="text-gray-700">Health: {enemyState.health}</p>
      </div>
      {/* Enemy tactic and actions */}
      <div className="flex flex-1 flex-col items-center w-full max-w-md bg-white shadow-md rounded-lg p-4 my-8 overflow-hidden">
        <h2 className="text-xl font-semibold mb-2">Enemy Tactic</h2>
        <p className="text-gray-700 mb-4">{enemyTactic}</p>
        <div className="flex-1 w-full flex flex-col items-center overflow-y-auto p-2">
          {enemyActions.map((action, index) => (
            <EnemyActionCard
              key={index}
              title={action.title}
              description={action.description}
              initiative={action.initiative}
              imageUrl={action.imageUrl}
            />
          ))}
        </div>
      </div>
      {/* Player area */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mt-auto">
        <h2 className="text-xl font-semibold mb-2">Player</h2>
        <p className="text-gray-700">Health: {playerState.health}</p>
      </div>
    </div>
  );
}

export default Play;
