"use client";

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-20">
          
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-amber-500 ring-1 ring-inset ring-indigo-600/10">
               K7
              </span>
              <motion.span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.9, delay: 2.0, ease: "easeOut"}}>
                <span>Versi v1.0</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </motion.span>
            </a>
          </div>
          <motion.h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.0, delay: 1.0, ease: "easeOut"}}>
            Kerajaan Makassar
          </motion.h1>
          <motion.p className="mt-6 text-lg leading-8 text-gray-600" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.0, delay: 1.0, ease: "easeOut"}}>
          Sejarah <span className='font-bold text-amber-500'>Kerajaan Makassar</span> Pada Abad ke 16 Masehi.
          </motion.p>
          <motion.div className="mt-10 flex items-center gap-x-6" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5, delay: 1.0, ease: "easeOut"}}>
            <a
              href="#Penjelasan"
              className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-out duration-300 hover:-translate-y-1 hover:scale-110"
            >
              Mulai Membaca →
            </a>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://i0.wp.com/fahum.umsu.ac.id/wp-content/uploads/2024/03/Kerajaan-Gowa-Tallo-SejarahRajadan-Masa-Kejayaannya.jpg?fit=1366%2C768&ssl=1"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
