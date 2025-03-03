import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEKOZUMA",
  description: "However at every junction in time, there is always a darkness that is waiting to overthrow ",
  openGraph: {
    title: "NEKOZUMA",
    description: "However at every junction in time, there is always a darkness that is waiting to overthrow ",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
