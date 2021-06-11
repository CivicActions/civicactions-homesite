import React from 'react';

export const SkipNavLink = ({ id, children = 'Skip to content', ...props }) => {
  return (
    <div>
      <a {...props} href='#main-content' className='skip-nav-link'>
        Skip to content
      </a>
      <a {...props} href='#footer' className='skip-nav-link'>
        Skip to footer
      </a>
    </div>
  );
};
