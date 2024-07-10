import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const SustainabilityPage = () => {
  return (
    <RedLayout className='sustainability-page'>
      <div className='hero-component'>
        <div className='inner'>
          <h1>Sustainability</h1>
          <p className='body'>
            The team at CivicActions understands the importance of building environmentally sustainable digital products and services. Every business, and every role, needs to understand how it impacts our climate. As a distributed company, we have lightened our footprint, but this doesn’t make us carbon-neutral. Since our inception, our team has taken on projects to make a positive difference on our environment.
          </p>
          <p className='body'>
            We are working to align with the <a href='https://unfccc.int/process-and-meetings/the-paris-agreement' className='external-link-white'>Paris Agreement</a>, and reduce our footprint. We must all work to see that the world stays below a 2° C increase by the end of this century and that we avoid the worst impacts of climate change. As part of our commitment, we  have a  <a href='https://guidebook.civicactions.com/en/latest/company-policies/sustainability/' className='external-link-white'>Sustainability Policy</a>, which includes our Sustainable Procurement Policy in our guidebook and a pledge (below) that helps us prioritize how to approach the impact we want to have.
          </p>
        </div>
      </div>
      <section className='section--sustainability-pledge'>
        <div className='inner'>
          <h2>2024 Sustainability Pledge</h2>
          <p className='body'>
            The pledge focuses on three key areas: Measurement & Monitoring, Education & Engagement, and Public Reporting. Let's dive into the details of our plan for a more sustainable future!
          </p>
          <div className='list--wrapper'>
            <h3>Measurement & Monitoring: Data-Driven Sustainability</h3>
            <p className='body'>Measurement & Monitoring: Data-Driven Sustainability</p>
            <ul className='body'>
              <li>Establishing baseline performance budgets for websites and client projects</li>
              <li>Implementing cloud-based tools to measure server-side CO₂ emissions</li>
              <li>Conducting an inventory of infrastructure assets for optimization</li>
              <li>Introducing per-sprint front-end performance score reviews</li>
            </ul>
          </div>
          <div className='list--wrapper'>
            <h3>Education & Engagement: Fostering a Culture of Sustainability</h3>
            <p className='body'>In 2024, CivicActions will focus on:</p>
            <ul className='body'>
              <li>Integrating environmental sustainability into onboarding processes</li>
              <li>Engaging clients on environmental action plan alignment</li>
              <li>Developing sustainability language for project charters</li>
              <li>Establishing a sustainable procurement policy</li>
              <li>Contributing to <a href='https://www.w3.org/blog/2023/introducing-web-sustainability-guidelines/' className='external-link-white'>W3C's Draft Web Sustainability Guidelines</a></li>
              <li>Tracking and offsetting employee business travel</li>
            </ul>
          </div>
          <div className='list--wrapper'>
            <h3>Public Reporting: Transparency and Accountability</h3>
            <p className='body'>For 2024, CivicActions commits to:</p>
            <ul className='body'>
              <li>Launching CivicActions.com/sustainability to share progress on key goals</li>
              <li>Tracking Google Lighthouse scores as a proxy for Customer Experience, accessibility, and sustainability</li>
              <li>Purchasing <a href='https://www.energystar.gov/products/computers' className='external-link-white'>ENERGY STAR®</a> rated devices made with partially recycled materials</li>
              <li>Counting and estimating CO₂ emissions from company flights</li>
            </ul>
          </div>
          <p className='body'>
            CivicActions' sustainability pledge for 2024 sets a new standard for environmental responsibility in the digital sector. By focusing on measurable outcomes, fostering a culture of sustainability, and maintaining transparency, CivicActions is not just talking about change – we’re actively working towards it.
          </p>
        </div>
      </section>
    </RedLayout>
  );
};

export default SustainabilityPage;

export const Head = () => (
  <SEO
    title='Sustainability'
    description='The team at CivicActions understands the importance of building environmentally sustainable digital products and services.'
  />
);
