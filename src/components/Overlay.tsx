"use client";

import { useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  // Parallax Y movement (optional polish)
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  // Specific animation for your role
  const roleX = useTransform(scrollYProgress, [0, 0.15], [0, 150]);

  // Dynamic Greeting Logic
  const [greeting, setGreeting] = useState("Hello 👋");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ☀️ I am");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️ I am");
    else setGreeting("Good Evening 🌙 I am");
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center text-white mix-blend-difference">
        {/* Section 1 - Hero */}
        <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 gap-12"
        >
            <div className="text-center flex flex-col items-center gap-2 relative z-10 w-full">
                <motion.p
                   // @ts-ignore
                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-2xl md:text-3xl text-purple-400 font-semibold mb-2 drop-shadow-md"
                >
                  {greeting}
                </motion.p>
                <motion.h1 
                  // @ts-ignore
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                >
                  {/* EDIT HERE: Your Name */}
                  Prathmesh.
                </motion.h1>
                <motion.p 
                   // @ts-ignore
                   style={{ x: roleX }}
                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
                   className="text-2xl md:text-4xl font-semibold text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] tracking-wide"
                >
                  {/* EDIT HERE: Your Role */}
                  AI Engineer & Developer.
                </motion.p>
            </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
        >
            <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Building scalable <br/><span className="text-blue-500">AI architectures</span> & web experiences.</h2>
            </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
        >
            <div className="max-w-2xl ml-auto">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">Expertise in Python, <br/><span className="text-purple-500">React & Next.js</span>.</h2>
            </div>
        </motion.div>
    </div>
  );
}
