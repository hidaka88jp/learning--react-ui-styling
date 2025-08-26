import { Antonio } from 'next/font/google';
import Link from 'next/link';
import clsx from 'clsx';

const antonio = Antonio({
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className='px-4 pt-4 pb-5 sm:px-8 sm:pt-9 sm:pb-7'>
      <div className='mx-auto flex w-full max-w-94 items-center justify-center sm:max-w-5xl sm:items-baseline'>
        <Link href={'/'}>
          <h1
            className={`${antonio.className} text-3xl sm:text-4xl`}
            aria-label='Styling Practice by Taka'
          >
            <span className='mr-4 tracking-[.18em]'>
              <span className='text-accent'>S</span>tyling <span className='text-accent'>P</span>
              ractice
            </span>
            <span className={clsx(antonio.className, 'text-lg tracking-[.1em] sm:text-xl')}>
              by <span className='text-accent'>T</span>AKA
            </span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
