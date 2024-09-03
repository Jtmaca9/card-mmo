import React from "react";
import PlayingCard from "./PlayingCard";
import Image from "next/image";

interface EnemyActionCardProps {
  title: string;
  description: string;
  initiative: number;
  imageUrl: string;
}

function EnemyActionCard({
  title,
  description,
  initiative,
  imageUrl,
}: EnemyActionCardProps) {
  return (
    <PlayingCard>
      <div className="relative p-0 m-0">
        <div className="absolute top-[-8px] left-[-8px] bg-blue-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
          {initiative}
        </div>
      </div>
      <div className="w-full bg-slate-200 p-2 rounded-t-lg">
        <h3 className="w-full text-center text-lg font-semibold ">{title}</h3>
      </div>
      <div className="relative w-full h-28">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 flex-1 bg-slate-200 rounded-b-lg">
        <p className="text-gray-700 text-sm font-medium">{description}</p>
      </div>
    </PlayingCard>
  );
}

export default EnemyActionCard;
