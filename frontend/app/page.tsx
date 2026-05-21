import { Hero } from "@/components/site/Hero";
import { HomeProof } from "@/components/site/HomeProof";
import { ValueProps } from "@/components/site/ValueProps";
import { CTA } from "@/components/site/CTA";
import { Newsletter } from "@/components/site/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProof />
      <ValueProps />
      <CTA />
      <Newsletter />
    </>
  );
}
