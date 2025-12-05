"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Writer } from "./index";

interface CardWriterProps extends Writer {
  onToggleFollow: (id: string) => void;
}

const CardWriter: React.FC<CardWriterProps> = ({
  id,
  name,
  avatarUrl,
  bio,
  followers,
  onToggleFollow,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    onToggleFollow(id);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-3 ">
        <img
          src={avatarUrl}
          alt={name}
          className="w-15 h-15 rounded-full object-cover"
        />

        <div>
          <Link href={`/writer/${id}`} className="font-semibold text-lg text-black hover:underline">
            {name}
          </Link>

          <p className="text-gray-500 text-sm">
            {(followers / 1000).toFixed(1)}k followers
          </p>
        </div>
      </div>

      <button
        onClick={handleFollow}
        className={`px-4 py-1 rounded-lg border text-sm transition ${
          isFollowing ? "bg-gray-200 text-gray-700" : "bg-[#8B865C] text-white"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default CardWriter;
