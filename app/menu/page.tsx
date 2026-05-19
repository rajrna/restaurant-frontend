import { Button } from "@/components/ui/button";
import Link from "next/link";
import MomoLanding from "@/public/momo-landing.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-deep-crimson-600 text-coffee-bean-950 antialiased">
      <nav className="grid grid-cols-3 items-center px-6 md:px-16 py-6 border-b border-coffee-bean-100">
        <Link href="/">
          <h1 className="font-heading font-black text-2xl tracking-tighter">
            HK&apos;s Fastfood
          </h1>
        </Link>
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
      <div className="relative w-full h-100 overflow-hidden ">
        <Image
          src={MomoLanding}
          alt="Scenic background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-white text-4xl font-bold md:text-5xl drop-shadow-lg">
            Adventure Awaits
          </h1>
          <p className="text-gray-200 text-lg mt-2 max-w-md drop-shadow-md">
            Discover beautiful places and unique
            experiences around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
