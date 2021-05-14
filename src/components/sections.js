import React from 'react';

export const Section = ({ content }) => {
  const { title, desc, subSections } = content;
  console.log('sub', subSections);
  return (
    <section>
      <div class="inner">
        <h2>{title}</h2>
        <p>{desc}</p>
        {subSections ? <SubSections subSections={subSections} /> : null}
      </div>
    </section>
  );
};

export const SubSections = ({ subSections }) => {
  return subSections.map((subSection, index) => {
    const { title, desc } = subSection;
    console.log('here Ia am', subSection);
    console.log('SubSection Title', title);
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
