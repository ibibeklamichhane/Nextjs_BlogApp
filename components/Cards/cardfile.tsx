// components/Card.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import CommentIcon from "@/Icons/CommentIcon";
import MostUpvotedIcon from "@/Icons/MostUpvotedIcon";
import BookmarkIcon from "@/Icons/BookmarkIcon";

interface CardProps {
  title: string;
  date: string;
  readTime: string;
  thumbnailUrl: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  readTime,
  thumbnailUrl,
  href,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="card bg-gray-200 shadow-md rounded-xl overflow-hidden">
      <div className="">
      <h3 className="text-lg font-bold mb-2">
        <Link href={href} legacyBehavior>
          <a>{title}</a>
        </Link>
      </h3>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="text-gray-500 text-sm">{readTime} read time</span>
        </div>

        <Link href={href} legacyBehavior>
          <a>
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full rounded-xl h-48 object-cover"
            />
          </a>
        </Link>
        <div className="">
          <div className="flex justify-center space-x-20 mt-4 ">
            <button
              className={`text-gray-500 hover:text-red-500 focus:outline-none ${
                isLiked ? "text-red-500" : ""
              }`}
              onClick={toggleLike}
            >
              <MostUpvotedIcon className="" />
            </button>

            <CommentIcon className="text-gray-500 hover:text-blue-500 focus:outline-none " />

            <button
              className={`text-gray-500 hover:text-yellow-500 focus:outline-none ${
                isBookmarked ? "text-yellow-500" : ""
              }`}
              onClick={toggleBookmark}
            >
              <BookmarkIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;

//240 width ,412 height
