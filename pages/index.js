import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  [
    '/images/image01.jpg',
    '/images/image02.jpg',
    '/images/image03.jpg',
    '/images/image04.jpg',
    '/images/image05.jpg',
  ],
  [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
  ],
];

export default function Home() {
  const [{ activeColor, activeImage }, setactiveImage] = useState({
    activeColor: 0,
    activeImage: 0,
  });
  return (
    <div className='bg-white min-h-full min-w-full flex flex-col'>
      <Head>
        <title>Design Your Model 3 | Tesla</title>
      </Head>
      {/* header */}
      <div className='h-3 pl-2  pr-6 pt-6 w-full flex justify-items-center justify-between'>
        <div className='h-full w-2/4'>
          <svg
            viewBox='0 0 342 35'
            xmlns='http://www.w3.org/2000/svg'
            aria-level='2'
          >
            <path d='M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z'></path>
          </svg>
        </div>
        {/* Langage section */}
        <div className='flex justify-items-center text-gray-400'>
          {/* logo */}
          <div className='h-full w-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              />
            </svg>
          </div>
          {/* Country Image */}
          <div>
            <h6 className='font-bold pl-1'>CD</h6>
          </div>
        </div>
      </div>
      {/* body */}
      <div className='p-2 mt-8'>
        {/* hero image */}
        <div style={{ height: '150px', position: 'relative', width: '100%' }}>
          <Image
            src={images[activeColor][activeImage]}
            alt='Picture of presentation'
            layout='fill'
            objectFit='none'
            quality={100}
          />
        </div>
        {/* Text Presentation */}
        <div className='mt-6 w-full flex flex-col'>
          {/* car name and puchase */}
          <div className='flex flex-col w-full justify-center items-center justify-items-center'>
            <div className='flex flex-col w-full justify-center items-center justify-items-center'>
              <h1 className='tracking-tight font-medium text-3xl'>Model 3</h1>
              <h3 className='pt-2 text-gray-500  text-base'>
                Estimated Delivery: 4-11 weeks
              </h3>
            </div>
            <div className='bg-gray-200 bg-opacity-60 py-1.5 pl-2 rounded-full h-12 mt-4 flex justify-between justify-items-center  w-11/12 '>
              <div className='h-full flex justify-center items-center w-1/2 bg-white rounded-full shadow-md'>
                <h6 className='text-gray-500 tracking-wider text-xs font-semibold'>
                  Purchase Price
                </h6>
              </div>
              <div className='h-full flex justify-center items-center w-1/2 '>
                <h6 className='text-gray-500 tracking-widest text-xs font-semibold'>
                  Potential savings*
                </h6>
              </div>
            </div>
          </div>
          {/* kilometers */}
          <div className='flex w-full mt-6 px-8'></div>
        </div>
      </div>
    </div>
  );
}
