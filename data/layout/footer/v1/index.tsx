import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description: '24/7 Pool Monitoring Service And Weekly Pool Service',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: 'Get Free Link',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: '2822 N O connor Rd. Irving, Texas 75062 ',
    mails: ['mypoolhub@gmail.com.com', 'info.mypoolhub@gmail.com'],
    phoneNumbers: ['(817) 749-6345'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.png',
          alt: 'We provide 24/7 pool monitoring system ',
        },
        title: 'We provide 24/7 pool monitoring system',
        date: 'April 11, 2025',
        slug: './247-monitoring',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.png',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'We provide pool maintenence with less cost',
        date: 'April 10, 2025',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© Mypoolhub  2025 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
