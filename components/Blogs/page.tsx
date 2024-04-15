// pages/index.tsx
import React from 'react';
import TopBar from '../Navbar/Navbar';
import Card from '../Cards/cardfile';

const Home: React.FC = () => {
  const cards = [
    {
      title: 'Article 1',
      date: 'April 10, 2024',
      readTime: '5',
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      href: '/article/1',
    },
    {
      title: 'Article 2',
      date: 'April 9, 2024',
      readTime: '8',
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      href: '/article/2',
    },
    {
      title: 'Article 3',
      date: 'April 8, 2024',
      readTime: '12',
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      href: '/article/3',
    },
  ];

  return (
    <div>
      <TopBar
        logoLink="/"
        logoText="My App"
        searchPlaceholder="Search..."
        profileImageSrc="https://via.placeholder.com/40x40"
        profileName="John Doe"
        notificationIconSvg={
          <svg
            className="h-6 w-6 text-gray-400 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* SVG code for the notification icon */}
          </svg>
        }
      />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Home;