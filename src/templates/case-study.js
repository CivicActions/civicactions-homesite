import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";
import GeneralLayout from '../layouts/general';
import CaseStudyHero from "../components/case-study-hero";
import Quote from "../components/quote";
import PrimaryPageCTA from "../components/primary-page-cta";
import SEO from "../components/seo";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

const CaseStudyTemplate = ({ data }) => {
  const caseStudy = data.allStrapiCaseStudy.edges[0].node;
  const { Client_Name, Related_Case_Studies, Hero_Image, Cover_Image } = caseStudy;

  // If an og image is uploaded in strapi use it, otherwise default to the cover image.
  let ogImage = caseStudy.SEO.OGImage ? getSrc(caseStudy.SEO.OGImage) : Cover_Image.url;

  return (
    <GeneralLayout>
      <SEO
        title={caseStudy.SEO.OGTitle}
        description={caseStudy.SEO.OGDescription}
        image={ogImage}
        // Indicates that the cover_image url is an external link. If it is return true.
        isExternalImage={ogImage === Cover_Image.url}
      />

      <div className='case-studies'>
        <CaseStudyHero
          client={Client_Name}
          title={caseStudy.Title}
          description={caseStudy.Summary}
        />

        {Hero_Image &&
          <section className='case-study--hero-image'><div className='inner'>
            <img src={Hero_Image.url} alt={Hero_Image.alternativeText}></img>
            {Hero_Image.caption && <span className='caption'>{Hero_Image.caption}</span>}
          </div>
          </section>
        }

        {caseStudy.Stats[0] && <section className='section--case-study--stats'>
          <div className='stats--wrapper'>
            <div className='inner'>
              {caseStudy.Stats.map(({ stat }, index) => (
                <div className='single-stat'>
                  <h2 className='stat--number'>{caseStudy.Stats[index].Numerical_Element}</h2>
                  <p className='body stat--text'>{caseStudy.Stats[index].Content_Element}</p>
                </div>

              ))}
            </div>
          </div>

        </section>

        }
        {caseStudy.Stats &&
        caseStudy.Quote &&
          <Quote
            quote={caseStudy.Quote.Quote}
            source={caseStudy.Quote.Source}
            classes='first-quote no-img'
          />
        }
        {!caseStudy.Stats &&
          caseStudy.Quote &&
          <Quote
            quote={caseStudy.Quote.Quote}
            source={caseStudy.Quote.Source}
            classes='no-stats-quote first-quote no-img'
          />
        }

        {caseStudy.Challenge_Goal &&
          <section className='section--case-study--challenge-to-tools'>
            <div className='inner'>
              <div className='case-study-challenge-goal'>
                {caseStudy.Challenge_Goal.Challenge && <div className='challenge'>
                  <h2>The challenge</h2>
                  <ReactMarkdown className='body' children={caseStudy.Challenge_Goal.Challenge} />

                </div>}
                {caseStudy.Challenge_Goal.Client_Goal && <div className='goal'>
                  <h3>Client goal</h3>
                  <ReactMarkdown className='body' children={caseStudy.Challenge_Goal.Client_Goal} />

                </div>}
              </div>
               <div className='case-study--expertise-tools'>
                 {caseStudy.Expertise[0].Expertise_Content &&
                <div className='expertise'>
                  <h3>Expertise</h3>
                  <ReactMarkdown className='body' children={caseStudy.Expertise[0].Expertise_Content} />
                </div>}
                 {caseStudy.Tools_Technologies[0].Tools_Technologies_Content &&
                 <div className='tools'>
                  <h3>Tools and technologies</h3>
                  <ReactMarkdown className='body'
                    children={caseStudy.Tools_Technologies[0].Tools_Technologies_Content} />
                </div>}
              </div>
            </div>
          </section>
        }


        {caseStudy.Approach &&
        <section className='section--case-study--approaches'>

          {caseStudy.Approach.map((approachItem, index) => (
            <div className='inner'>
              {index === 0 &&
                <div className='first-approach'>
                  <h2>{approachItem.Title}</h2>
                  <ReactMarkdown className='body' children={approachItem.Text} />
                </div>
              }
              {index !== 0 &&
                <div className={approachItem.Image ? 'approach--with-image' : 'approach'}>

                  <div className='title-text--wrapper'>
                    <h3>{approachItem.Title}</h3>
                    <ReactMarkdown className='body' children={approachItem.Text} />
                  </div>
                  {approachItem.Image && <div className='image--wrapper'>
                    <div>
                      {approachItem.Image.url &&
                        <img src={approachItem.Image.url}
                          alt={approachItem.Image.alternativeText}>
                        </img>
                      }
                      {approachItem.Image.caption &&
                        <div className='caption'>{approachItem.Image.caption}</div>
                      }
                    </div>

                  </div>
                  }

                </div>
              }

            </div>
          ))}

        </section>}

        {/* Todo Key outcomes*/}
        {caseStudy.Key_Outcome && <section className='section--case-study--outcomes'>
          <h2>Key outcomes</h2>
          <div className='inner'>

            {caseStudy.Key_Outcome.map(({ node }, index) => (
              <div className='key-outcome'>
                <p className='label'>{caseStudy.Key_Outcome[index].Title}</p>
                <ReactMarkdown className='body' children={caseStudy.Key_Outcome[index].Text} />
              </div>
            ))}
          </div>
        </section>}


        {caseStudy.staff_profiles.length > 0 && <section className='section--case-study--staff'>
          <div className='inner'>
            <h2>Meet the team</h2>
            <div className='related-staff--wrapper'>
              {caseStudy.staff_profiles.map(({ node }, index) => (
                <div className='related-staff'>
                  {caseStudy.staff_profiles[index].Image &&
                    <GatsbyImage image={getImage(caseStudy.staff_profiles[index].Image)} alt={''} />
                  }
                  <p className='body staff-name'>
                    {/*// Unlinked for MVP soft launch*/}
                    {/*<a href={caseStudy.staff_profiles[index].Path}>*/}
                    {caseStudy.staff_profiles[index].Name}
                    {/*</a>*/}
                  </p>
                  <p className='body staff-role'>{caseStudy.staff_profiles[index].Role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>}
        {Related_Case_Studies.length > 0 &&
          <section className='section--case-study--related'>
            <h2>Related case studies</h2>
            <div className='inner'>

              {caseStudy.Related_Case_Studies.map(({ node }, index) => (
                <div className='related-case-study'>
                  <a href={caseStudy.Related_Case_Studies[index].Path}>
                    {caseStudy.Related_Case_Studies[index].Cover_Image[0] && <img src={caseStudy.Related_Case_Studies[index].Cover_Image[0].url} alt={caseStudy.Related_Case_Studies[index].Cover_Image[0].alternativeText} />}

                    {caseStudy.Related_Case_Studies[index].Title}
                  </a>

                </div>
              ))}
            </div>
          </section>
        }
        <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
        />
      </div>


    </GeneralLayout>
  );
};

export const query = graphql`
query CaseStudyQuery($pagePath: String!) {
  allStrapiCaseStudy(filter: { Path: { eq: $pagePath } }) {
    edges {
      node {
        Approach {
          Text {
            data {
              Text
            }
          }
          Image  {
            url
            alternativeText
            caption
          }
          Title
        }
        Challenge_Goal {
          Challenge {
            data {
              Challenge
            }
          }
          Client_Goal  {
            data {
              Client_Goal
            }
          }
        }
        Client_Name
        Path
        Expertise {
          Expertise_Content {
            data {
              Expertise_Content
            }
          }
        }
        Cover_Image {
          url
        }
        Hero_Image {
            url
            alternativeText
            caption
          }
        Key_Outcome {
          Text {
            data {
              Text
            }
          }
          Title
        }
        Quote {
          Quote
          Source
        }
        Related_Case_Studies {
          Path
          Title
          Cover_Image {
            url
            alternativeText
          }
        }
        Service_Category {
          Category
        }
        Sort_Order
        Stats {
          Content_Element
          Numerical_Element
        }
        Summary
        Title
        Tools_Technologies {
          Tools_Technologies_Content {
            data {
              Tools_Technologies_Content
            }
          }
        }
        staff_profiles {
          Name
          Role
          Path
          Image {
            childImageSharp {
              gatsbyImageData(width: 264, height: 264, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        SEO {
          OGTitle
          OGDescription
          OGImage {
            childImageSharp {
              gatsbyImageData(
                width: 1200
              )
            }
          }
        }
      }
    }
  }
}

`;

export default CaseStudyTemplate;

