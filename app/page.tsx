import CaseStudy from "@/components/CaseStudy";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import SubHeading from "@/components/SubHeading";

export default function Home() {
  return (
    <main className="container p-10">
      <Hero />
      <div className="mt-28 flex flex-col justify-center items-center gap-20">
        <Heading className=" bg-pinkBrand text-white py-2 px-5 rounded-lg text-center">
          Unlock Special Bonuse worth ₹20,000
        </Heading>
        <CaseStudy
          imgURL="https://utfs.io/f/ee7fbc2f-822c-4ab7-becc-2e8e5c3fa972-abxak.png"
          headline="
          Make your post go VIRAL and reach millions of people"
          subHeadline="Elevate Your Instagram Game: Masterclass Edition"
        />
        <CaseStudy
          imgURL="https://utfs.io/f/1052e015-9fd0-40c0-82a0-f73031c69ee6-dcrk40.png"
          headline="500+ AI Tools To Create Content"
          subHeadline="From Setup to Success"
          rowDirection="flex-row-reverse"
        />
        <CaseStudy
          imgURL="https://utfs.io/f/df38eff4-08d4-442f-b406-4af755f5bacd-1zkx5m.webp"
          headline="You will get free video editing course"
          subHeadline="Learn From the Best to Become the Bests"
        />
      </div>
    </main>
  );
}
