import { BlogSectionProps } from '@/src/sections/blog/v1';

export const blogSectionData: BlogSectionProps = {
  sectionHeading: {
    subtitle: 'our blogs',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  blogs: [
    {
      image: {
        src: '/assets/images/blog/blog-1.png',
        alt: 'Choose your Disinfectants',
      },
      date: {
        day: '15',
        month: 'April',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'Choose your Disinfectants',
      commentCount: 5,
    },
    {
      image: {
        src: '/assets/images/blog/blog-2.png',
        alt: 'How to do the water balance',
      },
      date: {
        day: '30',
        month: 'may',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'How to do the water balance',
      commentCount: 5,
    },
    {
      image: {
        src: '/assets/images/blog/blog-3.png',
        alt: 'We implement health and safety regulatory guideline',
      },
      date: {
        day: '30',
        month: 'may',
      },
      author: {
        name: 'Admin',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We implement health and safety regulatory guideline',
      commentCount: 5,
    },
  ],
};
