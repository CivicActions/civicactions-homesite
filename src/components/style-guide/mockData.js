import webCmsIcon from '../../files/icons/web-cms-icon.svg';
import securityIcon from '../../files/icons/security-compliance-icon.svg';
import annualUpgradesIcon from '../../files/icons/annual-upgrades-icon.svg';
import henryPooleImg from '../../files/images/henry-poole.png';
import irisIbekweImg from '../../files/images/iris-ibekwe.png';
import coverImg from '../../files/images/cover.png';

export const mockIcons = {
  webCms: webCmsIcon,
  security: securityIcon,
  annualUpgrades: annualUpgradesIcon,
};

export const mockImages = {
  henryPoole: henryPooleImg,
  irisIbekwe: irisIbekweImg,
  cover: coverImg,
};

// CaseStudyTeaser mock array
export const mockCaseStudies = [
  {
    id: 'case-1',
    Title: 'Modernizing the Federal Permitting Dashboard',
    Client_Name: 'U.S. Department of Transportation',
    Sort_Order: 1,
    Summary: 'Increasing transparency and efficiency for multi-billion dollar infrastructure initiatives across agencies.',
    Cover_Image: {
      url: coverImg,
      alternativeText: 'Federal Permitting Project'
    },
    Path: '/case-study/us-dot'
  },
  {
    id: 'case-2',
    Title: 'Transforming Veterans Healthcare Portals',
    Client_Name: 'U.S. Department of Veterans Affairs',
    Sort_Order: 2,
    Summary: 'Creating accessible, user-friendly digital tools that streamline access to essential healthcare benefits.',
    Cover_Image: {
      url: coverImg,
      alternativeText: 'Veterans Affairs Portal'
    },
    Path: '/case-study/va-health'
  }
];

// Bio mock array
export const mockBioMembers = [
  {
    id: 'bio-1',
    Name: 'Henry Poole',
    Role: 'Co-Founder & Director of Government Solutions',
    Linkedin: 'https://www.linkedin.com/company/civicactions',
    image: [
      {
        url: henryPooleImg,
        alternativeText: 'Henry Poole'
      }
    ],
    Body: {
      data: {
        Body: 'Henry is passionate about open technology, civic engagement, and empowering public servants to deliver better, more accessible government services.'
      }
    }
  }
];

// TabMobile mock array
export const mockTabs = [
  {
    tab_header: 'Digital Strategy',
    tabs_section: [
      {
        header: 'Human-Centered Design',
        body: {
          data: {
            body: 'We engage directly with citizens and civil servants to understand needs and design accessible, intuitive digital experiences.'
          }
        }
      },
      {
        header: 'Agile Procurement',
        body: {
          data: {
            body: 'Transforming acquisition processes to buy digital services in modular, incremental releases.'
          }
        }
      }
    ],
    cta_tab: {
      header: 'Ready to elevate your strategy?',
      button_text: 'Explore Strategy Services',
      button_link: '/services'
    }
  },
  {
    tab_header: 'Cloud & Modernization',
    tabs_section: [
      {
        header: 'DevSecOps Automation',
        body: {
          data: {
            body: 'Automating security, continuous integration, and rapid delivery for federal cloud workloads.'
          }
        }
      }
    ],
    cta_tab: {
      header: 'Accelerate your cloud migration',
      button_text: 'Learn About DevSecOps',
      button_link: '/services'
    }
  }
];

// Mock Sections
export const mockSectionsData = [
  {
    title: 'Open Source in Government',
    desc: 'Public money should fund public code. We build with open source to ensure transparency, security, and long-term sustainability.',
    subSections: [
      {
        title: 'Vendor Independence',
        desc: 'Open source ensures governments retain ownership of their systems and data.'
      },
      {
        title: 'Shared Innovation',
        desc: 'Solutions developed for one agency can be adapted and shared across jurisdictions.'
      }
    ]
  }
];

// Mock GatsbyImage object for TeaserGrid
export const mockGatsbyImageData = {
  layout: 'constrained',
  width: 300,
  height: 300,
  images: {
    fallback: {
      src: irisIbekweImg,
      srcSet: '',
      sizes: '(min-width: 300px) 300px, 100vw'
    }
  }
};
