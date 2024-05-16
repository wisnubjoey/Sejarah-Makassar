"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar"; 
import { LayoutGrid } from "../components/ui/layout-grid";


export default function Page() {
  return (
    <>
        <Navbar />
        <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
    </>
  );
}

const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Masjid <span className="text-amber-500">Katangka</span></p>
        <p className="font-normal text-base text-white">Masjid Katangka ini berada di Jl. Syech Yusuf No.57, Katangka, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan.</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-amber-500 transition duration-200 hover:translate-x-1">
        <a href="https://maps.app.goo.gl/LjchwM1E4nkS63hj8">Google Maps</a>
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">House above the clouds</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Greens all over</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Rivers are serene</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
   
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "/MasjidKatangka.jpeg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "/GowaTalo.jpeg",
    },
  ];
  