import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ content, classes, withH1, i }) => {
  const { title, desc, subSections } = content;
  const { sectionClasses, additionalClasses, innerClasses } = classes;

  return (
    <section className={sectionClasses}>
      <div class={`inner ${innerClasses}`}>
        <div className={additionalClasses}>
          <h2>{title}</h2>
          <p>{desc}</p>
          {subSections ? <SubSections subSections={subSections} /> : null}
        </div>
      </div>
    </section>
  );
};

export const SubSections = ({ subSections }) => {
  return subSections.map((subSection, index) => {
    const { title, desc } = subSection;
    return (
      <div key={index} className="subsection">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  });
};

export const Sections = ({ sections, classes, withH1 }) => {
  return sections.map((item, index) => {
    return <Section key={index} content={item} classes={classes} withH1={withH1} i={index} />;
  });
};

Sections.propTypes = {
  sections: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
