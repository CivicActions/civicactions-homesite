import React from 'react';
import ComponentDoc from './component-doc';

import Banner from '../banner';
import Hero from '../hero';
import HeroWithButtons from '../hero-with-buttons';
import CaseStudyHero from '../case-study-hero';
import PrimaryPageCTA from '../primary-page-cta';
import DitapPageCTA from '../ditap-page-cta';

const HeroesAndCTAsSection = () => {
  return (
    <section className="sg-category-section">
      <div className="sg-category-section__header">
        <h2 className="sg-category-section__title">Heroes, Banners &amp; Calls to Action</h2>
        <p className="sg-category-section__desc">
          High-visibility introductory headers, dismissible alert ribbons, and lead-generation call-to-action blocks.
        </p>
      </div>

      {/* 1. Banner */}
      <ComponentDoc
        id="banner"
        name="Banner"
        path="src/components/banner.js"
        badges={['UI Atom', 'Interactive', 'Dismissible']}
        description="Site-wide informational notification banner with bold emphasis text, regular copy, a hyperlink, and an interactive dismiss button."
        propsList={[
          { name: 'boldText', type: 'string', required: false, defaultVal: "''", description: 'Bold prefix or headline announcement.' },
          { name: 'regularText', type: 'string', required: false, defaultVal: "''", description: 'Informational message or call to action copy.' },
          { name: 'link', type: 'string', required: false, defaultVal: "''", description: 'Target URL destination when clicking the announcement text.' },
        ]}
        codeSnippet={`import Banner from '../components/banner';

<Banner
  boldText="We are hiring!"
  regularText="Explore remote-first opportunities in civic tech."
  link="/careers"
/>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Banner
            boldText="New Impact Report:"
            regularText="Read how our digital teams helped deliver human-centered public services in 2026."
            link="/careers"
          />
        </div>
      </ComponentDoc>

      {/* 2. Hero (Text Only) */}
      <ComponentDoc
        id="hero"
        name="Hero (Text Only)"
        path="src/components/hero.js"
        badges={['UI Molecule', 'Layout']}
        description="Clean introductory hero block with a prominent H1 page title and body description text, ideal for informational and policy pages."
        propsList={[
          { name: 'title', type: 'string', required: false, defaultVal: 'undefined', description: 'Primary page headline (rendered inside h1).' },
          { name: 'description', type: 'string', required: false, defaultVal: 'undefined', description: 'Descriptive subhead or introductory paragraph.' },
        ]}
        codeSnippet={`import Hero from '../components/hero';

<Hero
  title="Digital Government Services"
  description="We use Agile, DevOps, and human-centered design to help agencies modernize systems and build public trust."
/>`}
      >
        <Hero
          title="Digital Government Services"
          description="We use Agile, DevOps, and human-centered design to help agencies modernize systems and build public trust."
        />
      </ComponentDoc>

      {/* 3. Hero (with Buttons) */}
      <ComponentDoc
        id="hero-with-buttons"
        name="Hero (with Buttons &amp; Markdown)"
        path="src/components/hero-with-buttons.js"
        badges={['UI Molecule', 'Layout', 'Markdown Support']}
        description="High-impact page hero featuring rich Markdown body parsing and dual call-to-action action buttons."
        propsList={[
          { name: 'title', type: 'string', required: false, defaultVal: 'undefined', description: 'Primary page headline.' },
          { name: 'description', type: 'string', required: false, defaultVal: 'undefined', description: 'Markdown-formatted body text with bold, italic, or link support.' },
          { name: 'button', type: 'array', required: true, defaultVal: '[]', description: 'Array of at least 2 button objects with button_link and button_text.' },
        ]}
        codeSnippet={`import HeroWithButtons from '../components/hero-with-buttons';

<HeroWithButtons
  title="Open and Agile Public Digital Services"
  description="Transforming government technology through **modern software engineering** and human-centered design."
  button={[
    { button_link: '/services', button_text: 'Explore Services' },
    { button_link: '/contact', button_text: 'Get in Touch' },
  ]}
/>`}
      >
        <HeroWithButtons
          title="Open and Agile Public Digital Services"
          description="Transforming government technology through **modern software engineering** and human-centered design."
          button={[
            { button_link: '/services', button_text: 'Explore Services' },
            { button_link: '/contact', button_text: 'Get in Touch' },
          ]}
        />
      </ComponentDoc>

      {/* 4. CaseStudyHero */}
      <ComponentDoc
        id="case-study-hero"
        name="CaseStudyHero"
        path="src/components/case-study-hero.js"
        badges={['UI Molecule', 'Layout']}
        description="Specialized hero layout for case study pages featuring client agency tag, project title, and executive summary."
        propsList={[
          { name: 'title', type: 'string', required: false, defaultVal: 'undefined', description: 'Project or case study headline.' },
          { name: 'client', type: 'string', required: false, defaultVal: 'undefined', description: 'Client name or government agency tag.' },
          { name: 'description', type: 'string', required: false, defaultVal: 'undefined', description: 'High-level project impact summary.' },
        ]}
        codeSnippet={`import CaseStudyHero from '../components/case-study-hero';

<CaseStudyHero
  title="Modernizing the Federal Permitting Dashboard"
  client="U.S. Department of Transportation"
  description="Increasing transparency and efficiency for complex multi-agency infrastructure approvals across the United States."
/>`}
      >
        <CaseStudyHero
          title="Modernizing the Federal Permitting Dashboard"
          client="U.S. Department of Transportation"
          description="Increasing transparency and efficiency for complex multi-agency infrastructure approvals across the United States."
        />
      </ComponentDoc>

      {/* 5. PrimaryPageCTA */}
      <ComponentDoc
        id="primary-page-cta"
        name="PrimaryPageCTA"
        path="src/components/primary-page-cta.js"
        badges={['UI Molecule', 'Layout', 'Theme Variant']}
        description="Site-wide call-to-action section with dual Gatsby LinkButton actions. Supports an alternate homepage styling variant (isHomePage={true})."
        propsList={[
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'Main CTA callout title.' },
          { name: 'subtitle', type: 'string', required: false, defaultVal: "''", description: 'Supporting subheadline or proposition.' },
          { name: 'isHomePage', type: 'boolean', required: false, defaultVal: 'false', description: 'Enables alternate homepage theme styling.' },
          { name: 'primaryButtonText', type: 'string', required: false, defaultVal: "'Put us to work'", description: 'Label for primary button.' },
          { name: 'primaryButtonLink', type: 'string', required: false, defaultVal: "'/contact'", description: 'Route destination for primary button.' },
          { name: 'secondaryButtonText', type: 'string', required: false, defaultVal: "'Join our team'", description: 'Label for secondary button.' },
          { name: 'secondaryButtonLink', type: 'string', required: false, defaultVal: "'/careers'", description: 'Route destination for secondary button.' },
        ]}
        codeSnippet={`import PrimaryPageCTA from '../components/primary-page-cta';

// Standard Variant
<PrimaryPageCTA
  title="Let's build something great together."
  subtitle="Talk with our public digital services experts."
  primaryButtonText="Contact Us"
  primaryButtonLink="/contact"
  secondaryButtonText="View Careers"
  secondaryButtonLink="/careers"
/>

// Homepage Variant
<PrimaryPageCTA
  isHomePage={true}
  title="Ready to elevate digital government?"
  subtitle="Partner with agile teams committed to open source."
/>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Standard Page Variant:
            </span>
            <PrimaryPageCTA
              title="Let's build something great together."
              subtitle="Talk with our public digital services experts."
              primaryButtonText="Put us to work"
              primaryButtonLink="/contact"
              secondaryButtonText="Join our team"
              secondaryButtonLink="/careers"
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Homepage Variant (isHomePage={'{true}'}):
            </span>
            <PrimaryPageCTA
              isHomePage={true}
              title="Ready to transform public services?"
              subtitle="Partner with agile teams committed to open civic technology."
            />
          </div>
        </div>
      </ComponentDoc>

      {/* 6. DitapPageCTA */}
      <ComponentDoc
        id="ditap-page-cta"
        name="DitapPageCTA"
        path="src/components/ditap-page-cta.js"
        badges={['UI Molecule', 'Layout']}
        description="Specialized call-to-action block designed for DITAP (Digital IT Acquisition Program) training and registration pages using native <a> links."
        propsList={[
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'DITAP callout headline.' },
          { name: 'subtitle', type: 'string', required: false, defaultVal: "''", description: 'Cohort date or program subtitle.' },
          { name: 'primaryButtonText', type: 'string', required: false, defaultVal: "'Put us to work'", description: 'Primary action button copy.' },
          { name: 'primaryButtonLink', type: 'string', required: false, defaultVal: "'/contact'", description: 'Primary link destination.' },
          { name: 'secondaryButtonText', type: 'string', required: false, defaultVal: "'Join our team'", description: 'Secondary button copy.' },
          { name: 'secondaryButtonLink', type: 'string', required: false, defaultVal: "'/careers'", description: 'Secondary link destination.' },
        ]}
        codeSnippet={`import DitapPageCTA from '../components/ditap-page-cta';

<DitapPageCTA
  title="Become a Certified DITAP Graduate"
  subtitle="Next cohort begins Fall 2026. Reserve your seat today."
  primaryButtonText="Register for DITAP"
  primaryButtonLink="/services/ditap/register"
  secondaryButtonText="Learn More"
  secondaryButtonLink="/services"
/>`}
      >
        <DitapPageCTA
          title="Become a Certified DITAP Graduate"
          subtitle="Next cohort begins Fall 2026. Reserve your seat today."
          primaryButtonText="Register for DITAP"
          primaryButtonLink="/services/ditap/register"
          secondaryButtonText="Program Syllabus"
          secondaryButtonLink="/services"
        />
      </ComponentDoc>
    </section>
  );
};

export default HeroesAndCTAsSection;
