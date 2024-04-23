import CaseStudy from "@/components/CaseStudy";
import Desire from "@/components/Desire";
import Growth from "@/components/Growth";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Accordian from "@/components/Accordian";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto ">
      <Hero />
      <div className="mt-40 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-4 justify-center items-center  px-5">
          <Heading className="bg-pinkBrand text-white py-2 px-5 rounded-lg text-center">
            Unlock Special Bonuses worth ₹20,000
          </Heading>
          <p className="text-center font-medium text-sm break-words">
            🔴Don’t waste time designing posts and writing long captions to Grow
            on instagram.
          </p>
        </div>
        <CaseStudy
          imgURL="https://utfs.io/f/ee7fbc2f-822c-4ab7-becc-2e8e5c3fa972-abxak.png"
          headline="
          Make your post go VIRAL and reach millions of people"
          subHeadline="Full Case Study: Masterclass Edition"
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
      <Desire />
      <Growth />
      <Accordian />
      <CTA />
    </main>
  );
}
