import React from 'react';
import { graphql } from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from "../components/hero";
import ReactMarkdown from "react-markdown";
import SEO from "../components/seo";

const GeneralTemplate = ({ data }) => {

  const generals = data.allStrapiGeneral.nodes[0];

  return (
    <RedLayout>
        <SEO
            title={generals.SEO.OGTitle}
            description={generals.SEO.OGDescription}
        />
      <Hero
          title={generals.Title}
          description={generals.Hero_text}
      />
      <section className='section--general--body'>
          <div className='inner'>
              <ReactMarkdown className='body' children={generals.Body}/>
          </div>
      </section>

    </RedLayout>
  );
};

export const query = graphql`
  query generalContent {
    allStrapiGeneral {
      nodes {
        Hero_text
        Body {
          data {
            Body
          }
        }
        Path
        Title
        SEO {
          OGTitle
          OGDescription
        }
      }
    }
  }
`;

export default GeneralTemplate;
