import Banner from "@/components/Banner/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-8">
      {/* banner section */}
      <Banner></Banner>

      {/* contents */}
      <section>
        <h1>Hello</h1>
      </section>
    </section>
  );
}
