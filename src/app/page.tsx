import 'swiper/css';
import 'swiper/css/pagination';
// import { HeroSection } from "./components/HeroSection";
import CommingSoon from './components/CommingSoon';
import { FooterV2 } from './components/FooterV2';



export default function Home() {
  return (
    <div className="flex flex-col items-end">
      <div className="w-full bg-white">
        {/* <HeroSection /> */}
        <CommingSoon />
        <FooterV2 />
      </div>
    </div>
  );
}
