import React from 'react';

const COLOR_SWATCHES = [
  { group: 'Primary Brand Colors', colors: [
    { name: '$primary-red / $colors-red-50', hex: '#d83933', role: 'Brand red, primary CTAs, active highlights' },
    { name: '$primary-blue', hex: '#162e51', role: 'Deep navy, brand headers, text contrast' },
  ]},
  { group: 'Secondary & Accent Colors', colors: [
    { name: '$secondary-red', hex: '#8b0a03', role: 'Dark red, hover states' },
    { name: '$secondary-blue', hex: '#1a4480', role: 'Royal blue, link highlights' },
    { name: '$secondary-alt-blue', hex: '#005ea2', role: 'Accessible medium blue' },
    { name: '$light-blue', hex: '#73b3e7', role: 'Light sky blue accent' },
    { name: '$accent-warm-gold', hex: '#fa9441', role: 'Warm gold/orange highlight' },
    { name: '$accent-warm-light-gold', hex: '#ffbc78', role: 'Soft gold accent' },
  ]},
  { group: 'Mint Cool Series', colors: [
    { name: '$colors-mint-cool-40v', hex: '#00a398', role: 'Vibrant mint/teal accent' },
    { name: '$colors-mint-cool-60v', hex: '#0f6460', role: 'Medium dark teal' },
    { name: '$colors-mint-cool-80v', hex: '#0b4b3f', role: 'Deep forest teal' },
    { name: '$colors-mint-cool-100v', hex: '#123131', role: 'Darkest spruce/slate' },
  ]},
  { group: 'Neutrals & Grayscale', colors: [
    { name: '$colors-white', hex: '#ffffff', role: 'Card backgrounds, light text' },
    { name: '$gray-05', hex: '#f0f0f0', role: 'Light section background tint' },
    { name: '$gray-10', hex: '#e6e6e6', role: 'Subtle borders, dividers' },
    { name: '$gray-30', hex: '#adadad', role: 'Muted outlines, disabled states' },
    { name: '$gray-50', hex: '#757575', role: 'Secondary copy, captions' },
    { name: '$gray-90 / $colors-black', hex: '#171717', role: 'Primary text, dark headings' },
  ]},
];

const TYPOGRAPHY_SCALE = [
  { level: 'Heading 1 (H1)', tag: '<h1>', sample: 'Elevating Government Digital Services', usage: 'Page main hero & title banner', notes: '48px / 3rem, Bold (700)' },
  { level: 'Heading 2 (H2)', tag: '<h2>', sample: 'Trusted by Organizations That Serve the People', usage: 'Major page sections and group headers', notes: '36px / 2.25rem, Bold (700)' },
  { level: 'Heading 3 (H3)', tag: '<h3>', sample: 'Modernizing Federal Procurement & Cloud', usage: 'Sub-sections, card titles, featured items', notes: '28px / 1.75rem, Semi-Bold (600)' },
  { level: 'Heading 4 (H4)', tag: '<h4>', sample: 'Human-Centered Design and Agile Delivery', usage: 'Component block titles and subsection headers', notes: '22px / 1.375rem, Semi-Bold (600)' },
  { level: 'Heading 5 (H5)', tag: '<h5>', sample: 'DevSecOps & Platform Engineering', usage: 'Feature cards, accordion triggers', notes: '18px / 1.125rem, Semi-Bold (600)' },
  { level: 'Heading 6 (H6)', tag: '<h6>', sample: 'Security, Compliance and FedRAMP', usage: 'Smallest headings, metadata labels', notes: '16px / 1rem, Bold (700)' },
];

const FoundationsSection = () => {
  return (
    <section className="sg-category-section">
      <div className="sg-category-section__header">
        <h2 className="sg-category-section__title">Design Foundations</h2>
        <p className="sg-category-section__desc">
          Core typographic hierarchy and brand color variables defined across the CivicActions site.
        </p>
      </div>

      {/* Typography Spec */}
      <article id="foundations-typography" className="sg-component-card">
        <header className="sg-component-card__header">
          <div className="sg-component-card__title-group">
            <h3 className="sg-component-card__title">Typography Scale</h3>
            <span className="sg-component-card__path">src/sass/base/_typography.scss</span>
          </div>
          <div className="sg-component-card__badges">
            <span className="sg-badge sg-badge--atom">Foundation</span>
            <span className="sg-badge sg-badge--molecule">Design Tokens</span>
          </div>
        </header>

        <p className="sg-component-card__description">
          The typographic scale establishes clarity and accessible reading hierarchy across editorial pages, case studies, and services.
        </p>

        <div className="sg-component-card__preview">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {TYPOGRAPHY_SCALE.map((item, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    {item.level} &mdash; <code>{item.tag}</code>
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>{item.notes}</span>
                </div>
                {idx === 0 && <h1 style={{ margin: 0 }}>{item.sample}</h1>}
                {idx === 1 && <h2 style={{ margin: 0 }}>{item.sample}</h2>}
                {idx === 2 && <h3 style={{ margin: 0 }}>{item.sample}</h3>}
                {idx === 3 && <h4 style={{ margin: 0 }}>{item.sample}</h4>}
                {idx === 4 && <h5 style={{ margin: 0 }}>{item.sample}</h5>}
                {idx === 5 && <h6 style={{ margin: 0 }}>{item.sample}</h6>}
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>Usage: {item.usage}</div>
              </div>
            ))}

            {/* Body Copy Samples */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                Body Paragraphs &amp; Lead Text
              </div>
              <p className="body-large" style={{ marginBottom: '12px' }}>
                <strong>Lead / Body Large:</strong> We use Agile, DevOps, open source software, and human-centered design to elevate government digital services and build public trust.
              </p>
              <p className="body" style={{ marginBottom: '12px' }}>
                <strong>Standard Body:</strong> CivicActions transforms how government delivers digital experiences for the public. From modernizing high-visibility agency platforms to delivering agile training, our cross-functional teams bring deep civic tech expertise.
              </p>
              <p className="body-small" style={{ margin: 0, color: '#515150' }}>
                <strong>Body Small / Caption:</strong> Accessibility statement: We strive to exceed WCAG 2.1 AA standards for all digital assets.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Color Palette Spec */}
      <article id="foundations-colors" className="sg-component-card">
        <header className="sg-component-card__header">
          <div className="sg-component-card__title-group">
            <h3 className="sg-component-card__title">Color Palette</h3>
            <span className="sg-component-card__path">src/sass/base/_colors.scss</span>
          </div>
          <div className="sg-component-card__badges">
            <span className="sg-badge sg-badge--atom">Foundation</span>
            <span className="sg-badge sg-badge--molecule">Design Tokens</span>
          </div>
        </header>

        <p className="sg-component-card__description">
          Color palette palette system supporting dark, light, and high-contrast accessible color combinations.
        </p>

        <div className="sg-component-card__preview">
          {COLOR_SWATCHES.map((group, gIdx) => (
            <div key={gIdx} style={{ marginBottom: gIdx < COLOR_SWATCHES.length - 1 ? '32px' : 0 }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#162e51', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {group.group}
              </h4>
              <div className="sg-color-grid">
                {group.colors.map((c, cIdx) => (
                  <div key={cIdx} className="sg-color-swatch">
                    <div className="sg-color-swatch__color" style={{ backgroundColor: c.hex }} />
                    <div className="sg-color-swatch__info">
                      <div className="sg-color-swatch__name">{c.name}</div>
                      <div className="sg-color-swatch__hex">{c.hex}</div>
                      <div className="sg-color-swatch__role">{c.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default FoundationsSection;
