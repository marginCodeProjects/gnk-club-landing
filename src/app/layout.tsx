import type { Metadata } from "next";
import "./globals.css";
import {agPalatial, ltSuperior} from "@/app/fonts";

export const metadata: Metadata = {
  title: "GNK.CLUB",
  description: "GNK.CLUB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${ltSuperior.variable} ${agPalatial.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
