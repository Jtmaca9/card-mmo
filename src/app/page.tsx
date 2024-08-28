"use client";

// import { useAuth } from "@/context/AuthContext"; // Adjust the path as necessary
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase"; // Adjust the path as necessary

export default function Home() {
  // const { user } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login"); // Redirect to login if user is not authenticated
  //   }
  // }, [user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      Home screen - user email
      {/* <button onClick={() => signOut(auth)} className="ml-4">
        sign out
      </button> */}
    </div>
  );
}
