import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import heroImage from "/public/hero-img.webp"
import Image from "next/image"


const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
      {/* {Left div - content} */}
      <div className='flex-1'>
      <Badge className='py-2 px-5 rounded-lg bg-blue-200 text-blue-600 hover:bg-blue-300'> 30% Off</Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        FitGear ThousandMiles
      </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        <b>FitGear </b> - Making The Finest Active Wear.
        <br/>
        Travel Light, Travel Right with <b>Thousand Miles</b>.
        <br/> Created for the wanderlusts of the world.  Thousand Miles seeks to make travels smoother through clever features. Every piece created is specifically made so you can bring less and experience more.  
        <br/>
        Say Goodbye To Your Luggage Anxieties With These Clever, Highly-Packable Clothes.
        </p>
        <Button className="bg-black h-12 px-10 mt-4"> Start Shopping</Button>
      </div>
      {/* {Righ div - image} */}
      <div className='flex-1'>
        <Image src={heroImage} alt='hero'/>
      </div>
    </section>
  );
};
export default Hero;



