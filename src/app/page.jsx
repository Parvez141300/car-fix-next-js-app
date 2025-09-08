import Banner from "@/app/components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import ServiceArea from "./components/ServiceArea/ServiceArea";


export default function Home() {
  return (
    <section className="space-y-24">
      {/* banner section */}
      <Banner></Banner>

      {/* main section */}
      <section className="w-11/12 max-w-7xl mx-auto space-y-24">
        {/* about us section */}
        <AboutUs></AboutUs>

        {/* Our Service Area section */}
        <ServiceArea></ServiceArea>
      </section>
    </section>
  );
}
