
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
