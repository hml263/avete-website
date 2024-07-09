import Image from "next/image";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Product from "@/components/product";
import Blog from "@/components/blog";
import Company from "@/components/company";
import Contact from "@/components/contact";

export default function Home() {
  return (
   <main>
    <Hero />
    <Mission />
    <Product />
    <Blog />
    <Company />
    <Contact />
   </main>
  );
}
