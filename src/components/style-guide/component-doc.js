import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ComponentDoc = ({
  id,
  name,
  path,
  badges = [],
  description,
  propsList = [],
  codeSnippet,
  children,
  framed = false,
  defaultBackground = 'light',
}) => {
  const [bgMode, setBgMode] = useState(defaultBackground); // 'light' | 'dark' | 'neutral'
  const [showCode, setShowCode] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeSnippet) {
      navigator.clipboard?.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getBadgeClass = (badge) => {
    const b = badge.toLowerCase();
    if (b.includes('atom') || b.includes('button') || b.includes('icon')) return 'sg-badge--atom';
    if (b.includes('layout') || b.includes('header') || b.includes('footer')) return 'sg-badge--layout';
    if (b.includes('interactive') || b.includes('menu') || b.includes('accordion')) return 'sg-badge--interactive';
    if (b.includes('strapi') || b.includes('data')) return 'sg-badge--strapi';
    return 'sg-badge--molecule';
  };

  return (
    <article id={id} className="sg-component-card">
      <header className="sg-component-card__header">
        <div className="sg-component-card__title-group">
          <h3 className="sg-component-card__title">
            <a href={`#${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {name}
            </a>
          </h3>
          <span className="sg-component-card__path">{path}</span>
        </div>
        <div className="sg-component-card__badges">
          {badges.map((b, idx) => (
            <span key={idx} className={`sg-badge ${getBadgeClass(b)}`}>
              {b}
            </span>
          ))}
        </div>
      </header>

      {description && <p className="sg-component-card__description">{description}</p>}

      {/* Preview Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 24px 8px 24px' }}>
        <h4 className="sg-component-card__section-title" style={{ margin: 0 }}>Live Preview & Variants</h4>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            className={`sg-btn ${bgMode === 'light' ? 'sg-btn--active' : ''}`}
            onClick={() => setBgMode('light')}
            title="Light background"
          >
            Light
          </button>
          <button
            type="button"
            className={`sg-btn ${bgMode === 'neutral' ? 'sg-btn--active' : ''}`}
            onClick={() => setBgMode('neutral')}
            title="Neutral gray background"
          >
            Neutral
          </button>
          <button
            type="button"
            className={`sg-btn ${bgMode === 'dark' ? 'sg-btn--active' : ''}`}
            onClick={() => setBgMode('dark')}
            title="Dark navy background"
          >
            Dark
          </button>
        </div>
      </div>

      <div
        className={`sg-component-card__preview ${
          framed ? 'sg-component-card__preview--framed' : ''
        } ${
          bgMode === 'dark'
            ? 'sg-component-card__preview--dark'
            : bgMode === 'neutral'
            ? 'sg-component-card__preview--neutral'
            : ''
        }`}
      >
        {children}
      </div>

      {/* Props Specification Table */}
      {propsList && propsList.length > 0 && (
        <>
          <h4 className="sg-component-card__section-title">Props & Inputs</h4>
          <div className="sg-component-card__props">
            <table className="sg-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {propsList.map((p, idx) => (
                  <tr key={idx}>
                    <td className="sg-prop-name">{p.name}</td>
                    <td className="sg-prop-type">{p.type}</td>
                    <td className="sg-prop-default">{p.defaultVal || '—'}</td>
                    <td>
                      {p.required ? (
                        <span className="sg-prop-req">Required</span>
                      ) : (
                        <span style={{ color: '#94a3b8' }}>Optional</span>
                      )}
                    </td>
                    <td>{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Code Snippet Section */}
      {codeSnippet && (
        <div className="sg-component-card__code-section">
          <div className="sg-component-card__code-header">
            <h4 className="sg-component-card__section-title" style={{ margin: 0 }}>JSX Usage Example</h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="sg-btn"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? 'Hide Code' : 'Show Code'}
              </button>
              {showCode && (
                <button
                  type="button"
                  className="sg-btn"
                  onClick={handleCopy}
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              )}
            </div>
          </div>
          {showCode && (
            <pre className="sg-component-card__code-pre">
              <code>{codeSnippet}</code>
            </pre>
          )}
        </div>
      )}
    </article>
  );
};

export default ComponentDoc;

ComponentDoc.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  propsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultVal: PropTypes.string,
      required: PropTypes.bool,
      description: PropTypes.string,
    })
  ),
  codeSnippet: PropTypes.string,
  children: PropTypes.node.isRequired,
  framed: PropTypes.bool,
  defaultBackground: PropTypes.oneOf(['light', 'dark', 'neutral']),
};
