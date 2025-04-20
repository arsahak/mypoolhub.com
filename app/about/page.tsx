import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
//import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
//import { StatisticsSection } from '@/src/sections/statistics/v1';
//import { TestimonialSection } from '@/src/sections/testimonial/v1';
//import { WorkprocessSection } from '@/src/sections/work-process/v1';
//test
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mypoolhub | About',
  description: 'Mypoolhub - 24/7 Pool monitoring Service',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <CtaSection />

      <Footer />
    </>
  );
}
//<TestimonialSection />
//<AboutSectionTwo />
//<WorkprocessSection />
//<StatisticsSection />
