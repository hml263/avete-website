import Image from "next/image";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Product from "@/components/product";
import Blog from "@/components/blog";
import Company from "@/components/company";
import Contact from "@/components/contact";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('IndexPage');
  
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
