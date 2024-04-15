// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import BookmarkIcon from "@/Icons/BookmarkIcon";
import AddPostIcon from "@/Icons/AddPost";
import PopularIcon from "@/Icons/PopularIcon";
import HistoryIcon from "@/Icons/HistoryIcon";
import LogoutIcon from "@/Icons/LogoutIcon";
import MostUpvotedIcon from "@/Icons/MostUpvotedIcon";
import SettingsIcon from "@/Icons/SettingsIcon";

const sidebarLinks = [
  { label: "Most popular", href: "#", icon: <PopularIcon /> },

  { label: "Most Upvoted", href: "#", icon: <MostUpvotedIcon /> },
  {
    label: "Bookmarked",
    href: "#",
    icon: <BookmarkIcon />,
  },
  { label: "History", href: "#", icon: <HistoryIcon /> },
  { label: "Create Post", href: "/create-post", icon: <AddPostIcon /> },
  { label: "Settings", href: "#", icon: <SettingsIcon /> },
  { label: "Logout", href: "#", icon: <LogoutIcon /> },
];

const Sidebar: React.FC = () => {
  return (
    <div className="  bg-gray-200 text-black h-screen w-56  overflow-y-auto border-r-2 border-sky-500">

      <nav>
        <ul className="space-y-2 p-6">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} legacyBehavior>
                <a className="flex items-center py-3 px-2 hover:bg-gray-700 rounded mb-4">
                  <span className="pr-3 text-md">{link.icon}</span>
                  <span className="text-lg">{link.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
