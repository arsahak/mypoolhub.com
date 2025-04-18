import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
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
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Pool weekly service',
        href: '/',
        openNewTab: false,
      },
      {
        label: '24/7 Pool monitoring Service',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Pool Clean Service',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Pool Repair',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Pool water chemicals supply',
        href: '/',
        openNewTab: false,
      },
    ],
  },

  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.png',
          alt: 'Choose your Disinfectants',
        },
        title: 'Choose your Disinfectants',
        date: 'April 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.png',
          alt: 'Water Balance',
        },
        title: 'Water Balance',
        date: 'April 17, 2024',
        slug: './blog-details',
      },
    ],
  },
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+1 817 749 6345',
    mail: 'mypoolhub@gmail.com',
    location: '2822 N Oconnor Rd, Irving, Texas',
  },
  footerBottom: {
    copyrightText: '© MyPoolHub  2024 | All Rights Reserved',
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
