import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Pricing Action',
    title: 'Innovating for a better tomorrow',
  },
  cards: [
    {
      title: 'Regular Pool Maintenance',
      description:
        'Make your pool water balance with Proper chemical combinations with possible pool clean',
      features: [
        'water balance',
        'Clorine dose management',
        'Primary pool clean up',
        'Make your pool disinfectants',
      ],
      price: '$69.99',
      duration: '/visit',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: '24/7 pool monitoring service',
      description:
        'with proper Wifi device, 24/7 pool monitoring and make you notified if required ',
      features: [
        'Install wifi device',
        'regular monitor the water reading from device',
        'SMS service to notify you',
        'guideline to how to apply chemicals to solve water problems',
      ],
      price: '$19.99',
      duration: '/month',
      isPopular: true,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Detail Pool clean',
      description:
        'Lorem Ipsum is simply dummy text of the printing  Ipsum is simply dummy text of the Lorem Ipsum is simply',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric for Your Startup',
      ],
      price: '$99.99',
      duration: '/visit',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
  ],
};
