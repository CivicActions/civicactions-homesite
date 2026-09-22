import React from 'react';
import '../sass/styles.scss';
import SEO from '../components/seo';

// Style Guide Infrastructure
import StyleGuideLayout from '../components/style-guide/style-guide-layout';
import FoundationsSection from '../components/style-guide/foundations-section';
import ButtonsAndNavSection from '../components/style-guide/buttons-and-nav-section';
import HeroesAndCTAsSection from '../components/style-guide/heroes-and-ctas-section';
import CardsAndContentSection from '../components/style-guide/cards-and-content-section';

const StyleGuidePage = () => {
  return (
    <StyleGuideLayout>
      {/* 1. Foundations: Typography Scale & Color Palette */}
      <FoundationsSection />

      {/* 2. Buttons, Links & Navigation Components */}
      <ButtonsAndNavSection />

      {/* 3. Heroes, Banners & Calls to Action */}
      <HeroesAndCTAsSection />

      {/* 4. Cards, Teasers, Media & Content Sections */}
      <CardsAndContentSection />
    </StyleGuideLayout>
  );
};

export default StyleGuidePage;

export const Head = () => (
  <SEO
    title="Component Style Guide"
    description="Comprehensive component library, props documentation, and design tokens for the CivicActions website."
  />
);