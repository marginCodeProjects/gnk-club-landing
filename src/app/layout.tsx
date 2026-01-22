import type { Metadata } from "next";
import "./globals.css";
import {agPalatial, ltSuperior} from "@/app/fonts";
import {ModalProvider} from "@/providers/ModalProvider";

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
        <ModalProvider>
            {children}
        </ModalProvider>
        </body>
        </html>
    );
}
