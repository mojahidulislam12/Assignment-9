import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ActionSection from "@/components/HomePage/ActionSection";
import CarCard from "@/components/HomePage/CarCard";
import FetuaredSection from "@/components/HomePage/FetuaredSection";
import NewsLetter from "@/components/HomePage/NewsLetter";
import Testimonial from "@/components/HomePage/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <FetuaredSection></FetuaredSection>

      <ActionSection></ActionSection>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
}
