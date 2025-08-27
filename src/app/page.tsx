import Link from 'next/link';

import { SiTailwindcss } from 'react-icons/si';
import { SiCssmodules } from 'react-icons/si';

export default function Home() {
  return (
    <section className='px-4 sm:px-8'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div className='py-16 sm:py-32'>
          <div className='mb-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8'>
            <Link
              href='/tailwind-css'
              className='flex items-center gap-2 text-3xl font-medium hover:text-[#06B6D4]'
            >
              <SiTailwindcss size={30} />
              Tailwind CSS
            </Link>
            <div className='bg-gray h-0.5 w-6 sm:h-6 sm:w-0.5' />
            <Link
              href='/css-modules'
              className='hover:text-accent flex items-center gap-2 text-3xl font-medium'
            >
              <SiCssmodules size={30} />
              CSS Modules
            </Link>
          </div>
          <h2 className='mb-8 text-center'>Choose a Styling Approach</h2>
        </div>
      </div>
    </section>
  );
}
