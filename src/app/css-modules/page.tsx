import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import LinkButton from '@/components/shared/LinkButton';

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

export default function CssModules() {
  return (
    <section className={styles.content}>
      <div className={styles.content__inner}>
        <h2 className={styles.title}>CSS Modules</h2>
        <div className={styles.content}>
          <ul className={styles.cardList}>
            {contents.map((content) => (
              <li key={content.title} className={styles.card}>
                <Link href={content.link} className={styles.card__link}>
                  <Image
                    className={styles.card__image}
                    src={content.imageUrl}
                    alt={content.title}
                    width={800}
                    height={600}
                  />
                  <div className={styles.card__body}>
                    <h3 className={styles.card__title}>{content.title}</h3>
                    {content.reference && (
                      <p className={styles.card__reference}>{content.reference}</p>
                    )}
                    {content.description && (
                      <p className={styles.card__description}>{content.description}</p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
