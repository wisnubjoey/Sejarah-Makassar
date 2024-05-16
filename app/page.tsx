"use client";

import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Penjelasan from "./components/Penjelasan";
import Footer from "./components/Footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <Navbar/>
    <Header/>
    <Penjelasan/>
    <Footer/>
    </>
  );
}
