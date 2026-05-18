import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import MomoLanding from "@/public/momo-landing.jpg";
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
      <div className="flex flex-col items-center text-center pt-12 md:pt-20">
        <h1 className="font-heading font-black text-[15vw] md:text-[12vw] leading-none tracking-tighter uppercase select-none">
          MO:MO
        </h1>

        <h2 className="font-heading font-extrabold text-xl md:text-3xl tracking-[0.2em] uppercase mt-2 md:mt-4">
          Homemade and Delicious
        </h2>

        <p className="text-[10px] md:text-xs font-bold tracking-wider leading-relaxed max-w-xl md:max-w-2xl uppercase mt-8 px-6 text-coffee-bean-700">
          HK&apos;s classic Asian dish comes in a
          variety of premium flavors. Crafted with
          high-quality ingredients and authentic
          traditional methods, our items have
          gained rapid popularity across local
          neighborhoods.
        </p>

        <div className="w-full mt-12 md:mt-16 border-t border-coffee-bean-950 overflow-hidden">
          <Image
            src={MomoLanding}
            placeholder="blur"
            quality={90}
            alt="Photo of delicious momo"
            className="w-full h-[40vh] md:h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
