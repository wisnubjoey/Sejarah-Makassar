"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/spotlight";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
    <Navbar />
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      <p className="text-neutral-200 text-xl font-mono hover:text-amber-500 transition duration-200 hover:translate-y-1 hover:scale-95">
        <a href="https://kumparan.com/berita-terkini/sejarah-singkat-kerajaan-gowa-tallo-yang-terletak-di-sulawesi-selatan-1z9o9u6QVRc">https://kumparan.com/berita-terkini/sejarah-singkat-kerajaan-gowa-tallo-yang-terletak-di-sulawesi-selatan-1z9o9u6QVRc</a>
        </p>
        <br />
        <p className="text-neutral-200 text-xl font-mono hover:text-amber-500 transition duration-200 hover:translate-y-1 hover:scale-95">
        <a href="https://www.cnnindonesia.com/edukasi/20210616161046-574-655213/sejarah-kerajaan-makassar-dan-peninggalannya">https://www.cnnindonesia.com/edukasi/20210616161046-574-655213/sejarah-kerajaan-makassar-dan-peninggalannya</a>
        </p>
      </motion.h1>
    </LampContainer>

    <Footer />
      </>
  );
}
