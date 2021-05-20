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
    <div className='flex flex-col min-w-full min-h-full bg-white '>
      <Head>
        <title>Design Your Model 3 | Tesla</title>
      </Head>
      {/* header */}
      <div className='flex justify-between w-full h-3 pt-6 pl-2 pr-6 md:pl-4 justify-items-center'>
        <div className='w-2/4 h-full md:w-28 lg:w-32'>
          <svg
            viewBox='0 0 342 35'
            xmlns='http://www.w3.org/2000/svg'
            aria-level='2'
          >
            <path d='M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z'></path>
          </svg>
        </div>
        {/* Langage section */}
        <div className='flex text-gray-400 justify-items-center'>
          {/* logo */}
          <div className='w-6 h-full'>
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
            <h6 className='pl-1 font-bold'>CD</h6>
          </div>
        </div>
      </div>
      {/* body */}
      <div className='w-full mt-8 lg:h-screen lg:flex '>
        {/* on large screen */}
        <div className='hidden lg:block lg:flex-1 lg:col-span-1'>
          <div className='relative w-full h-screen '>
            <Image
              src={
                activeWheel === 1
                  ? images[activeColor][3]
                  : images[activeColor][activeImage]
              }
              alt='Picture of presentation'
              layout='fill'
              objectFit='none'
              // quality={100}
            />
          </div>
          <div className='flex justify-center w-full justify-items-center '>
            <div className='fixed bottom-0 flex h-16 max-w-md px-4 pt-4 mx-auto text-sm bg-gray-100 rounded-t-2xl'>
              <div className='w-8 h-8 px-2 bg-white rounded-full shadow-md '>
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
              <div className='flex-1 mb-6 ml-1.5 text-xs md:flex md:justify-items-center md:justify-center'>
                <h5 className='text-center'>$57,590 Purchase price</h5>
                <span className='hidden mx-4 md:block'>|</span>
                <h5 className='text-center text-gray-500'>
                  $11,700 Potential savings over 6 years
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:mr-10 lg:overflow-y-auto'>
          {/* hero image */}

          <div className='relative w-full h-60 md:h-72 lg:hidden'>
            <Image
              src={images[activeColor][activeImage]}
              alt='Picture of presentation'
              layout='fill'
              objectFit='none'
              quality={100}
            />
          </div>
          {/* Text Presentation */}

          <div className='flex flex-col w-full mt-6 '>
            <div className='md:max-w-screen-md md:mx-auto'>
              {/* car name and puchase */}
              <div className='flex flex-col items-center justify-center w-full justify-items-center '>
                <div className='flex flex-col items-center justify-center w-full justify-items-center'>
                  <h1 className='text-3xl font-medium tracking-tight'>
                    Model 3
                  </h1>
                  <h3 className='pt-2 text-base text-gray-500'>
                    Estimated Delivery: 4-11 weeks
                  </h3>
                </div>
                <div className='bg-gray-200 bg-opacity-60 py-1.5 pl-2 rounded-full h-12 mt-4 flex justify-between justify-items-center  w-11/12 '>
                  <div className='flex items-center justify-center w-1/2 h-full bg-white rounded-full shadow-md'>
                    <h6 className='text-xs font-semibold tracking-wider text-gray-500'>
                      Purchase Price
                    </h6>
                  </div>
                  <div className='flex items-center justify-center w-1/2 h-full '>
                    <h6 className='text-xs font-semibold tracking-widest text-gray-500'>
                      Potential savings*
                    </h6>
                  </div>
                </div>
              </div>
              {/* kilometers */}
              <div className='grid w-full h-4 grid-cols-3 gap-6 px-8 mt-10 mb-10'>
                <div className='grid grid-rows-2 gap-1'>
                  <div className='flex items-center justify-center justify-items-center'>
                    <h2 className='text-3xl font-semibold'>423</h2>
                    <h6 className='font-medium'>km</h6>
                  </div>
                  <div className='flex justify-center '>
                    <h6 className='text-sm font-thin text-gray-400'>
                      Range (est. )
                    </h6>
                  </div>
                </div>
                <div className='grid grid-rows-2 gap-1'>
                  <div className='flex items-center justify-center justify-items-center'>
                    <h2 className='text-3xl font-semibold'>225</h2>
                    <h6 className='font-medium'>km/h</h6>
                  </div>
                  <div className='flex justify-center '>
                    <h6 className='text-sm font-thin text-gray-400'>
                      Top Speed
                    </h6>
                  </div>
                </div>
                <div className='grid grid-rows-2 gap-1'>
                  <div className='flex items-center justify-center justify-items-center'>
                    <h2 className='text-3xl font-semibold'>5.6</h2>
                    <h6 className='font-medium'>s</h6>
                  </div>
                  <div className='flex justify-center '>
                    <h6 className='text-sm font-thin text-gray-400'>
                      0-100 km/h
                    </h6>
                  </div>
                </div>
              </div>
              {/* prices */}

              <div className='flex flex-col w-full pl-4 pr-2 mt-14'>
                <div className='flex flex-col'>
                  <h3 className='font-medium text-gray-400'>
                    Rear-Wheel Drive
                  </h3>
                  <div className='flex justify-between px-6 py-4 mt-4 text-sm font-semibold rounded-full opacity-90 align-center ring ring-blue-500'>
                    <h6>Standard Range Plus</h6>
                    <h6>$52,990</h6>
                  </div>
                  <div className='flex w-full mt-4 text-sm font-medium text-gray-400'>
                    <a href='/' className='underline'>
                      Learn more
                    </a>
                    <h3 className='pl-1'>about Range and Perfomance</h3>
                  </div>
                  <div className='flex mt-4'>
                    <input type='checkbox' className='p-3 rounded-md' />
                    <h3 className='pl-3 font-medium text-gray-500'>
                      Limit to 151 km range (est.)
                    </h3>
                  </div>
                  <h3 className='mt-6 font-medium text-gray-500'>
                    Dual Motor All-Wheel Drive
                  </h3>
                  <div className='flex justify-between px-6 py-4 mt-4 text-sm font-semibold text-gray-500 border border-gray-400 rounded-full align-center'>
                    <h6>Long Range</h6>
                    <h6>$64,990</h6>
                  </div>
                  <div className='flex justify-between px-6 py-4 mt-4 text-sm font-semibold text-gray-500 border border-gray-400 rounded-full align-center'>
                    <h6>Performance</h6>
                    <h6>$74,990</h6>
                  </div>
                  <div className='flex flex-col items-center justify-center w-full text-sm'>
                    <h3 className='mt-4 text-xs text-center text-gray-400'>
                      All prices are shown without potential incentives or
                      savings of $11,700
                    </h3>
                    <a href='/' className='text-gray-500 underline'>
                      Learn More
                    </a>
                    <div className='p-2 mt-4 font-semibold tracking-widest text-gray-600 bg-gray-100 rounded-full'>
                      <h3>FEATURE DETAILS</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* paint */}
            </div>
            <div className='flex flex-col items-center w-full mt-8 justify-items-center'>
              <div className='relative w-full h-60 md:h-72 lg:hidden'>
                <Image
                  src={images[activeColor][activeImage]}
                  alt='Picture of presentation'
                  layout='fill'
                  objectFit='none'
                  quality={100}
                />
              </div>
              <div className='md:mx-auto md:max-w-screen-sm'>
                <h3 className='text-2xl font-semibold text-center'>Paint</h3>
                <div className='flex items-center justify-center w-full mt-8'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setactiveImage({
                        ...state,
                        activeColor: 0,
                        activeImage: 0,
                      });
                    }}
                    className={classNames(
                      'outline-none ml-6 focus:outline-none rounded-full p-1',
                      {
                        'ring-4 ring-blue-600': activeColor === 0,
                      },
                    )}
                  >
                    <div className='relative w-16 h-16 rounded-full lg:w-24 lg:h-24 '>
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
                      setactiveImage({
                        ...state,
                        activeColor: 1,
                        activeImage: 0,
                      });
                    }}
                    className={classNames(
                      'outline-none ml-6 focus:outline-none rounded-full p-1',
                      {
                        'ring-4 ring-blue-600': activeColor === 1,
                      },
                    )}
                  >
                    <div className='relative w-16 h-16 rounded-full lg:w-24 lg:h-24'>
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
                <div className='flex flex-col items-center w-full mt-6 mb-8 justify-items-center'>
                  <h3 className='text-sm font-semibold tracking-wide'>
                    {activeColor === 0
                      ? 'Pearl White Multi-Coat'
                      : 'Red Multi-Coat'}
                  </h3>
                  <h3 className='mt-2 text-sm font-medium tracking-wide text-gray-400'>
                    {activeColor === 0 ? 'Included' : '$2,600'}
                  </h3>
                </div>
              </div>
              <div className='relative w-full h-60 md:h-72 lg:hidden'>
                <Image
                  src={images[activeColor][activeWheel === 0 ? 3 : 5]}
                  alt='Picture of presentation'
                  layout='fill'
                  objectFit='none'
                  quality={100}
                />
              </div>
              <div className='md:mx-auto md:max-w-screen-sm'>
                <h3 className='mt-6 text-2xl font-semibold text-center'>
                  Wheels
                </h3>
                <div className='flex items-center justify-center w-full mt-8'>
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
                    <div className='relative w-20 h-20 rounded-full lg:w-32 lg:h-32'>
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
                    <div className='relative w-20 h-20 rounded-full lg:w-32 lg:h-32'>
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
                <div className='flex flex-col items-center w-full mt-6 mb-8 justify-items-center'>
                  <h3 className='text-sm font-semibold tracking-wide'>
                    {activeColor === 0 ? '18" Aero Wheels' : '18" Sport Wheels'}
                  </h3>
                  <h3 className='mt-2 text-sm font-medium tracking-wide text-gray-400'>
                    {activeColor === 0 ? 'Included' : '$2,000'}
                  </h3>
                </div>
              </div>
              <div className='relative w-full h-60 md:h-72 lg:hidden'>
                <Image
                  src='/images/image5.jpg'
                  alt='Picture of presentation'
                  layout='fill'
                  objectFit='none'
                  quality={100}
                />
              </div>
              <div className='flex flex-col items-center w-full mt-4 justify-items-center'>
                <h3 className='text-2xl font-semibold'>Interior</h3>
                <div className='flex items-center justify-center w-full mt-8'>
                  <button
                    className={classNames(
                      'ring-4 ring-blue-600 outline-none p-1  focus:outline-none rounded-full ',
                    )}
                  >
                    <div className='relative w-16 h-16 rounded-full lg:w-24 lg:h-24'>
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
                <div className='flex flex-col items-center w-full mt-8 mb-8 justify-items-center'>
                  <h3 className='text-sm font-semibold tracking-wide'>
                    All Black
                  </h3>
                  <h3 className='mt-2 text-sm font-medium tracking-wide text-gray-400'>
                    Included
                  </h3>
                </div>
              </div>
              <div className='p-2 mt-2 font-semibold tracking-widest text-gray-600 bg-gray-100 rounded-full'>
                <h3>FEATURE DETAILS</h3>
              </div>
            </div>
          </div>
          {/* summary */}
          <div className='w-full px-4 mt-6 md:max-w-screen-sm md:mx-auto'>
            <div className='mt-6 md:mt-12'>
              <h6 className='text-2xl font-semibold tracking-wide md:text-center'>
                Full Self-Driving Capability
              </h6>
              <h6 className='mt-1 text-center'>$10,600</h6>
            </div>
            <ul className='px-6 mt-4 text-sm tracking-wide text-gray-500 list-disc md:px-12 lit-inside'>
              <li className='p-1'>Navigate on Autopilot</li>
              <li className='p-1'>Auto Lane Change</li>
              <li className='p-1'>Autopark</li>
              <li className='p-1'>Summon</li>
              <li className='p-1'>Full Sefk-Driving Computer</li>
              <li className='p-1'>Traffic Light and Stop Sign Control</li>
            </ul>
            <div className='mt-6 md:ml-6'>
              <h5 className='mb-4 '>Comming later this year</h5>
              <ul className='px-6 mt-4 text-sm tracking-wide text-gray-500 list-disc lit-inside'>
                <li className='p-1'>Autosteer on city streets</li>
              </ul>
              <span className='mt-6 text-xs text-justify text-gray-500 '>
                The currently enabled features require active driver supervision
                and do not make the vehicle autonomous. The activation and use
                of these features are dependent on achieving reliability far in
                excess of human drivers as demonstrated by billions of miles of
                experience, as well as regulatory approval, which may take
                longer in some jurisdictions. As these self-driving features
                evolve, your car will be continuously upgraded through
                over-the-air software updates.
              </span>
              <div className='flex justify-between w-full mt-6 '>
                <div className='flex justify-center w-2/4 h-6 pt-2 pb-8 text-white bg-blue-700 rounded-full '>
                  <h5>ADD</h5>
                </div>
                <div className='flex justify-center w-2/4 h-6 pt-2 pb-8 ml-4 bg-gray-200 rounded-full'>
                  <h5>FEATURE DETAILS</h5>
                </div>
              </div>
              <div className='pb-32 mt-12'>
                <h5 className='text-2xl font-semibold text-center'>
                  Order Your Model 3
                </h5>
                <h6 className='mt-2 text-sm font-medium text-center'>
                  Estimated Delivery: 4-11 Weeks
                </h6>
                <div className='flex justify-center w-full h-6 pt-4 pb-8 mt-4 text-sm tracking-wide text-white bg-blue-700 rounded-full'>
                  <h5>CONTINUE TO PAYMENT</h5>
                </div>
                <div className='mt-6 text-sm text-center'>
                  <span className='mt-6 mr-1 text-justify text-gray-500'>
                    This site was build in love By
                  </span>
                  <a href='https://twitter.com/BuhendwaDoms' target='new'>
                    Dom's Buhendwa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 flex w-full h-16 px-4 pt-4 bg-gray-100 lg:hidden rounded-t-2xl'>
        <div className='w-8 h-8 px-2 bg-white rounded-full shadow-md '>
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
        <div className='flex-1 mb-6 ml-2 text-sm md:flex md:justify-items-center md:justify-center'>
          <h5 className='text-center'>$57,590 Purchase price</h5>
          <span className='hidden mx-4 md:block'>|</span>
          <h5 className='text-center text-gray-500'>
            $11,700 Potential savings over 6 years
          </h5>
        </div>
      </div>
    </div>
  );
}
