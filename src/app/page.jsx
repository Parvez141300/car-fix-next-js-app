import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import person from "../../public/assets/images/about_us/person.jpg";
import parts from "../../public/assets/images/about_us/parts.jpg";

export default function Home() {
  return (
    <section className="space-y-8">
      {/* banner section */}
      <Banner></Banner>

      {/* about us section */}
      <section className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <Image src={person} className="rounded-lg w-5/6"></Image>
          <div className="flex justify-end">
            <Image
              src={parts}
              className="w-1/2 -mt-24 lg:-mt-40 mr-10 rounded-lg border-8 border-accent z-10"
            ></Image>
          </div>
        </div>
        {/* about us content */}
        <div className="flex flex-col gap-5 justify-center">
          <h4 className="text-primary">About Us</h4>
          <h2 className="text-2xl lg:text-3xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div>
            <button className="btn btn-primary rounded-md">
              Get More Info
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
