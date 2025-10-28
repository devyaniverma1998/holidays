import Navbar from '../components/Navbar/page';  // Path from app/ to components/
import Hero from '@/components/Hero/page';
import Footer from '../components/Footer/page';
import ImageCarousel from '@/components/ImageCarousel/page';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
    
      <Hero />
      <ImageCarousel/>

    
    
    </div>
  );
}