import React from 'react';
import '../sass/styles.scss';
import GeneralLayout from '../layouts/general';
import { servicesData } from '../data';
import { Sections } from '../components/sections';

const sectionClasses = {
  sectionClasses: 'services--section',
  additionalClasses: 'additional'
};

const Services2Page = () => {
  return (
    <GeneralLayout>
      <Sections classes={sectionClasses} sections={servicesData} withH1='true' />
    </GeneralLayout>
  );
};

export default Services2Page;
