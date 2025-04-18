import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogListSection } from '@/src/sections/blog-list';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mypoolhub | Blog',
  description: 'Mypoolhub - 24/7 pool monitoring Service',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog',
          },
        ]}
      />
      <BlogListSection />
      <Footer />
    </>
  );
}
