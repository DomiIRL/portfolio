import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Set up the JetBrains Mono font with a CSS variable and Latin subset
const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

// Define metadata for the application
export const metadata: Metadata = {
    title: "Dominik Svrt",
    description: "Personal Portfolio",
};

// Define the RootLayout component
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}