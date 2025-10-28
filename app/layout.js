
import './globals.css';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
// Removed TypeScript-specific import and type annotation
export const metadata = {
  title: 'Educational Platform',
  description: 'A platform for education and learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar/>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}