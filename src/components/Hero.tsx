"use client";

import Overlay from "@/components/Overlay";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const container = useRef(null);
  
  // Track scroll over a much longer section to allow for multiple image transitions
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // --- IMAGE 1 (mypic.jpg) ---
  // Visible initially, flips away at 40% depth.
  const rotateY1 = useTransform(scrollYProgress, [0, 0.4], [0, 90]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0.6, 0]);

  // --- IMAGE 2 (mypic3.jpg) ---
  // Flips in at 40%, stays until the end of the scroll.
  const rotateY2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [-90, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 0.6, 0.6]);

  return (
    // Reduced height slightly since there are only two images now
    <div ref={container} className="relative h-[250vh]" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black" style={{ perspective: "1000px" }}>
         
         {/* --- Image 1 Layer --- */}
         <motion.div 
            style={{ rotateY: rotateY1, opacity: opacity1, transformStyle: "preserve-3d", transformOrigin: "center" }} 
            className="absolute inset-0 w-full h-full pointer-events-none"
         >
             <Image 
                src="/mypic.jpg" 
                alt="Prathmesh Background 1" 
                fill 
                quality={100}
                className="object-cover block"
                priority 
             />
         </motion.div>

         {/* --- Image 2 Layer (was mypic3.jpg) --- */}
         <motion.div 
            style={{ rotateY: rotateY2, opacity: opacity2, transformStyle: "preserve-3d", transformOrigin: "center" }} 
            className="absolute inset-0 w-full h-full pointer-events-none"
         >
             <Image 
                src="/mypic3.jpg" 
                alt="Prathmesh Background 2" 
                fill 
                quality={100}
                className="object-cover block"
             />
         </motion.div>

         {/* The animated overlay text */}
         <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
