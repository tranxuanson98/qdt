import 'swiper/css';
import 'swiper/css/pagination';
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import CommingSoon from './components/CommingSoon';



export default function Home() {
  return (
    <div className="flex flex-col items-end">
      <div className="w-full bg-white">
        <HeroSection />
        <CommingSoon />
        <Footer />
      </div>
    </div>
  );
}
