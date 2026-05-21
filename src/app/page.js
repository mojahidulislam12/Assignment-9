import Banner from "@/components/Banner";
import ActionSection from "@/components/HomePage/ActionSection";
import CarCard from "@/components/HomePage/CarCard";
import FetuaredSection from "@/components/HomePage/FetuaredSection";
import Testimonial from "@/components/HomePage/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FetuaredSection></FetuaredSection>
      <ActionSection></ActionSection>
      <Testimonial></Testimonial>
    </div>
  );
}
