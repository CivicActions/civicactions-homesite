import React from 'react';

export const Section = ({ content }) => {
  const { title, desc, subSections, sectionClasses, additionalClasses } = content;
  return (
    <section className={sectionClasses}>
      <div class="inner">
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

export const Sections = ({ sections }) => {
  return sections.map((item, index) => {
    return <Section key={index} content={item} />;
  });
};
