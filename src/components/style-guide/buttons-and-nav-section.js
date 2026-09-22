import React, { useState } from 'react';
import ComponentDoc from './component-doc';

// Component imports
import LinkButton from '../link-button';
import ExternalLinkButton from '../external-link-button';
import SocialIcon from '../social-icons/social-icon';
import SocialIcons from '../social-icons/social-icons';
import Header from '../header';
import RedHeader from '../red-header';
import MainMenu from '../menus/main-menu/main-menu';
import MobileMenu from '../menus/mobile-menu/mobile-menu';
import Footer from '../footer';
import FooterMenu from '../menus/footer-menu';
import Sidebar from '../sidebar';
import { SkipNavLink } from '../skip-nav';
import Pagination from '../pagination';

// Icon imports for SocialIcon examples
import linkedinIcon from '../../files/icons/linkedin-footer-icon.svg';
import linkedinIconBlue from '../../files/icons/linkedin-footer-icon-blue.svg';
import twitterIcon from '../../files/icons/twitter-x-footer-icon.svg';
import twitterIconBlue from '../../files/icons/twitter-x-footer-icon-hover.svg';
import blueskyIcon from '../../files/icons/bluesky-footer-icon.svg';
import blueskyIconBlue from '../../files/icons/bluesky-footer-icon-blue.svg';
import menuIcon from '../../files/icons/menu-icon.svg';
import closeIcon from '../../files/icons/close-icon.svg';

const ButtonsAndNavSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="sg-category-section">
      <div className="sg-category-section__header">
        <h2 className="sg-category-section__title">Buttons, Links &amp; Navigation</h2>
        <p className="sg-category-section__desc">
          Interactive controls, buttons, site header bars, footer layouts, and drawer navigation menus.
        </p>
      </div>

      {/* 1. LinkButton (Internal) */}
      <ComponentDoc
        id="link-button"
        name="LinkButton (Internal)"
        path="src/components/link-button.js"
        badges={['UI Atom', 'Interactive', 'Gatsby Link']}
        description="Standard call-to-action button wrapping Gatsby's internal Link component for smooth client-side routing. Supports primary and secondary color themes, as well as regular and large sizing."
        propsList={[
          { name: 'text', type: 'string', required: false, defaultVal: 'undefined', description: 'Label text displayed inside the button.' },
          { name: 'src', type: 'string', required: false, defaultVal: "''", description: 'Internal relative route path (e.g. /contact).' },
          { name: 'type', type: 'string', required: false, defaultVal: "'primary'", description: "Color theme variant: 'primary' (red) or 'secondary' (blue)." },
          { name: 'size', type: 'string', required: false, defaultVal: "''", description: "Size modifier: pass 'large' for prominent hero CTAs, or omit for standard size." },
        ]}
        codeSnippet={`import LinkButton from '../components/link-button';

// Primary Button
<LinkButton text="Put us to work" src="/contact" type="primary" />

// Secondary Button
<LinkButton text="Join our team" src="/careers" type="secondary" />

// Large Primary Button
<LinkButton text="Explore our services" src="/services" type="primary" size="large" />

// Large Secondary Button
<LinkButton text="Contracting vehicles" src="/contracting" type="secondary" size="large" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="sg-variant-row">
            <span className="sg-variant-row__label">Standard Size:</span>
            <div className="sg-variant-row__content">
              <LinkButton text="Primary Action" src="/contact" type="primary" />
              <LinkButton text="Secondary Action" src="/careers" type="secondary" />
            </div>
          </div>
          <div className="sg-variant-row">
            <span className="sg-variant-row__label">Large Size:</span>
            <div className="sg-variant-row__content">
              <LinkButton text="Large Primary Action" src="/services" type="primary" size="large" />
              <LinkButton text="Large Secondary Action" src="/contracting" type="secondary" size="large" />
            </div>
          </div>
        </div>
      </ComponentDoc>

      {/* 2. ExternalLinkButton */}
      <ComponentDoc
        id="external-link-button"
        name="LinkButton (External Anchor)"
        path="src/components/external-link-button.js"
        badges={['UI Atom', 'Interactive', 'HTML Anchor']}
        description="Styled button component rendering a native HTML <a> anchor tag for linking to external websites and third-party platforms."
        propsList={[
          { name: 'text', type: 'string', required: false, defaultVal: 'undefined', description: 'Label text displayed inside the button.' },
          { name: 'src', type: 'string', required: false, defaultVal: "''", description: 'External URL destination (e.g. https://medium.com).' },
          { name: 'type', type: 'string', required: false, defaultVal: "'primary'", description: "Color variant: 'primary' or 'secondary'." },
          { name: 'size', type: 'string', required: false, defaultVal: "''", description: "Size modifier: 'large' or default standard." },
        ]}
        codeSnippet={`import ExternalLinkButton from '../components/external-link-button';

<ExternalLinkButton
  text="Read our publications"
  src="https://medium.com/civicactions"
  type="primary"
  size="large"
/>`}
      >
        <div className="sg-variant-row">
          <span className="sg-variant-row__label">External Links:</span>
          <div className="sg-variant-row__content">
            <ExternalLinkButton text="External Primary" src="https://medium.com/civicactions" type="primary" />
            <ExternalLinkButton text="External Secondary" src="https://github.com/civicactions" type="secondary" />
            <ExternalLinkButton text="Large External" src="https://civicactions.com" type="primary" size="large" />
          </div>
        </div>
      </ComponentDoc>

      {/* 3. SocialIcon */}
      <ComponentDoc
        id="social-icon"
        name="SocialIcon"
        path="src/components/social-icons/social-icon.js"
        badges={['UI Atom', 'Interactive']}
        description="Individual social network link with smooth CSS hover transition between normal and hover SVG icons."
        propsList={[
          { name: 'link', type: 'string', required: false, defaultVal: "''", description: 'Target profile or channel URL.' },
          { name: 'icon', type: 'any', required: false, defaultVal: 'undefined', description: 'Default idle SVG icon path.' },
          { name: 'iconHover', type: 'any', required: false, defaultVal: 'undefined', description: 'Hover state SVG icon path.' },
          { name: 'alt', type: 'string', required: false, defaultVal: "''", description: 'Accessible label text for screen readers.' },
          { name: 'platform', type: 'string', required: false, defaultVal: "''", description: 'Social platform class identifier.' },
        ]}
        codeSnippet={`import SocialIcon from '../components/social-icons/social-icon';
import linkedinIcon from '../files/icons/linkedin-footer-icon.svg';
import linkedinIconBlue from '../files/icons/linkedin-footer-icon-blue.svg';

<SocialIcon
  link="https://www.linkedin.com/company/civicactions"
  icon={linkedinIcon}
  iconHover={linkedinIconBlue}
  alt="CivicActions LinkedIn profile"
  platform="linkedin"
/>`}
      >
        <div className="sg-variant-row">
          <span className="sg-variant-row__label">Social Icons:</span>
          <div className="sg-variant-row__content" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <SocialIcon
              link="https://www.linkedin.com/company/civicactions"
              icon={linkedinIcon}
              iconHover={linkedinIconBlue}
              alt="LinkedIn"
              platform="linkedin"
            />
            <SocialIcon
              link="https://twitter.com/civicactions"
              icon={twitterIcon}
              iconHover={twitterIconBlue}
              alt="Twitter / X"
              platform="twitter"
            />
            <SocialIcon
              link="https://bsky.app/profile/civicactions.com"
              icon={blueskyIcon}
              iconHover={blueskyIconBlue}
              alt="Bluesky"
              platform="bluesky"
            />
          </div>
        </div>
      </ComponentDoc>

      {/* 4. SocialIcons */}
      <ComponentDoc
        id="social-icons"
        name="SocialIcons"
        path="src/components/social-icons/social-icons.js"
        badges={['UI Molecule']}
        description="Composite list component that automatically renders all active company social channels using socialMediaData defined in src/data.js."
        propsList={[]}
        codeSnippet={`import SocialIcons from '../components/social-icons/social-icons';

<SocialIcons />`}
      >
        <div style={{ padding: '8px 0' }}>
          <SocialIcons />
        </div>
      </ComponentDoc>

      {/* 5. Header */}
      <ComponentDoc
        id="header"
        name="Header"
        path="src/components/header.js"
        badges={['UI Layout', 'Interactive']}
        framed={true}
        description="Primary global site header containing company logo branding, desktop dropdown navigation, and mobile hamburger menu trigger. Automatically tracks scroll position to apply elevation and background styling."
        propsList={[]}
        codeSnippet={`import Header from '../components/header';

<Header />`}
      >
        <div style={{ minHeight: '180px', position: 'relative' }}>
          <Header />
        </div>
      </ComponentDoc>

      {/* 6. RedHeader */}
      <ComponentDoc
        id="red-header"
        name="RedHeader"
        path="src/components/red-header.js"
        badges={['UI Layout', 'Interactive', 'Theme Variant']}
        framed={true}
        description="Alternate high-impact red banner variation of the site header, used on the homepage and designated brand landing pages. Features white logo transitions and red mobile burger accents."
        propsList={[]}
        codeSnippet={`import RedHeader from '../components/red-header';

<RedHeader />`}
      >
        <div style={{ minHeight: '180px', position: 'relative', background: '#d83933' }}>
          <RedHeader />
        </div>
      </ComponentDoc>

      {/* 7. MainMenu */}
      <ComponentDoc
        id="main-menu"
        name="MainMenu"
        path="src/components/menus/main-menu/main-menu.js"
        badges={['UI Molecule', 'Interactive', 'Navigation']}
        description="Desktop header navigation menu featuring accessible hover and focus submenus for Company, Services, and Our Work, plus direct links to Insights, Careers, and Contact."
        propsList={[
          { name: 'redHeader', type: 'boolean', required: false, defaultVal: 'false', description: 'When true, adjusts text and submenu link colors for high-contrast red header backgrounds.' },
        ]}
        codeSnippet={`import MainMenu from '../components/menus/main-menu/main-menu';

// Standard Light Header Navigation
<MainMenu redHeader={false} />

// Red Header Navigation
<MainMenu redHeader={true} />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: '8px' }}>
              Standard Header Menu (redHeader={'{false}'})
            </span>
            <MainMenu redHeader={false} />
          </div>
          <div style={{ background: '#d83933', padding: '16px', borderRadius: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#ffffff', display: 'block', marginBottom: '8px' }}>
              Red Header Menu (redHeader={'{true}'})
            </span>
            <MainMenu redHeader={true} />
          </div>
        </div>
      </ComponentDoc>

      {/* 8. MobileMenu */}
      <ComponentDoc
        id="mobile-menu"
        name="MobileMenu"
        path="src/components/menus/mobile-menu/mobile-menu.js"
        badges={['UI Molecule', 'Interactive', 'Drawer']}
        description="Mobile off-canvas slide drawer menu using react-burger-menu. Contains collapsible accordion submenus with ARIA expanded states for touch devices."
        propsList={[
          { name: 'right', type: 'boolean', required: false, defaultVal: 'true', description: 'Positions the drawer on the right side of the screen.' },
          { name: 'width', type: 'string', required: false, defaultVal: "'75%'", description: 'Width of the expanded menu drawer.' },
          { name: 'customBurgerIcon', type: 'node', required: false, defaultVal: 'undefined', description: 'Custom JSX or SVG icon for menu button.' },
          { name: 'customCrossIcon', type: 'node', required: false, defaultVal: 'undefined', description: 'Custom JSX or SVG icon for close button.' },
        ]}
        codeSnippet={`import MobileMenu from '../components/menus/mobile-menu/mobile-menu';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';

<MobileMenu
  right
  noTransition
  width={'75%'}
  customBurgerIcon={<img alt="Open navigation menu" src={menuIcon} />}
  customCrossIcon={<img alt="Close navigation menu" src={closeIcon} />}
/>`}
      >
        <div style={{ position: 'relative', height: '140px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#64748b', fontSize: '14px', marginRight: '40px' }}>
            Click the burger icon to test mobile slide menu:
          </span>
          <div style={{ position: 'relative', width: '60px', height: '40px' }}>
            <MobileMenu
              right
              noTransition
              width={'280px'}
              customBurgerIcon={<img alt='menu' src={menuIcon} />}
              customCrossIcon={<img alt='close' src={closeIcon} />}
            />
          </div>
        </div>
      </ComponentDoc>

      {/* 9. Footer */}
      <ComponentDoc
        id="footer"
        name="Footer"
        path="src/components/footer.js"
        badges={['UI Layout']}
        framed={true}
        description="Global site footer featuring company branding, mission summary, contact information, navigation directory, social links, copyright date, and legal utility links."
        propsList={[]}
        codeSnippet={`import Footer from '../components/footer';

<Footer />`}
      >
        <div style={{ minHeight: '300px' }}>
          <Footer />
        </div>
      </ComponentDoc>

      {/* 10. FooterMenu */}
      <ComponentDoc
        id="footer-menu"
        name="FooterMenu"
        path="src/components/menus/footer-menu.js"
        badges={['UI Molecule', 'Navigation']}
        description="Accessible navigation menu linking to core internal service and company pages, formatted for the site footer grid."
        propsList={[]}
        codeSnippet={`import FooterMenu from '../components/menus/footer-menu';

<FooterMenu />`}
      >
        <div style={{ background: '#162e51', padding: '24px', borderRadius: '6px' }}>
          <FooterMenu />
        </div>
      </ComponentDoc>

      {/* 11. Sidebar */}
      <ComponentDoc
        id="sidebar"
        name="Sidebar"
        path="src/components/sidebar.js"
        badges={['UI Molecule', 'Interactive', 'Drawer']}
        description="Collapsible overlay sidebar with expandable page bundles and close button trigger. Typically controlled by general layout state."
        propsList={[
          { name: 'hidden', type: 'boolean', required: true, defaultVal: 'true', description: 'Controls visibility of the sidebar drawer.' },
          { name: 'close', type: 'function', required: true, defaultVal: 'undefined', description: 'Callback function triggered when clicking the close button or background overlay.' },
        ]}
        codeSnippet={`import Sidebar from '../components/sidebar';

const [hidden, setHidden] = useState(true);

<button onClick={() => setHidden(false)}>Open Sidebar</button>
<Sidebar hidden={hidden} close={() => setHidden(true)} />`}
      >
        <div>
          <button
            type="button"
            className="sg-btn sg-btn--active"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? 'Close Live Sidebar Preview' : 'Open Live Sidebar Preview'}
          </button>
          <span style={{ marginLeft: '12px', fontSize: '13px', color: '#64748b' }}>
            Current state: <strong>{sidebarOpen ? 'Open (Visible)' : 'Hidden'}</strong>
          </span>
          <Sidebar hidden={!sidebarOpen} close={() => setSidebarOpen(false)} />
        </div>
      </ComponentDoc>

      {/* 12. SkipNavLink */}
      <ComponentDoc
        id="skip-nav-link"
        name="SkipNavLink"
        path="src/components/skip-nav.js"
        badges={['UI Atom', 'Accessibility']}
        description="Accessible skip navigation links enabling keyboard and screen reader users to bypass repetitive header navigation and jump directly to #main-content or #footer--section."
        propsList={[
          { name: 'id', type: 'string', required: false, defaultVal: "''", description: 'Optional DOM id attribute.' },
          { name: 'children', type: 'node', required: false, defaultVal: "'Skip to content'", description: 'Link label text.' },
        ]}
        codeSnippet={`import { SkipNavLink } from '../components/skip-nav';

<SkipNavLink />`}
      >
        <div style={{ padding: '8px 0' }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
            These links are positioned offscreen for visual users by default, and become prominently visible upon keyboard focus (<kbd>Tab</kbd>):
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <SkipNavLink />
          </div>
        </div>
      </ComponentDoc>

      {/* 13. Pagination */}
      <ComponentDoc
        id="pagination"
        name="Pagination"
        path="src/components/pagination.js"
        badges={['UI Molecule', 'Interactive', 'Gatsby PageContext']}
        description="Accessible pagination controls with previous/next navigation buttons and a page position indicator."
        propsList={[
          { name: 'pageContext', type: 'object', required: true, defaultVal: '{}', description: 'Pagination context object containing previousPagePath, nextPagePath, humanPageNumber, and numberOfPages.' },
        ]}
        codeSnippet={`import Pagination from '../components/pagination';

<Pagination
  pageContext={{
    previousPagePath: '/case-studies',
    nextPagePath: '/case-studies/page/3',
    humanPageNumber: 2,
    numberOfPages: 5,
  }}
/>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Page 1 of 5 (Next link only):
            </span>
            <Pagination
              pageContext={{
                previousPagePath: null,
                nextPagePath: '/case-studies/page/2',
                humanPageNumber: 1,
                numberOfPages: 5,
              }}
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Middle Page 3 of 5 (Both Previous and Next):
            </span>
            <Pagination
              pageContext={{
                previousPagePath: '/case-studies/page/2',
                nextPagePath: '/case-studies/page/4',
                humanPageNumber: 3,
                numberOfPages: 5,
              }}
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              Last Page 5 of 5 (Previous link only):
            </span>
            <Pagination
              pageContext={{
                previousPagePath: '/case-studies/page/4',
                nextPagePath: null,
                humanPageNumber: 5,
                numberOfPages: 5,
              }}
            />
          </div>
        </div>
      </ComponentDoc>
    </section>
  );
};

export default ButtonsAndNavSection;
