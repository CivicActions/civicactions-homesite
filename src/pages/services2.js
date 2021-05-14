import React from 'react';
import '../sass/styles.scss';
import GeneralLayout from '../layouts/general';
import { servicesData } from '../data';
import { Sections } from '../components/sections';

const Services2Page = () => {
  return (
    <GeneralLayout>
      <Sections sections={servicesData} />
    </GeneralLayout>
  );
};

export default Services2Page;
