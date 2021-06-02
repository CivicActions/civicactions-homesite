import React from 'react';
import {graphql} from 'gatsby';
import ReactMarkdown from "react-markdown";
import GeneralLayout from '../layouts/general';
import {Helmet} from "react-helmet";
import CaseStudyHero from "../components/case-study-hero";
import Quote from "../components/quote";
import PrimaryPageCTA from "../components/primary-page-cta";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const CaseStudyTemplate = ({data}) => {
  const caseStudy = data.allStrapiCaseStudy.edges[0].node;
    console.log(caseStudy);
  return (
    <GeneralLayout>
        <Helmet>
            <title data-react-helmet="true">{caseStudy.Title}</title>
        </Helmet>
        <div className='case-studies'>
            <CaseStudyHero
                client={caseStudy.Client_Name}
                title={caseStudy.Title}
                description={caseStudy.Summary}
            />

            {caseStudy.Hero_Image[0] &&
            <div className='case-study--hero-image'>
                <img src={caseStudy.Hero_Image[0].url} alt={caseStudy.Hero_Image[0].alternativeText}></img>
                {caseStudy.Hero_Image[0].caption && <span className='caption'>{caseStudy.Hero_Image[0].caption}</span> }
            </div>
            }

            {caseStudy.Stats.length  && <section className='section--case-study--stats'>
            <div className='stats--wrapper'>
                <div className='inner'>
                    {caseStudy.Stats.map(({stat}, index) => (
                        <div className='single-stat'>
                            <p className='stat--number'>{caseStudy.Stats[index].Numerical_Element}</p>
                            <p className='body stat--text'>{caseStudy.Stats[index].Content_Element}</p>
                        </div>

                    ))}
                </div>
            </div>

        </section>}
            {caseStudy.Quote &&
            <Quote
                quote={caseStudy.Quote.Quote}
                source={caseStudy.Quote.Source}
            />
            }

            {caseStudy.Challenge_Goal &&
            <section className='section--case-study--challenge-to-tools'>
                <div className='inner'>
                    <div className='case-study-challenge-goal'>
                        <div className='challenge'>
                            <h2>The challenge</h2>
                            <ReactMarkdown className='body' source={caseStudy.Challenge_Goal.Challenge}/>
                            <p className='body'>{caseStudy.Challenge_Goal.Challenge}</p>
                        </div>
                        <div className='goal'>
                            <h3>Client goal</h3>
                            <ReactMarkdown className='body' children={caseStudy.Challenge_Goal.Client_Goal}/>

                        </div>
                    </div>
                    <div className='case-study--expertise-tools'>
                        <div className='expertise'>
                            <h3>Expertise</h3>
                            <ReactMarkdown className='body' children={caseStudy.Expertise[0].Expertise_Content}/>
                        </div>
                        <div className='tools'>
                            <h3>Tools and technologies</h3>
                            <ReactMarkdown className='body'
                                           children={caseStudy.Tools_Technologies[0].Tools_Technologies_Content}/>
                        </div>
                    </div>
                </div>
            </section>
            }


{caseStudy.Approach.length &&
        <section className='section--case-study--approaches'>

                {caseStudy.Approach.map(({node}, index) => (
                    <div className='inner'>
                        {index === 0 &&
                            <div className='first-approach'>
                                <h2>{caseStudy.Approach[index].Title}</h2>
                                <ReactMarkdown className='body' children={caseStudy.Approach[index].Text}/>
                            </div>
                        }
                        {index != 0 &&
                        <div className={caseStudy.Approach[index].Image ? 'approach--with-image' : 'approach'}>

                                <div className='title-text--wrapper'>
                                    <h3>{caseStudy.Approach[index].Title}</h3>
                                    <ReactMarkdown className='body' children={caseStudy.Approach[index].Text}/>
                                </div>
                            {caseStudy.Approach[index].Image && <div className='image--wrapper'>
                                <div>
                                    <img src={caseStudy.Approach[index].Image[0].url}
                                         alt={caseStudy.Approach[index].Image[0].alternativeText}></img>
                                        {caseStudy.Approach[index].Image[0].caption &&
                                        <span className='caption'>{caseStudy.Approach[index].Image[0].caption}</span>
                                        }
                                </div>

                            </div>
                            }

                        </div>
                        }

                    </div>
                ))}

        </section>}


        {caseStudy.Key_Outcome.length && <section className='section--case-study--outcomes'>
            <h2>Key outcomes</h2>
            <div className='inner'>

                {caseStudy.Key_Outcome.map(({node}, index) => (
                    <div className='key-outcome'>
                        <p className='label'>{caseStudy.Key_Outcome[index].Title}</p>
                        <ReactMarkdown className='body' children={caseStudy.Key_Outcome[index].Text} />
                    </div>
                ))}
            </div>
        </section> }

            {caseStudy.staff_profiles.length &&
        <section className='section--case-study--staff'>
            <div className='inner'>
                <h2>Meet the team</h2>
                <div className='related-staff--wrapper'>
                {caseStudy.staff_profiles.map(({node}, index) => (
                    <div className='related-staff'>
                        {caseStudy.staff_profiles[index].Image &&
                        <GatsbyImage image={getImage(caseStudy.staff_profiles[index].Image)} alt={''} />
                        }
                        <p className='body staff-name'><a href={caseStudy.staff_profiles[index].Path}>
                            {caseStudy.staff_profiles[index].Name}
                        </a></p>
                        <p className='body staff-role'>{caseStudy.staff_profiles[index].Role}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>}
            {caseStudy.Related_Case_Studies.length &&
        <section className='section--case-study--related'>
            <h2>Related case studies</h2>
            <div className='inner'>

                {caseStudy.Related_Case_Studies.map(({node}, index) => (
                    <div className='related-case-study'>
                        <a href={caseStudy.Related_Case_Studies[index].Path}>
                        {caseStudy.Related_Case_Studies[index].Cover_Image[0] && <img src={caseStudy.Related_Case_Studies[index].Cover_Image[0].url} alt={caseStudy.Related_Case_Studies[index].Cover_Image[0].alternativeText}/>}

                            {caseStudy.Related_Case_Studies[index].Title}
                        </a>

                    </div>
                ))}
            </div>
        </section>}
            <PrimaryPageCTA
                title='Let’s build a public success story.'
                subtitle='Get in touch to start.'
                primaryButtonText='Put us to work'
                secondaryButtonText='Join our team'
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
          Text
          Image  {
            url
            alternativeText
            caption
          }
          Title
        }
        Challenge_Goal {
          Challenge
          Client_Goal
        }
        Client_Name
        Path
        Expertise {
          Expertise_Content
        }
        Hero_Image {
            url
            alternativeText
            caption
          }
        Key_Outcome {
          Text
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
          Tools_Technologies_Content
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
      }
    }
  }
}

`;

export default CaseStudyTemplate;

