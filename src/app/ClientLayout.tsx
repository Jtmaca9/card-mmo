"use client";

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SidebarButton from "../components/SidebarButton";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, error, isLoading } = useUser();
  const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar collapse

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        {error.message}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
        Please log in.
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 bg-white shadow-md p-4 flex flex-col justify-between max-w-[300px]`}
          style={{ width: isCollapsed ? "85px" : "25%" }}
        >
          <div>
            <div className="flex flex-row justify-between w-full pt-2 pb-10">
              <h2
                className={`text-xl font-semibold pb-4 whitespace-nowrap truncate ${
                  isCollapsed ? "hidden" : ""
                }`}
              >
                Card-game
              </h2>
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mb-4 p-2 bg-gray-200 rounded-full"
              >
                {isCollapsed ? (
                  <FaChevronRight className="h-5 w-5 text-gray-700" />
                ) : (
                  <FaChevronLeft className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </div>

            <ul className="space-y-4">
              <SidebarButton
                href="/"
                iconType="home"
                collapsed={isCollapsed}
                label="Home"
              />
              <SidebarButton
                href="play"
                iconType="gamepad"
                collapsed={isCollapsed}
                label="Play"
              />
              <SidebarButton
                href="characters"
                iconType="user"
                collapsed={isCollapsed}
                label="Characters"
              />
              <SidebarButton
                href="stats"
                iconType="bars"
                collapsed={isCollapsed}
                label="Stats"
              />
              <SidebarButton
                href="settings"
                iconType="cog"
                collapsed={isCollapsed}
                label="Settings"
              />
            </ul>
          </div>
          {/* User Area */}
          <div
            className={`flex items-center space-x-4 mt-4 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Image
              src={user.picture || ""}
              alt={user.name || ""}
              width={40} // equivalent to w-10 in Tailwind CSS
              height={40} // equivalent to h-10 in Tailwind CSS
              className="rounded-full"
            />
            {!isCollapsed && <span>{user.name}</span>}
            {!isCollapsed && (
              <a href="/api/auth/logout" className="text-blue-500">
                Logout
              </a>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="flex-1 bg-cover bg-center max-h-screen h-screen overflow-scroll"
          style={{ backgroundImage: "url('images/main_bg.webp')" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
