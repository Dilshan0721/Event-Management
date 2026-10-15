import type { Metadata } from "next";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "Velora Events | Live Events & Tickets",
  description: "Discover concerts, sports, and unforgettable live experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
