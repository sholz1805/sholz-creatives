import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Sholz Creatives | Event Branding, Frontend Design & Creative Production",
  description: "Event branding, brand identity, frontend design, social media creative, logo systems, and print production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-canvas text-brand-ink antialiased">
        <Navbar />
        <main className="pt-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}