"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }
  }, [isLoading, user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      Home screen
      {user && (
        <>
          <img src={user?.picture || ""} alt={user?.name || ""} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <button onClick={() => router.push("/api/auth/logout")}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
