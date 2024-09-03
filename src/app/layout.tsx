import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the client layout

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Card MMO",
  description: "A card-based MMO game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ClientLayout>{children}</ClientLayout>
        </UserProvider>
      </body>
    </html>
  );
}
