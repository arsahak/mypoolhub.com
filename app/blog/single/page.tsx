import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogDetilsSection } from '@/src/sections/blog-details/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyPoolHub | Blog details',
  description: 'MyPoolHub - 24/7 Pool Monitoring Service',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Details',
          },
        ]}
      />
      <BlogDetilsSection />
      <Footer />
    </>
  );
}
