// pages/index.tsx
import React from "react";

import Card from "@/components/Cards/cardfile";
import thumbnail from '@/Icons/thumbnail.png'

const Blogs: React.FC = () => {
  const cards = [


  
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
    {
      title: "The Programming Language of the Future?",
      date: "April 8, 2024",
      readTime: "12",
      thumbnailUrl: "https://via.placeholder.com/300x200",
      href: "/article/3",
    },
  ];

  return (
    <div>
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            readTime={card.readTime}
            thumbnailUrl={card.thumbnailUrl}
            href={card.href}
          />
        ))}
      </main>
    </div>
  );
};

export default Blogs;
