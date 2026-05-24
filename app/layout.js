import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Remote Team Workspace",
  description: "A collaborative workspace for remote teams to manage projects, communicate, and share files.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
