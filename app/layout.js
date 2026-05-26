import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/app-shell";
import { ToastProvider } from "@/components/ui/toast-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Remote Team Workspace",
  description: "A modern remote team management frontend built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  const themeScript = `
    (function () {
      try {
        var savedTheme = localStorage.getItem("rtw-theme");
        var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = savedTheme || (systemPrefersDark ? "dark" : "light");
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <ToastProvider>
          <AppShell>{children}</AppShell>
        </ToastProvider>
      </body>
    </html>
  );
}
