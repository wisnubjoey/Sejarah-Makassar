"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar"; 
import { LayoutGrid } from "../components/ui/layout-grid";
import Footer from "../components/Footer";


export default function Page() {
  return (
    <>
        <Navbar />

    <div>
        <h1 className="relative flex items-center justify-center py-20 text-2xl font-semibold"> Berikut adalah 4 Peninggalan dari Kerajaan Makassar :</h1>
      </div>
        <div className="h-screen pb-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
    <Footer />
    </>
  );
}

const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Masjid <span className="text-amber-500">Katangka</span></p>
        <p className="font-normal text-base text-white">Masjid Katangka berada di Jl. Syech Yusuf No.57, Katangka, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan.</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-amber-500 transition duration-200 hover:translate-x-1">
        <a href="https://maps.app.goo.gl/LjchwM1E4nkS63hj8">Google Maps</a>
        </p>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Istana <span className="text-amber-500">Balla Lompoa</span></p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Museum/Istana Balla Lampoa berada di Jl. K. H. Wahid Hasyim No.39, Sungguminasa, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan.
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-amber-500 transition duration-200 hover:translate-x-1">
        <a href="https://maps.app.goo.gl/b83SygY8ybJXtn1Q7">Google Maps</a>
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Istana <span className="text-amber-500">Tamalate</span></p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Istana Tamalate berada di Sungguminasa, Somba Opu, Kabupaten Gowa, Sulawesi Selatan.
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-amber-500 transition duration-200 hover:translate-x-1">
        <a href="https://maps.app.goo.gl/3U744etvVkPwcG7x9">Google Maps</a>
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Benteng <span className="text-amber-500">Rotterdam</span></p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Benteng ini berada di Jl. Ujung Pandang, Bulo Gading, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan.
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 hover:text-amber-500 transition duration-200 hover:translate-x-1">
        <a href="https://maps.app.goo.gl/STV4Py38M9vSoDQq9">Google Maps</a>
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
        "/GowaTalo.jpeg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/Istana-Temalate.jpeg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "/Benteng-Rotterdam.jpeg",
    },
  ];
  