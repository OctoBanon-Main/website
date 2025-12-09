import type { Metadata } from "next";
import { adwaitaSans, adwaitaMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "OctoBanon's Website",
    description: "Personal website with information about me.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${adwaitaSans.variable} dark antialiased min-h-[100dvh]`}>{children}</body>
        </html>
    );
}
