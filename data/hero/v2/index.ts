import { HeroSectionProps } from '@/src/sections/hero/v2';

export const heroSectionData: HeroSectionProps = {
  title: 'Navigating Tech Horizons Together',
  customers: [
    {
      src: '/assets/images/hero/avatar-1.png',
      alt: 'user 1',
    },
    {
      src: '/assets/images/hero/avatar-2.png',
      alt: 'user 2',
    },
    {
      src: '/assets/images/hero/avatar-3.png',
      alt: 'user 3',
    },
  ],
  customerCounterInfo: {
    count: 3000,
    about: 'Satisfied Customer',
    suffix: '+',
  },
  ctaButton: {
    href: '',
    label: 'Discover More',
  },
  imageLarge: {
    src: '/assets/images/hero/hero-5.png',
    alt: 'image 5',
  },
  description: 'lately',
  imageSmall: {
    src: '/assets/images/hero/hero-6.png',
    alt: 'image 6',
  },
  statisticsCounterInfo: {
    count: 4,
    about: 'Daily Activate Customer ',
    suffix: 'K+',
  },
};
