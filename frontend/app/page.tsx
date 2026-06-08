import { Hero } from "@/components/site/Hero";
import { HomeProof } from "@/components/site/HomeProof";
import { ValueProps } from "@/components/site/ValueProps";
import { CTA } from "@/components/site/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProof />
      <ValueProps />
      <CTA />
    </>
  );
}
