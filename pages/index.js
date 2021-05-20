import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const images = [
  [
    '/images/image01.jpg',
    '/images/image02.jpg',
    '/images/image03.jpg',
    '/images/image04.jpg',
    '/images/image05.jpg',
    '/images/image06.jpg',
  ],
  [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
  ],
];

export default function Home() {
  const [state, setactiveImage] = useState({
    activeColor: 0,
    activeImage: 0,
    activeWheel: 0,
  });
  const { activeColor, activeImage, activeWheel } = state;
  return (
    <div className='bg-white min-h-full min-w-full flex flex-col '>
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
      <div className=' mt-8'>
        {/* hero image */}
        <div className='relative   h-60 w-full '>
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
          <div className='grid mb-10 grid-cols-3 gap-6 h-4 w-full mt-10 px-8'>
            <div className='grid grid-rows-2 gap-1'>
              <div className='flex justify-items-center items-center justify-center'>
                <h2 className='font-semibold text-3xl'>423</h2>
                <h6 className='font-medium'>km</h6>
              </div>
              <div className='flex justify-center '>
                <h6 className='text-sm text-gray-400 font-thin'>
                  Range (est. )
                </h6>
              </div>
            </div>
            <div className='grid grid-rows-2 gap-1'>
              <div className='flex justify-items-center items-center justify-center'>
                <h2 className='font-semibold text-3xl'>225</h2>
                <h6 className='font-medium'>km/h</h6>
              </div>
              <div className='flex justify-center '>
                <h6 className='text-sm text-gray-400 font-thin'>Top Speed</h6>
              </div>
            </div>
            <div className='grid grid-rows-2 gap-1'>
              <div className='flex justify-items-center items-center justify-center'>
                <h2 className='font-semibold text-3xl'>5.6</h2>
                <h6 className='font-medium'>s</h6>
              </div>
              <div className='flex justify-center '>
                <h6 className='text-sm text-gray-400 font-thin'>0-100 km/h</h6>
              </div>
            </div>
          </div>
          {/* prices */}

          <div className='flex mt-14 pl-4 pr-2 w-full flex-col'>
            <div className='flex flex-col'>
              <h3 className='text-gray-400 font-medium'>Rear-Wheel Drive</h3>
              <div className='flex font-semibold text-sm opacity-90 align-center  justify-between py-4 px-6 mt-4 ring ring-blue-500 rounded-full'>
                <h6>Standard Range Plus</h6>
                <h6>$52,990</h6>
              </div>
              <div className='mt-4 w-full text-sm text-gray-400 font-medium flex'>
                <a href='/' className='underline'>
                  Learn more
                </a>
                <h3 className='pl-1'>about Range and Perfomance</h3>
              </div>
              <div className='mt-4 flex'>
                <input type='checkbox' className='p-3 rounded-md' />
                <h3 className='pl-3 text-gray-500 font-medium'>
                  Limit to 151 km range (est.)
                </h3>
              </div>
              <h3 className='text-gray-500 font-medium mt-6'>
                Dual Motor All-Wheel Drive
              </h3>
              <div className='flex font-semibold text-sm text-gray-500 align-center  justify-between py-4 px-6 mt-4 border border-gray-400 rounded-full'>
                <h6>Long Range</h6>
                <h6>$64,990</h6>
              </div>
              <div className='flex font-semibold text-sm text-gray-500 align-center  justify-between py-4 px-6 mt-4 border border-gray-400 rounded-full'>
                <h6>Performance</h6>
                <h6>$74,990</h6>
              </div>
              <div className='flex flex-col w-full text-sm items-center justify-center'>
                <h3 className='mt-4 text-xs text-center text-gray-400'>
                  All prices are shown without potential incentives or savings
                  of $11,700
                </h3>
                <a href='/' className='underline text-gray-500'>
                  Learn More
                </a>
                <div className='rounded-full text-gray-600 tracking-widest p-2 bg-gray-100 mt-4 font-semibold'>
                  <h3>FEATURE DETAILS</h3>
                </div>
              </div>
            </div>
          </div>
          {/* paint */}
          <div className='mt-8 flex flex-col w-full justify-items-center items-center'>
            <div className='relative   h-60 w-full '>
              <Image
                src={images[activeColor][activeImage]}
                alt='Picture of presentation'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <h3 className='text-2xl font-semibold'>Paint</h3>
            <div className='mt-8 flex w-full justify-center items-center'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setactiveImage({ ...state, activeColor: 0, activeImage: 0 });
                }}
                className={classNames(
                  'outline-none ml-6 focus:outline-none rounded-full p-1',
                  {
                    'ring-4 ring-blue-600': activeColor === 0,
                  },
                )}
              >
                <div className='rounded-full relative  h-16 w-16'>
                  <Image
                    src='/images/Paint_White.png'
                    alt='Picture of presentation'
                    layout='fill'
                    objectFit='none'
                    quality={100}
                  />
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setactiveImage({ ...state, activeColor: 1, activeImage: 0 });
                }}
                className={classNames(
                  'outline-none ml-6 focus:outline-none rounded-full p-1',
                  {
                    'ring-4 ring-blue-600': activeColor === 1,
                  },
                )}
              >
                <div className='rounded-full relative  h-16 w-16'>
                  <Image
                    src='/images/Paint_Red.png'
                    alt='Picture of presentation'
                    layout='fill'
                    objectFit='none'
                    quality={100}
                  />
                </div>
              </button>
            </div>
            <div className='mt-6 flex flex-col items-center justify-items-center w-full mb-8'>
              <h3 className='text-sm font-semibold tracking-wide'>
                {activeColor === 0
                  ? 'Pearl White Multi-Coat'
                  : 'Red Multi-Coat'}
              </h3>
              <h3 className='mt-2 text-sm text-gray-400 font-medium tracking-wide'>
                {activeColor === 0 ? 'Included' : '$2,600'}
              </h3>
            </div>
            <div className='relative   h-60 w-full '>
              <Image
                src={images[activeColor][activeWheel === 0 ? 3 : 5]}
                alt='Picture of presentation'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <h3 className='mt-6 text-2xl font-semibold'>Wheels</h3>
            <div className='mt-8 flex w-full justify-center items-center'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setactiveImage({ ...state, activeWheel: 0 });
                }}
                className={classNames(
                  'outline-none ml-6 focus:outline-none rounded-full p-1',
                  {
                    'ring-4 ring-blue-600': activeWheel === 0,
                  },
                )}
              >
                <div className='rounded-full relative  h-20 w-20'>
                  <Image
                    src='/images/type0.png'
                    alt='Picture of presentation'
                    layout='fill'
                    objectFit='none'
                    quality={100}
                  />
                </div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setactiveImage({ ...state, activeWheel: 1 });
                }}
                className={classNames(
                  'outline-none ml-6 focus:outline-none rounded-full ',
                  {
                    'ring-4 ring-blue-600': activeWheel === 1,
                  },
                )}
              >
                <div className='rounded-full relative   h-20 w-20'>
                  <Image
                    src='/images/type1.png'
                    alt='Picture of presentation'
                    layout='fill'
                    objectFit='none'
                    quality={100}
                  />
                </div>
              </button>
            </div>
            <div className='mt-6 flex flex-col items-center justify-items-center w-full mb-8'>
              <h3 className='text-sm font-semibold tracking-wide'>
                {activeColor === 0 ? '18" Aero Wheels' : '18" Sport Wheels'}
              </h3>
              <h3 className='mt-2 text-sm text-gray-400 font-medium tracking-wide'>
                {activeColor === 0 ? 'Included' : '$2,000'}
              </h3>
            </div>
            <div className='relative   h-60 w-full '>
              <Image
                src='/images/image5.jpg'
                alt='Picture of presentation'
                layout='fill'
                objectFit='none'
                quality={100}
              />
            </div>
            <div className='flex-col flex w-full justify-items-center items-center'>
              <h3 className='text-2xl font-semibold'>Interior</h3>
              <div className='mt-8 flex w-full justify-center items-center'>
                <button
                  className={classNames(
                    'ring-4 ring-blue-600 outline-none ml-6 focus:outline-none rounded-full p-1',
                  )}
                >
                  <div className='rounded-full relative  h-16 w-16'>
                    <Image
                      src='/images/Paint_White.png'
                      alt='Picture of presentation'
                      layout='fill'
                      objectFit='none'
                      quality={100}
                    />
                  </div>
                </button>
              </div>
              <div className='mt-8 flex flex-col items-center justify-items-center w-full mb-8'>
                <h3 className='text-sm font-semibold tracking-wide'>
                  All Black
                </h3>
                <h3 className='mt-2 text-sm text-gray-400 font-medium tracking-wide'>
                  Included
                </h3>
              </div>
            </div>
            <div className='rounded-full text-gray-600 tracking-widest p-2 bg-gray-100 mt-2 font-semibold'>
              <h3>FEATURE DETAILS</h3>
            </div>
          </div>
        </div>
        {/* summary */}
        <div className='mt-6 px-4  w-full'>
          <h6>Summon</h6>
          <div className='mt-6 '>
            <h6 className='font-semibold text-2xl tracking-wide'>
              Full Self-Driving Capability
            </h6>
            <h6 className='text-center mt-1'>$10,600</h6>
          </div>
          <ul className='px-6 lit-inside list-disc mt-4 text-gray-500 text-sm tracking-wide'>
            <li className='p-1'>Navigate on Autopilot</li>
            <li className='p-1'>Auto Lane Change</li>
            <li className='p-1'>Autopark</li>
            <li className='p-1'>Summon</li>
            <li className='p-1'>Full Sefk-Driving Computer</li>
            <li className='p-1'>Traffic Light and Stop Sign Control</li>
          </ul>
          <div className='mt-6'>
            <h5 className=' mb-4'>Comming later this year</h5>
            <ul className='px-6 lit-inside list-disc mt-4 text-gray-500 text-sm tracking-wide'>
              <li className='p-1'>Autosteer on city streets</li>
            </ul>
            <span className='mt-6 text-xs text-gray-500 text-justify'>
              The currently enabled features require active driver supervision
              and do not make the vehicle autonomous. The activation and use of
              these features are dependent on achieving reliability far in
              excess of human drivers as demonstrated by billions of miles of
              experience, as well as regulatory approval, which may take longer
              in some jurisdictions. As these self-driving features evolve, your
              car will be continuously upgraded through over-the-air software
              updates.
            </span>
            <div className='mt-6 flex w-full justify-between'>
              <div className=' bg-blue-700 text-white rounded-full h-6 pt-4 pb-8 flex justify-center  w-2/4'>
                <h5>ADD</h5>
              </div>
              <div className='h-6 pt-4 pb-8 bg-gray-200 ml-4  rounded-full  flex justify-center  w-2/4'>
                <h5>FEATURE DETAILS</h5>
              </div>
            </div>
            <div className='mt-12 pb-32'>
              <h5 className='text-center font-semibold text-2xl'>
                Order Your Model 3
              </h5>
              <h6 className='text-center mt-2 text-sm font-medium'>
                Estimated Delivery: 4-11 Weeks
              </h6>
              <div className='h-6 pt-4 pb-8 text-sm bg-blue-700 mt-4 text-white rounded-full  flex justify-center  w-full tracking-wide'>
                <h5>CONTINUE TO PAYMENT</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 rounded-t-2xl flex   px-4 pt-4 h-16 fixed bottom-0 w-full'>
        <div className='bg-white w-8 h-8 px-2 rounded-full shadow-md '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-full'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 15l7-7 7 7'
            />
          </svg>
        </div>
        <div className='flex-1 ml-2 text-sm mb-6 '>
          <h5 className='text-center'>$57,590 Purchase price</h5>
          <h5 className='text-center text-gray-500'>
            $11,700 Potential savings over 6 years
          </h5>
        </div>
      </div>
    </div>
  );
}
