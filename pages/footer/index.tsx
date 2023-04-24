import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const socialNetworks = ["Tiktok", "Facebook", "Pinterest", "Instagram"];

export default function Footer() {
  return (
    <>
      <div className="h-32 w-5/6 m-auto border-t border-black">
        <div className="text-black font-light">
          <p className="text-center uppercase w-full mt-8 text-sm">
            Contact us through
          </p>
          <div className="flex m-auto justify-center text-xs mt-4">
            {socialNetworks.map((network) => (
              <div key={network} className="uppercase mx-3">
                {network}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
