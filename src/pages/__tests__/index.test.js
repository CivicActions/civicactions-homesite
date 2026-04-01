import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../index';

// IntersectionObserver is not available in jsdom
beforeAll(() => {
  globalThis.IntersectionObserver = class IntersectionObserver {
    observe() {
      // mock implementation
    }
    unobserve() {
      // mock implementation
    }
    disconnect() {
      // mock implementation
    }
  };
});

jest.mock('../../layouts/homepage', () => {
  const PropTypes = require('prop-types');
  function HomepageLayoutMock({ children }) {
    return <div>{children}</div>;
  }
  HomepageLayoutMock.propTypes = { children: PropTypes.node };
  return HomepageLayoutMock;
});

jest.mock('../../components/seo', () => () => null);
jest.mock('../../components/card.js', () => ({ title, link }) => (
  <a href={link}>{title}</a>
));
jest.mock('../../components/clients.js', () => () => <div>Clients</div>);
jest.mock('../../components/case-study-teaser.js', () => () => (
  <div>Case Studies</div>
));
jest.mock('../../components/press-release-teaser.js', () => ({ title }) => (
  <div>{title}</div>
));
jest.mock('../../components/link-button', () => ({ text, src }) => (
  <a href={src}>{text}</a>
));
jest.mock('../../components/external-link-button', () => ({ text, src }) => (
  <a href={src}>{text}</a>
));
jest.mock(
  '../../components/primary-page-cta.js',
  () =>
    ({ title, subtitle }) => (
      <div>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    ),
);
jest.mock('gatsby-plugin-image', () => ({
  StaticImage: ({ alt }) => <img alt={alt} />,
}));
jest.mock('gatsby', () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(() => ({
    allStrapiCaseStudy: {
      nodes: [
        {
          id: '1',
          Title: 'Test Case Study',
          Client_Name: 'Test Client',
          Path: '/case-studies/test',
          Summary: 'A test summary',
          Sort_Order: 1,
          Promoted_to_Homepage: 'True',
          Cover_Image: {
            url: '/img.png',
            alternativeText: 'test',
            caption: '',
          },
          Service_Category: { Category: 'Web & CMS' },
        },
      ],
    },
  })),
}));

describe('HomePage', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test('renders the hero heading', () => {
    expect(
      screen.getByText(
        'We help government deliver trusted public services through open technology and design.',
      ),
    ).toBeInTheDocument();
  });

  test('renders the See our work CTA link', () => {
    const link = screen.getByRole('link', { name: 'See our work' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/case-studies');
  });

  test('renders the services section heading', () => {
    expect(
      screen.getByText('Digital first. Data driven. Human centered.'),
    ).toBeInTheDocument();
  });

  test('renders all six service cards', () => {
    const serviceLinks = [
      { name: 'Web & CMS', href: '/services#web-cms' },
      {
        name: 'IT & Service Modernization',
        href: '/services#service-modernization',
      },
      { name: 'Product & Design', href: '/services#product-design' },
      { name: 'Security & Compliance', href: '/services#security-compliance' },
      { name: 'Data Services', href: '/services#data-services' },
      {
        name: 'Workforce Development',
        href: '/services#workforce-development',
      },
    ];

    serviceLinks.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  test('renders the Explore Services link', () => {
    const link = screen.getByRole('link', { name: 'Explore Services' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/services');
  });

  test('renders the case studies section heading', () => {
    expect(
      screen.getByText(
        'Resilient agencies. Accessible services. Happier people.',
      ),
    ).toBeInTheDocument();
  });

  test('renders the quote section', () => {
    expect(
      screen.getByText(/CivicActions always looked for the optimal/),
    ).toBeInTheDocument();
    expect(screen.getByText('National Science Foundation')).toBeInTheDocument();
  });

  test('renders the learn with us section', () => {
    expect(screen.getByText('Learn with us.')).toBeInTheDocument();
    expect(
      screen.getByText('Designing a Veteran-first online experience'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Improving the ATO process with Compliance as Code'),
    ).toBeInTheDocument();
  });

  test('renders the Explore posts and videos external link', () => {
    const link = screen.getByRole('link', { name: 'Explore posts and videos' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://medium.com/civicactions');
  });

  test('renders the team section', () => {
    expect(
      screen.getByText('Our people make the difference.'),
    ).toBeInTheDocument();
    const teamLink = screen.getByRole('link', { name: 'Meet our team' });
    expect(teamLink).toHaveAttribute('href', '/team');
  });

  test('renders the primary page CTA', () => {
    expect(
      screen.getByText(/Let['’]s build a public success story\./),
    ).toBeInTheDocument();
    expect(screen.getByText('Get in touch to start.')).toBeInTheDocument();
  });
});
