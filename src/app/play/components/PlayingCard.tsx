import React from "react";

interface PlayingCardProps {
  children: React.ReactNode;
}

function PlayingCard({ children }: PlayingCardProps) {
  return (
    <div className="w-[200px] h-[250px] bg-gray-200 shadow-lg rounded-lg mb-4 flex flex-col flex-none">
      {children}
    </div>
  );
}

export default PlayingCard;
