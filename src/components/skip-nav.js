import React from 'react';

export const SkipNavLink = ({ id, children = 'Skip to content', ...props }) => {
  return (
    <div>
      <a {...props} href='#main-content' className='skip-nav-link'>
        Skip to content
      </a>
      <a {...props} href='#footer--section' className='skip-nav-link'>
        Skip to footer
      </a>
    </div>
  );
};
