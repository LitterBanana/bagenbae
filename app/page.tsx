import Image from "next/image";
import Navbar from "./layouts/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="w-full max-w-[800px] mx-auto  herosection">
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
          <img 
            src="/herosection-1.png" 
            alt="Hero Section" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img 
            src="/herosection-1.png" 
            alt="Hero Section" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <img 
            src="/herosection-1.png" 
            alt="Hero Section" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
