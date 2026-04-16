import Hero from "../components/Home/Home";
import PropertyCarousel from "../components/PropertyCarousel/PropertyCarousel";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <PropertyCarousel />
    </div>
  );
}
