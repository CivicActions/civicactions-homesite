import React from 'react';
import { graphql } from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from "../components/hero";
import {Helmet} from "react-helmet";
import ReactMarkdown from "react-markdown";

const GeneralTemplate = ({ data }) => {

  const generals = data.allStrapiGeneral.nodes[0];
  console.log(generals);
  return (
    <RedLayout>
        <Helmet>
            <title data-react-helmet="true">{generals.Title}</title>
        </Helmet>
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
        Body
        Path
        Title
      }
    }
  }
`;

export default GeneralTemplate;
