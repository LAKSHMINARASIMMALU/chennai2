import type {Metadata} from 'next';
import './globals.css';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'PrismShear | Futuristic Luxury Hair Salon',
  description: 'Redefine your style at PrismShear, a premium tech-driven modern hair salon.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
