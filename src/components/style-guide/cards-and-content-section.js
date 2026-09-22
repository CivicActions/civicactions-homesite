import React from 'react';
import ComponentDoc from './component-doc';

// Components
import Card from '../card';
import IconsCard from '../icons';
import CaseStudyTeaser from '../case-study-teaser';
import PressReleaseTeaser from '../press-release-teaser';
import PressReleaseGrid from '../press-release-grid';
import TeaserGrid from '../teaser-grid';
import Offering from '../offering';
import Bio from '../offering/bio';
import Quote from '../quote';
import StaffQuote from '../staff-quote';
import ClientsSection from '../clients';
import Video from '../video';
import TabMobile from '../tabmobile';
import { Sections, Section, SubSections } from '../sections';

// Mock data fixtures
import {
  mockIcons,
  mockImages,
  mockCaseStudies,
  mockBioMembers,
  mockTabs,
  mockSectionsData,
  mockGatsbyImageData,
} from './mockData';

const CardsAndContentSection = () => {
  return (
    <section className="sg-category-section">
      <div className="sg-category-section__header">
        <h2 className="sg-category-section__title">Cards, Teasers, Media &amp; Content</h2>
        <p className="sg-category-section__desc">
          Grid cards, case study summaries, press release items, testimonial quotes, video embeds, and structured content sections.
        </p>
      </div>

      {/* 1. Card (Interactive Gatsby Link) */}
      <ComponentDoc
        id="card"
        name="Card (Interactive Link)"
        path="src/components/card.js"
        badges={['UI Atom', 'Interactive', 'Gatsby Link']}
        description="Navigation tile displaying a feature icon and an H5 title, wrapped in a Gatsby Link for routing."
        propsList={[
          { name: 'icon', type: 'any', required: true, defaultVal: 'undefined', description: 'SVG or image asset path.' },
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'Card title heading.' },
          { name: 'link', type: 'string', required: false, defaultVal: "''", description: 'Internal route destination.' },
        ]}
        codeSnippet={`import Card from '../components/card';
import webCmsIcon from '../files/icons/web-cms-icon.svg';

<Card
  icon={webCmsIcon}
  title="Web & Content Management"
  link="/services"
/>`}
      >
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '280px' }}>
            <Card
              icon={mockIcons.webCms}
              title="Web & Content Management"
              link="/services"
            />
          </div>
          <div style={{ maxWidth: '280px' }}>
            <Card
              icon={mockIcons.security}
              title="Security & Compliance"
              link="/services"
            />
          </div>
        </div>
      </ComponentDoc>

      {/* 2. IconsCard (Presentation Only) */}
      <ComponentDoc
        id="icons-card"
        name="Card (Icons Presentation)"
        path="src/components/icons.js"
        badges={['UI Atom', 'Static Presentation']}
        description="Non-linked presentation card displaying an icon image and heading text, used for feature highlights without navigation."
        propsList={[
          { name: 'icon', type: 'any', required: true, defaultVal: 'undefined', description: 'SVG icon asset path.' },
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'Feature highlight text.' },
        ]}
        codeSnippet={`import Card from '../components/icons';
import annualUpgradesIcon from '../files/icons/annual-upgrades-icon.svg';

<Card
  icon={annualUpgradesIcon}
  title="Continuous Platform Upgrades"
/>`}
      >
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '280px' }}>
            <IconsCard
              icon={mockIcons.annualUpgrades}
              title="Continuous Platform Upgrades"
            />
          </div>
          <div style={{ maxWidth: '280px' }}>
            <IconsCard
              icon={mockIcons.security}
              title="Zero-Trust Architecture"
            />
          </div>
        </div>
      </ComponentDoc>

      {/* 3. CaseStudyTeaser */}
      <ComponentDoc
        id="case-study-teaser"
        name="CaseStudyTeaser"
        path="src/components/case-study-teaser.js"
        badges={['UI Molecule', 'Strapi Schema', 'Gatsby Link']}
        description="Interactive teaser card mapping over Strapi case studies, rendering cover images, agency client labels, titles, and summaries."
        propsList={[
          { name: 'cases', type: 'array', required: true, defaultVal: 'undefined', description: 'Array of Strapi case study objects: { Title, Client_Name, Sort_Order, Summary, id, Cover_Image, Path }.' },
        ]}
        codeSnippet={`import CaseStudyTeaser from '../components/case-study-teaser';

<CaseStudyTeaser
  cases={[
    {
      id: 'case-1',
      Title: 'Modernizing Federal Permitting',
      Client_Name: 'U.S. Department of Transportation',
      Sort_Order: 1,
      Summary: 'Increasing transparency across multi-agency initiatives.',
      Cover_Image: { url: '/images/cover.png', alternativeText: 'DOT project' },
      Path: '/case-study/us-dot',
    },
  ]}
/>`}
      >
        <div style={{ maxWidth: '720px' }}>
          <CaseStudyTeaser cases={mockCaseStudies} />
        </div>
      </ComponentDoc>

      {/* 4. PressReleaseTeaser */}
      <ComponentDoc
        id="press-release-teaser"
        name="PressReleaseTeaser"
        path="src/components/press-release-teaser.js"
        badges={['UI Molecule', 'HTML Anchor']}
        description="Press release preview card featuring a thumbnail image, article title, and body description link."
        propsList={[
          { name: 'teaserlink', type: 'string', required: false, defaultVal: "''", description: 'URL link to full release or coverage.' },
          { name: 'img', type: 'any', required: true, defaultVal: 'undefined', description: 'Thumbnail image path.' },
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'Press release headline.' },
          { name: 'description', type: 'string', required: false, defaultVal: "''", description: 'Brief release abstract or synopsis.' },
        ]}
        codeSnippet={`import PressReleaseTeaser from '../components/press-release-teaser';
import coverImg from '../files/images/cover.png';

<PressReleaseTeaser
  teaserlink="https://civicactions.com/press"
  img={coverImg}
  title="CivicActions Recognized for Excellence in Public Digital Services"
  description="Celebrating 20+ years of empowering public agencies with open source technology and human-centered design."
/>`}
      >
        <div style={{ maxWidth: '380px' }}>
          <PressReleaseTeaser
            teaserlink="/press"
            img={mockImages.cover}
            title="CivicActions Recognized for Excellence in Public Digital Services"
            description="Celebrating 20+ years of empowering public agencies with open source technology and human-centered design."
          />
        </div>
      </ComponentDoc>

      {/* 5. PressReleaseGrid */}
      <ComponentDoc
        id="press-release-grid"
        name="PressReleaseGrid"
        path="src/components/press-release-grid.js"
        badges={['UI Molecule', 'Markdown Support', 'Gatsby Link']}
        description="News release row item displaying publication date badge, H2 headline, Markdown summary body, and a 'Full Story' Gatsby link."
        propsList={[
          { name: 'date', type: 'string', required: false, defaultVal: "''", description: 'Publication date string (e.g. October 14, 2026).' },
          { name: 'title', type: 'string', required: true, defaultVal: 'undefined', description: 'Article or news release headline.' },
          { name: 'description', type: 'string', required: false, defaultVal: "''", description: 'Markdown-formatted description content.' },
          { name: 'path', type: 'string', required: false, defaultVal: "''", description: 'Route to the full article.' },
          { name: 'id', type: 'string', required: false, defaultVal: "''", description: 'Unique identifier.' },
          { name: 'first', type: 'boolean', required: false, defaultVal: 'false', description: 'Adds .first class for boundary border styling.' },
          { name: 'last', type: 'boolean', required: false, defaultVal: 'false', description: 'Adds .last class for boundary border styling.' },
        ]}
        codeSnippet={`import PressReleaseGrid from '../components/press-release-grid';

<PressReleaseGrid
  date="September 15, 2026"
  title="Federal Agency Accelerates Cloud Modernization with Open Source"
  description="New case study outlines how agile DevSecOps reduced deployment cycle times from months to hours."
  path="/press"
  first={true}
  last={false}
/>`}
      >
        <div style={{ maxWidth: '800px' }}>
          <PressReleaseGrid
            date="September 15, 2026"
            title="Federal Agency Accelerates Cloud Modernization with Open Source"
            description="New case study outlines how agile DevSecOps practices reduced deployment cycle times from months to hours while elevating federal compliance standards."
            path="/press"
            first={true}
            last={true}
          />
        </div>
      </ComponentDoc>

      {/* 6. TeaserGrid */}
      <ComponentDoc
        id="teaser-grid"
        name="TeaserGrid"
        path="src/components/teaser-grid.js"
        badges={['UI Molecule', 'Gatsby Image']}
        description="Team member profile grid card displaying a responsive GatsbyImage photo, member name, and role title."
        propsList={[
          { name: 'image', type: 'object', required: false, defaultVal: '{}', description: 'Gatsby image object compatible with getImage() helper.' },
          { name: 'name', type: 'string', required: false, defaultVal: "''", description: 'Team member full name.' },
          { name: 'title', type: 'string', required: false, defaultVal: "''", description: 'Role or job title.' },
          { name: 'link', type: 'string', required: false, defaultVal: "''", description: 'Profile URL destination.' },
        ]}
        codeSnippet={`import TeaserGrid from '../components/teaser-grid';

<TeaserGrid
  image={memberImageData}
  name="Iris Ibekwe"
  title="Director of People & Culture"
  link="/team"
/>`}
      >
        <div style={{ maxWidth: '300px' }}>
          <TeaserGrid
            image={mockGatsbyImageData}
            name="Iris Ibekwe"
            title="Director of People & Culture"
            link="/team"
          />
        </div>
      </ComponentDoc>

      {/* 7. Offering */}
      <ComponentDoc
        id="offering"
        name="Offering"
        path="src/components/offering.js"
        badges={['UI Molecule']}
        description="Service capability feature card presenting an illustrated icon, an H3 title, and an informative body description."
        propsList={[
          { name: 'icon', type: 'any', required: false, defaultVal: 'undefined', description: 'Icon image asset path.' },
          { name: 'title', type: 'string', required: false, defaultVal: "''", description: 'Offering headline.' },
          { name: 'description', type: 'string', required: false, defaultVal: "''", description: 'Detailed description of the service offering.' },
        ]}
        codeSnippet={`import Offering from '../components/offering';
import webCmsIcon from '../files/icons/web-cms-icon.svg';

<Offering
  icon={webCmsIcon}
  title="Open Source CMS & Drupal"
  description="Enterprise content management solutions engineered for security, high availability, and WCAG accessibility."
/>`}
      >
        <div style={{ maxWidth: '340px' }}>
          <Offering
            icon={mockIcons.webCms}
            title="Open Source CMS & Drupal"
            description="Enterprise content management solutions engineered for security, high availability, and WCAG 2.1 AA accessibility."
          />
        </div>
      </ComponentDoc>

      {/* 8. Bio */}
      <ComponentDoc
        id="bio"
        name="Bio"
        path="src/components/offering/bio.js"
        badges={['UI Molecule', 'Strapi Schema']}
        description="Staff biographical profile section mapping over Strapi member records, including portrait photo, LinkedIn link with hover states, title, and bio narrative."
        propsList={[
          { name: 'member', type: 'array', required: true, defaultVal: 'undefined', description: 'Array of Strapi member objects with id, image, Name, Role, Body, and Linkedin.' },
        ]}
        codeSnippet={`import Bio from '../components/offering/bio';

<Bio
  member={[
    {
      id: 'bio-1',
      Name: 'Henry Poole',
      Role: 'Co-Founder & Director of Government Solutions',
      Linkedin: 'https://www.linkedin.com/company/civicactions',
      image: [{ url: '/images/henry-poole.png' }],
      Body: { data: { Body: 'Passionate about open technology and civic tech.' } },
    },
  ]}
/>`}
      >
        <div style={{ maxWidth: '680px' }}>
          <Bio member={mockBioMembers} />
        </div>
      </ComponentDoc>

      {/* 9. Quote */}
      <ComponentDoc
        id="quote"
        name="Quote"
        path="src/components/quote.js"
        badges={['UI Atom']}
        description="Clean typographic pull-quote component rendering prominent quotation text with source attribution."
        propsList={[
          { name: 'quote', type: 'string', required: false, defaultVal: "''", description: 'Quotation text.' },
          { name: 'source', type: 'string', required: false, defaultVal: "''", description: 'Attribution source or speaker.' },
          { name: 'classes', type: 'string', required: false, defaultVal: "''", description: 'Additional CSS class names.' },
        ]}
        codeSnippet={`import Quote from '../components/quote';

<Quote
  quote="CivicActions transformed how our agency approaches digital service delivery."
  source="Senior Federal Program Director"
/>`}
      >
        <div style={{ maxWidth: '640px' }}>
          <Quote
            quote="CivicActions transformed how our agency approaches digital service delivery and public cloud migration."
            source="Senior Federal Program Director"
          />
        </div>
      </ComponentDoc>

      {/* 10. StaffQuote */}
      <ComponentDoc
        id="staff-quote"
        name="StaffQuote"
        path="src/components/staff-quote.js"
        badges={['UI Molecule']}
        description="Featured testimonial quotation card complete with team member portrait photo, name, role title, and decorative graphic pattern."
        propsList={[
          { name: 'img', type: 'any', required: false, defaultVal: 'undefined', description: 'Portrait image path.' },
          { name: 'alt', type: 'string', required: false, defaultVal: "''", description: 'Accessible image alt description.' },
          { name: 'quote', type: 'string', required: false, defaultVal: "''", description: 'Quotation text.' },
          { name: 'name', type: 'string', required: false, defaultVal: "''", description: 'Staff member name.' },
          { name: 'role', type: 'string', required: false, defaultVal: "''", description: 'Staff member role or title.' },
          { name: 'classes', type: 'string', required: false, defaultVal: "''", description: 'Additional CSS class names.' },
        ]}
        codeSnippet={`import StaffQuote from '../components/staff-quote';
import henryPooleImg from '../files/images/henry-poole.png';

<StaffQuote
  img={henryPooleImg}
  alt="Henry Poole"
  quote="We believe government works best when technology is built in the open."
  name="Henry Poole"
  role="Co-Founder & Government Solutions Lead"
/>`}
      >
        <div style={{ maxWidth: '680px' }}>
          <StaffQuote
            img={mockImages.henryPoole}
            alt="Henry Poole"
            quote="We believe government works best when technology is built in the open with the people it serves."
            name="Henry Poole"
            role="Co-Founder & Government Solutions Lead"
          />
        </div>
      </ComponentDoc>

      {/* 11. ClientsSection */}
      <ComponentDoc
        id="clients-section"
        name="ClientsSection"
        path="src/components/clients.js"
        badges={['UI Molecule', 'Static Logos']}
        description="Social proof logo grid displaying 18 partner government agencies and public sector institutions with accessible image descriptions."
        propsList={[]}
        codeSnippet={`import ClientsSection from '../components/clients';

<ClientsSection />`}
      >
        <div style={{ padding: '8px 0' }}>
          <ClientsSection />
        </div>
      </ComponentDoc>

      {/* 12. Video */}
      <ComponentDoc
        id="video"
        name="Video"
        path="src/components/video.js"
        badges={['UI Molecule', 'Responsive Media']}
        description="Responsive video player container rendering an accessible <iframe> embed for YouTube or Vimeo content with an optional text caption."
        propsList={[
          { name: 'videolink', type: 'string', required: true, defaultVal: 'undefined', description: 'Embeddable video iframe URL (e.g. YouTube or Vimeo embed).' },
          { name: 'videotitle', type: 'string', required: true, defaultVal: 'undefined', description: 'Accessible title for screen readers.' },
          { name: 'videotext', type: 'string', required: false, defaultVal: "''", description: 'Descriptive caption paragraph.' },
        ]}
        codeSnippet={`import Video from '../components/video';

<Video
  videolink="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  videotitle="Introduction to CivicActions Agile Services"
  videotext="Watch our team share principles of open source digital government."
/>`}
      >
        <div style={{ maxWidth: '640px' }}>
          <Video
            videolink="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
            videotitle="Introduction to CivicActions Agile Services"
            videotext="Watch our team share principles of open source digital government."
          />
        </div>
      </ComponentDoc>

      {/* 13. TabMobile */}
      <ComponentDoc
        id="tab-mobile"
        name="TabMobile"
        path="src/components/tabmobile.js"
        badges={['UI Molecule', 'Interactive', 'Accordion / Tabs']}
        description="Mobile tabbed accordion component featuring a dropdown <select> selector and panels with Markdown body text and CTA buttons."
        propsList={[
          { name: 'tabs', type: 'array', required: true, defaultVal: 'undefined', description: 'Array of tab objects: { tab_header, tabs_section: [{ header, body }], cta_tab: { header, button_text, button_link } }.' },
        ]}
        codeSnippet={`import TabMobile from '../components/tabmobile';

<TabMobile
  tabs={[
    {
      tab_header: 'Digital Strategy',
      tabs_section: [
        {
          header: 'Human-Centered Design',
          body: { data: { body: 'We engage directly with citizens to build accessible tools.' } },
        },
      ],
      cta_tab: {
        header: 'Ready to elevate your strategy?',
        button_text: 'Explore Services',
        button_link: '/services',
      },
    },
  ]}
/>`}
      >
        <div style={{ maxWidth: '640px' }}>
          <TabMobile tabs={mockTabs} />
        </div>
      </ComponentDoc>

      {/* 14. Sections, Section & SubSections */}
      <ComponentDoc
        id="sections"
        name="Sections, Section &amp; SubSections"
        path="src/components/sections.js"
        badges={['UI Molecules', 'Structured Content']}
        description="Composite structured content layout components that render titled sections with nested subsections and customizable class hierarchies."
        propsList={[
          { name: 'sections', type: 'object', required: true, defaultVal: 'undefined', description: 'Array of section definition objects containing title, desc, and optional subSections.' },
          { name: 'classes', type: 'object', required: true, defaultVal: 'undefined', description: 'Object specifying sectionClasses, additionalClasses, and innerClasses.' },
          { name: 'withH1', type: 'boolean', required: false, defaultVal: 'false', description: 'Optional flag for heading level control.' },
        ]}
        codeSnippet={`import { Sections, Section, SubSections } from '../components/sections';

<Sections
  sections={[
    {
      title: 'Open Source in Government',
      desc: 'Public money should fund public code.',
      subSections: [
        { title: 'Vendor Independence', desc: 'Governments retain ownership of code and data.' },
      ],
    },
  ]}
  classes={{
    sectionClasses: 'custom-section',
    additionalClasses: 'custom-content',
    innerClasses: 'custom-inner',
  }}
/>`}
      >
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '6px' }}>
          <Sections
            sections={mockSectionsData}
            classes={{
              sectionClasses: 'sg-demo-section',
              additionalClasses: 'sg-demo-content',
              innerClasses: 'sg-demo-inner',
            }}
          />
        </div>
      </ComponentDoc>

      {/* 15. SEO */}
      <ComponentDoc
        id="seo"
        name="SEO Head Component"
        path="src/components/seo.js"
        badges={['UI Atom', 'Gatsby Head', 'StaticQuery']}
        description="Document head metadata manager rendering <title>, meta descriptions, OpenGraph social sharing tags, Twitter cards, and canonical link tags. Queries siteMetadata automatically via useStaticQuery."
        propsList={[
          { name: 'title', type: 'string', required: false, defaultVal: 'null', description: 'Page title appended to site titleTemplate.' },
          { name: 'description', type: 'string', required: false, defaultVal: 'null', description: 'Page description override.' },
          { name: 'image', type: 'string', required: false, defaultVal: 'null', description: 'Social share image URL override.' },
          { name: 'article', type: 'boolean', required: false, defaultVal: 'false', description: 'When true sets og:type to article rather than website.' },
        ]}
        codeSnippet={`import SEO from '../components/seo';

// Usage in Gatsby Head export:
export const Head = () => (
  <SEO
    title="Component Style Guide"
    description="Interactive design system catalog and component specifications for CivicActions."
  />
);`}
      >
        <div style={{ padding: '8px 0' }}>
          <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
            The <code>SEO</code> component operates in the document <code>&lt;head&gt;</code>. Active metadata on this page:
          </div>
          <table className="sg-table" style={{ background: '#ffffff' }}>
            <thead>
              <tr>
                <th>Tag Name / Property</th>
                <th>Resolved Content Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;title&gt;</code></td>
                <td>Component Style Guide | CivicActions</td>
              </tr>
              <tr>
                <td><code>meta[name="description"]</code></td>
                <td>Comprehensive component library, props documentation, and design tokens for the CivicActions website.</td>
              </tr>
              <tr>
                <td><code>meta[property="og:type"]</code></td>
                <td>website</td>
              </tr>
              <tr>
                <td><code>meta[name="twitter:card"]</code></td>
                <td>summary_large_image</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComponentDoc>
    </section>
  );
};

export default CardsAndContentSection;
