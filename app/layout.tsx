import TopBar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A Blog App created with Nextjs And Typescript",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (


<html lang="en">
<body>
        <div className="sticky top-0 z-50">
          <TopBar/>
          </div>
          <div className="flex flex-grow">
            <div className="fixed">
          <Sidebar/>
          </div>

            
            <main className="flex-grow p-4  ml-60 mr-4">{children}</main>
          </div>
          </body>
          </html>
          

 
    
    
  );
}
