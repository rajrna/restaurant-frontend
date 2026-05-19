"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import MomoLanding from "@/public/momo-landing.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CAROUSEL_ITEMS = [
  {
    id: "momo",
    title: "MO:MO",
    subtitle: "Homemade and Delicious",
    description:
      "HK's classic Asian dish comes in a variety of premium flavors. Crafted with high-quality ingredients and authentic traditional methods, our items have gained rapid popularity.",
    image: MomoLanding, // Replace with your static imports or paths
  },
  {
    id: "noodles",
    title: "NOODLES",
    subtitle: "Our Best Recipe",
    description:
      "Ramu is a Japanese company founded in 1999, specializing in instant noodles and home sushi-making kits. Made with high-quality ingredients and authentic recipes.",
    image: MomoLanding,
  },
  {
    id: "sushi",
    title: "SUSHI",
    subtitle: "Fresh & Hand-Rolled",
    description:
      "Sourced daily and prepared by master chefs. Experience the perfect balance of seasoned vinegar rice and pristine seafood cuts made fresh to order.",
    image: MomoLanding,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-deep-crimson-600 text-coffee-bean-950 antialiased">
      <nav className="grid grid-cols-3 items-center px-6 md:px-16 py-6 border-b border-coffee-bean-100">
        <h1 className="font-heading font-black text-2xl tracking-tighter">
          HK&apos;s Fastfood
        </h1>
        <div className="hidden md:flex items-center justify-center space-x-8 text-xs font-bold tracking-widest uppercase">
          <Link
            href="/ramu"
            className="hover:opacity-70 transition"
          >
            Momo
          </Link>
          <Link
            href="/noodles"
            className="hover:opacity-70 transition"
          >
            Flavors
          </Link>
          <Link
            href="/recipes"
            className="hover:opacity-70 transition"
          >
            Recipes
          </Link>
          <Link
            href="/stories"
            className="hover:opacity-70 transition"
          >
            Stories
          </Link>
        </div>
        <div className="flex justify-end">
          <Button className="bg-coffee-bean-950 text-champagne-mist-50 hover:bg-coffee-bean-900 px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
            <Link href="/dashboard">
              Ready To Order
            </Link>
          </Button>
        </div>
      </nav>
      {/* BODY */}
      <Carousel className="w-full">
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item) => (
            <CarouselItem
              key={item.id}
              className="pt-12 md:pt-20 flex flex-col items-center text-center"
            >
              {/* Giant Headline */}
              <h1 className="font-heading font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter uppercase select-none">
                {item.title}
              </h1>

              {/* Subtitle */}
              <h2 className="font-heading font-extrabold text-xl md:text-3xl tracking-[0.2em] uppercase mt-2 md:mt-4">
                {item.subtitle}
              </h2>

              {/* Description Block */}
              <p className="text-[10px] md:text-xs font-bold tracking-wider leading-relaxed max-w-xl md:max-w-2xl uppercase mt-8 px-6 text-coffee-bean-700 min-h-[60px]">
                {item.description}
              </p>

              {/* Edge-to-Edge Image */}
              <div className="w-full mt-12 md:mt-16 border-t border-coffee-bean-950 overflow-hidden relative h-[40vh] md:h-[55vh]">
                <Image
                  src={item.image}
                  fill // Uses absolute positioning to fill the container nicely during transitions
                  priority={item.id === "momo"} // Prioritize loading the first item image
                  alt={`Photo of ${item.title}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
