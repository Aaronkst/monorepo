import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "ui/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Todo List admin panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Theme colorScheme="dark">
        <body className={inter.className}>{children}</body>
      </Theme>
    </html>
  );
}
