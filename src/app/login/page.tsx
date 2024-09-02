"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Login() {
  const router = useRouter();

  const createUser = async () => {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
      });
      if (response.status === 200 || response.status === 409) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      router.push("/api/auth/logout");
    }
  };

  useEffect(() => {
    createUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      Loading...
    </div>
  );
}
