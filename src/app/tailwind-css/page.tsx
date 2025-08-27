import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '@/components/shared/LinkButton';

import { SiTailwindcss } from 'react-icons/si';

type Content = {
  title: string;
  reference?: string;
  description?: string;
  imageUrl: string;
  link: string;
};

const contents: Content[] = [
  {
    title: 'Button',
    reference: 'CSS Architecture Perfect Guide',
    description: 'Chapter 5-1 (p. 240)',
    imageUrl: '/images/sample-thumbnail.png',
    link: '#',
  },
  {
    title: 'Card',
    reference: 'CSS Architecture Perfect Guide',
    imageUrl: '/images/sample-thumbnail.png',
    link: '#',
  },
];

export default function TailwindCSS() {
  return (
    <section className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <h2 className='mt-3 mb-10 flex items-center justify-center gap-2 text-3xl font-medium text-[#06B6D4]'>
          <SiTailwindcss size={30} />
          Tailwind CSS
        </h2>
        <div className='grid gap-10 sm:grid-cols-3'>
          {contents.map((content) => (
            <Link
              key={content.title}
              href={content.link}
              className='group flex aspect-square h-full flex-col items-center'
            >
              <Image
                src={content.imageUrl}
                alt='thumbnail'
                width={1328}
                height={938}
                className='mb-3 aspect-3/2 rounded-lg border-4 border-gray-600 object-cover object-top transition duration-200 group-hover:scale-105 group-hover:border-[#06B6D4]'
              />
              <div className='text-center transition duration-200 group-hover:text-[#06B6D4]'>
                <h3 className='mb-1 text-xl'>{content.title}</h3>
                {content.reference && (
                  <p className='text-sm text-gray-500 transition duration-200 group-hover:text-[#06B6D4]'>
                    {content.reference}
                  </p>
                )}
                {content.description && (
                  <p className='text-sm text-gray-500 transition duration-200 group-hover:text-[#06B6D4]'>
                    {content.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className='mt-10 flex flex-col items-center justify-center'>
          <LinkButton href={'/'} aria-label='Back to top page Notes section'>
            Back to Top
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
