import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-white min-h-full min-w-full'>
      <Head>
        <title>Design Your Model 3</title>
      </Head>
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
    </div>
  );
}
