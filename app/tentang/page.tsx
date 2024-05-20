"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/ui/aurora-background";
import { motion } from "framer-motion";
import { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Footer from "../components/Footer";

const loadingStates = [
  {
    text: "Lionel Cristian Timothy | 23 | Pencari Materi",
  },
  {
    text: "Zerlinda Rajni Danica Chozin | 39 | Pencari Materi",
  },
  {
    text: "Ni putu Desy Arthasari | 31 | Pencari Materi",
  },
  {
    text: "I Kadek Deva setiawan putra | 7 | Pencari Materi",
  },
  {
    text: "I Made Wisnu Sabda Hutama | 15 | Pembuat Web",
  },
];


export default function Page() {
  return (
    <>
      <Navbar />
      <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Project <span className="text-amber-500">Kerajaan Makassar</span>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Kami dari kelompok <span className="text-amber-500">7</span> membuat project Sejarah Kerajaan Makassar.
        </div>
        <MultiStepLoaderDemo />
      </motion.div>
    </AuroraBackground>
    <Footer />
    </>
  );
}

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <button
        onClick={() => setLoading(true)}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-black bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition duration-300 ease-out hover:scale-110 hover:border-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Profil Anggota
      </button>
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </>
  );
}
