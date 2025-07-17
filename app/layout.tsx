// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zyra Dashboard",
  description: "Manage your bot like a boss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
