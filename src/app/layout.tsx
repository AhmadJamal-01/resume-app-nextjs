import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/sidebar";
import { personalData } from "@/data/page-data";


const inter = Inter({ 
  subsets: ["latin"],
 
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <head/>
      <body  className=  "flex flex-col sm:flex-row">
        <Sidebar data={personalData}/>
        <main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto'>{children}</main>
      </body>
    </html>
  );
}
