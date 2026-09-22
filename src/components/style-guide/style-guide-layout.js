import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NAV_GROUPS = [
  {
    title: 'Foundations',
    items: [
      { id: 'foundations-typography', label: 'Typography Scale' },
      { id: 'foundations-colors', label: 'Color Palette' },
    ],
  },
  {
    title: 'Buttons & Actions',
    items: [
      { id: 'link-button', label: 'LinkButton (Internal)' },
      { id: 'external-link-button', label: 'LinkButton (External)' },
      { id: 'social-icon', label: 'SocialIcon' },
      { id: 'social-icons', label: 'SocialIcons' },
    ],
  },
  {
    title: 'Navigation & Menus',
    items: [
      { id: 'header', label: 'Header' },
      { id: 'red-header', label: 'RedHeader' },
      { id: 'main-menu', label: 'MainMenu' },
      { id: 'mobile-menu', label: 'MobileMenu' },
      { id: 'footer', label: 'Footer' },
      { id: 'footer-menu', label: 'FooterMenu' },
      { id: 'sidebar', label: 'Sidebar' },
      { id: 'skip-nav-link', label: 'SkipNavLink' },
      { id: 'pagination', label: 'Pagination' },
    ],
  },
  {
    title: 'Heroes, Banners & CTAs',
    items: [
      { id: 'banner', label: 'Banner' },
      { id: 'hero', label: 'Hero' },
      { id: 'hero-with-buttons', label: 'Hero (with Buttons)' },
      { id: 'case-study-hero', label: 'CaseStudyHero' },
      { id: 'primary-page-cta', label: 'PrimaryPageCTA' },
      { id: 'ditap-page-cta', label: 'DitapPageCTA' },
    ],
  },
  {
    title: 'Cards & Teasers',
    items: [
      { id: 'card', label: 'Card (Interactive)' },
      { id: 'icons-card', label: 'Card (Icons Presentation)' },
      { id: 'case-study-teaser', label: 'CaseStudyTeaser' },
      { id: 'press-release-teaser', label: 'PressReleaseTeaser' },
      { id: 'press-release-grid', label: 'PressReleaseGrid' },
      { id: 'teaser-grid', label: 'TeaserGrid' },
    ],
  },
  {
    title: 'Content & Media',
    items: [
      { id: 'offering', label: 'Offering' },
      { id: 'bio', label: 'Bio' },
      { id: 'quote', label: 'Quote' },
      { id: 'staff-quote', label: 'StaffQuote' },
      { id: 'clients-section', label: 'ClientsSection' },
      { id: 'video', label: 'Video' },
      { id: 'tab-mobile', label: 'TabMobile' },
      { id: 'sections', label: 'Sections & SubSections' },
      { id: 'seo', label: 'SEO Head Component' },
    ],
  },
];

const StyleGuideLayout = ({ children }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredGroups = NAV_GROUPS.map((group) => {
    const matchedItems = group.items.filter((item) =>
      item.label.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return { ...group, items: matchedItems };
  }).filter((group) => group.items.length > 0);

  const totalComponents = NAV_GROUPS.reduce(
    (acc, group) => (group.title !== 'Foundations' ? acc + group.items.length : acc),
    0
  );

  return (
    <div className="sg-page">
      {/* Top Bar Header */}
      <header className="sg-topbar">
        <div className="sg-topbar__left">
          <h1 className="sg-topbar__title">
            CivicActions Design System
            <span className="sg-topbar__badge">{totalComponents} Components</span>
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <input
            type="search"
            className="sg-topbar__search"
            placeholder="Filter components..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            aria-label="Filter components in style guide"
          />
          <nav className="sg-topbar__links">
            <Link to="/">Back to Site</Link>
          </nav>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="sg-layout">
        {/* Sticky Sidebar Navigation */}
        <aside className="sg-layout__sidebar" aria-label="Component Directory">
          <div style={{ marginBottom: '16px', padding: '0 8px', fontSize: '13px', color: '#64748b' }}>
            Interactive reference and design system catalog for all frontend components.
          </div>
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="sg-nav-group">
              <div className="sg-nav-group__title">
                {group.title} ({group.items.length})
              </div>
              <ul className="sg-nav-group__list">
                {group.items.map((item) => (
                  <li key={item.id} className="sg-nav-group__item">
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filteredGroups.length === 0 && (
            <div style={{ padding: '16px 8px', color: '#94a3b8', fontSize: '13px' }}>
              No components match &ldquo;{filterQuery}&rdquo;
            </div>
          )}
        </aside>

        {/* Documentation Content Area */}
        <main className="sg-layout__main">{children}</main>
      </div>
    </div>
  );
};

export default StyleGuideLayout;

StyleGuideLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
