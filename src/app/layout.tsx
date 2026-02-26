import type { Metadata, Viewport } from "next";
import { adwaitaSans } from "../data/fonts";
import "./globals.css";

export const viewport: Viewport = {
    themeColor: "#222226"
}

export const metadata: Metadata = {
    metadataBase: new URL("https://octobanon.com"),
    title: "OctoBanon's Website",
    description: "Personal website with information about me.",
    twitter: {
        card: "summary",
        title: "OctoBanon's Website",
        description: "Personal website with information about me.",
        images: "/fof.gif"
    }
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