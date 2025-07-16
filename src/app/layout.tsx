import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'New Website',
  description: 'New website with the same design as NextLayer Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
