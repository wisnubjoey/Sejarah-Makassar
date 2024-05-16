"use client";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Penjelasan() {
  return (
    <>
    <div id='Penjelasan' className="overflow-hidden bg-gray-100/70 py-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-amber-500"  id='IniScroll'>Kerajaan Makassar</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Abad 16 Masehi</p>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Kerajaan Makassar berdiri pada abad ke-16 di Sulawesi Selatan. Awalnya, Kerajaan Makassar terdiri atas dua kerajaan yang berbeda, yakni Kerajaan Gowa dan Kerajaan Tallo. 
              </p>
              <p className='mt-6 text-xl leading-8 text-gray-600'>Dua kerajaan bersaudara ini berseteru selama bertahun-tahun, namun perselisihan itu perlahan membaik berkat masuknya agama Islam ke tanah Sulawesi. </p>
              <p className='mt-6 text-xl leading-8 text-gray-600'>Kerajaan Makassar adalah kerajaan yang bercorak Islam sehingga disebut pula dengan Kesultanan Makassar dan  didirikan oleh Raja Daeng Manrabbi yang bergelar Sultan Alauddin.</p>
            </div>
          </div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.0, delay: 1.0, ease: "easeOut"}}>
            <Image
              src="/GowaTalo.jpeg"
              alt="Gowa Talo"
              className="w-[48rem] max-w-3xl rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem] scale-90"
              width={200}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden bg-gray-100/70 py-24 sm:py-20 drop-shadow-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-amber-500">Kerajaan Makassar</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berkembangnya Kerajaan Makassar</p>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Kerajaan Makassar berkembang pesat pada abad ke-17 di Sulawesi Selatan, menjadi salah satu kekuatan maritim utama di kawasan Nusantara. Memiliki armada laut yang kuat dan menjalin hubungan dagang yang luas.
              </p>
              <p className='mt-6 text-xl leading-8 text-gray-600'>Kunci dalam perkembangan mereka adalah keahlian dalam pelayaran dan perdagangan laut. Sistem administrasi yang efisien dan kebijakan ekonomi yang cerdas, seperti monopoli perdagangan.</p>
            </div>
          </div>
          <motion.div className="flex items-start justify-end lg:order-first " initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.0, delay: 1.0, ease: "easeOut"}}>
            <img
              src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/06/17/collectie_tropenmuseum_de_wonij-20220617070950.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-3xl rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>


    <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="https://assets.ohbegitu.com/crop/740x416/data/photo/2023/10/04/651cdc8a490fc.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-28 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Runtuhnya </span>
                  <span className="block sm:inline">Kerajaan Makassar</span>
                </h2>
                <p className="mt-3 text-xl text-slate-200">
                Konflik antara Belanda dan Makassar semakin meningkat, terutama terkait perdagangan rempah-rempah. Pada tahun 1667, Belanda melancarkan serangan besar-besaran yang menghancurkan kekuatan militer Makassar. Kejatuhan ini menjadi pukulan berat bagi kekuatan politik dan ekonomi Makassar. Belanda berhasil memperluas kekuasaannya di Sulawesi Selatan dan mengkonsolidasikan kontrol mereka atas perdagangan rempah-rempah di wilayah tersebut.
                </p>
                <Link
                  href="/peninggalan"
                  className="mt-8 block w-full rounded-md border border-transparent bg-amber-500 px-6 py-3 text-base font-bold text-white hover:bg-amber-600 sm:w-auto transition duration-300 hover:scale-110 ease-out"
                >
                  Peninggalan → 
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
