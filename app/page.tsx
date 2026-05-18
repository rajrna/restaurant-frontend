import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import MomoLanding from "@/public/momo-landing.jpg";
export default function Home() {
  return (
    <div className="min-h-screen bg-deep-crimson-600">
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="text-champagne-mist-200 font-heading font-bold text-3xl">
          HK&apos;s Fastfood
        </h1>
        <div>
          <Button className="bg-champagne-mist-300 hover:bg-champagne-mist-400  px-4 md:px-8 py-2 md:py-4 font-semibold rounded-3xl">
            <Link href={"/dashboard"}>
              <span className="text-base text-champagne-mist-50 md:text-lg font-heading">
                Ready To Order
              </span>
            </Link>
          </Button>
        </div>
      </nav>
      {/* BODY */}
      <div className="flex flex-col items-center text-center px-6 md:px-16 space-y-4 pb-16">
        <h1 className="text-coffee-bean-900 font-semibold text-4xl md:text-base tracking-wide">
          MO:MO
        </h1>

        <h1 className="text-coffee-bean-800 text-3xl sm:text-4xl md:text-5xl font-semibold max-w-2xl">
          Homemade and Delicious
        </h1>

        <p className="text-coffee-bean-500 text-base md:text-xl max-w-xl md:max-w-2xl">
          This classic asian dish comes in variety
          of flavors.
        </p>

        <div className="w-full max-w-4xl rounded-xl shadow-sm overflow-hidden mt-4">
          <Image
            src={MomoLanding}
            placeholder="blur"
            quality={80}
            width={800}
            alt="Photo of momo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
