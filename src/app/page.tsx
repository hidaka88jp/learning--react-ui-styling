import Link from 'next/link';

import { SiTailwindcss } from 'react-icons/si';
import { SiCssmodules } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';

export default function Home() {
  return (
    <section className='px-4 sm:px-8'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <div className='py-16'>
          <div className='mb-8 flex flex-col items-center gap-3'>
            <p>Choose a Styling Approach</p>
            <div className='bg-gray h-0.5 w-6' />
          </div>
          <div className='flex flex-col items-center justify-center gap-5 sm:gap-8'>
            <Link
              href='/tailwind-css'
              className='flex items-center gap-2 text-4xl font-medium hover:text-[#06B6D4]'
            >
              <SiTailwindcss size={40} />
              Tailwind CSS
            </Link>
            <Link
              href='/css-modules'
              className='flex items-center gap-2 text-4xl font-medium hover:text-[#663399]'
            >
              <SiCssmodules size={40} />
              CSS Modules
            </Link>
            {/* <Link
              href='/interactive-ui'
              className='flex items-center gap-2 text-4xl font-medium hover:text-[#F7DF1E]'
            >
              <SiJavascript size={40} />
              Interactive UI
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
