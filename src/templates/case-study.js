import React from 'react';
import {graphql} from 'gatsby';
import ReactMarkdown from "react-markdown";
import GeneralLayout from '../layouts/general';
import {Helmet} from "react-helmet";
import CaseStudyHero from "../components/case-study-hero";
import Quote from "../components/quote";
import CoverImage from '../files/images/case-study-teasers/case-study-teaser-img-2.png';

const CaseStudyTemplate = ({data}) => {
  const caseStudy = data.allStrapiCaseStudy.edges[0].node;

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

            {caseStudy.Hero_Image &&
            <div className='case-study--hero-image'>
                <img src={caseStudy.Hero_Image.relativePath}></img>
            </div>
            }

        <section className='section--case-study--stats'>
            <div className='inner'>
            {caseStudy.Stats.map(({stat}, index) => (
                <div className='single-stat'>
                    <p className='stat--number'>{caseStudy.Stats[index].Numerical_Element}</p>
                    <p className='body stat--text'>{caseStudy.Stats[index].Content_Element}</p>
                </div>

            ))}
            </div>
        </section>

        <Quote
            quote={caseStudy.Quote.Quote}
            source={caseStudy.Quote.Source}
            />

        <section className='section--case-study--challenge-to-tools'>
            <div className='inner'>
                <div className='case-study-challenge-goal'>
                    <div className='challenge'>
                        <h2>The challenge</h2>
                        <ReactMarkdown source={caseStudy.Challenge_Goal.Challenge} />
                        <p className='body'>{caseStudy.Challenge_Goal.Challenge}</p>
                    </div>
                    <div className='goal'>
                        <h3>Client goal</h3>
                        <ReactMarkdown children={caseStudy.Challenge_Goal.Client_Goal} />

                    </div>
                </div>
                <div className='case-study--expertise-tools'>
                    <div className='expertise'>
                        <h3>Expertise</h3>
                        <ReactMarkdown children={caseStudy.Expertise[0].Expertise_Content} />
                    </div>
                    <div className='tools'>
                        <h3>Tools and technologies</h3>
                        <ReactMarkdown children={caseStudy.Tools_Technologies[0].Tools_Technologies_Content} />
                    </div>
                </div>
            </div>
        </section>



        <section className='section--case-study--approaches'>

                {caseStudy.Approach.map(({node}, index) => (
                    <div className='inner'>
                        {index === 0 &&
                            <div className='first-approach'>
                                <h2>{caseStudy.Approach[index].Title}</h2>
                                <ReactMarkdown  children={caseStudy.Approach[index].Text}/>
                            </div>
                        }
                        {index != 0 &&
                        <div className={caseStudy.Approach[index].Image ? 'approach--with-image' : 'approach'}>

                                <div className='title-text--wrapper'>
                                    <h3>{caseStudy.Approach[index].Title}</h3>
                                    <ReactMarkdown children={caseStudy.Approach[index].Text}/>
                                </div>
                            <div className='image--wrapper'>
                                <img src={CoverImage}></img>
                                {/*{index != 0 &&
                                <div>{caseStudy.Approach[index].Image &&
                                <img src={caseStudy.Approach[index].Image.relativePath} alt={caseStudy.Approach[index].Image.alt}></img>}
                                {caseStudy.Approach[index].Image.caption && <span className='caption'>{caseStudy.Approach[index].Image.caption}</span>}
                                </div> }*/}
                            </div>

                        </div>
                        }

                    </div>
                ))}

        </section>

        {/* Todo Key outcomes*/}
        {caseStudy.Key_Outcome && <section className='section--case-study--outcomes'>
            <div className='inner'>
                <h2>Key outcomes</h2>
                {caseStudy.Key_Outcome.map(({node}, index) => (
                    <div>
                        <p className='body label'>{caseStudy.Key_Outcome[index].Title}</p>
                        <ReactMarkdown children={caseStudy.Key_Outcome[index].Text} />
                    </div>
                ))}
            </div>
        </section> }


        <section className='section--case-study--staff'>
            <div className='inner'>
                <h2>Meet the team</h2>
                <div className='related-staff--wrapper'>
                {caseStudy.staff_profiles.map(({node}, index) => (
                    <div className='related-staff'>
                        {caseStudy.staff_profiles[index].Image && <img src={caseStudy.staff_profiles[index].Image.relativePath}/>}
                        <p className='body staff-name'><a href={caseStudy.staff_profiles[index].Path}>
                            {caseStudy.staff_profiles[index].Name}
                        </a></p>
                        <p className='body staff-role'>{caseStudy.staff_profiles[index].Role}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
        <section className='section--case-study--related'>
            <div className='inner'>
                <h2>Related case studies</h2>
                {caseStudy.Related_Case_Studies.map(({node}, index) => (
                    <div>
                        {caseStudy.Related_Case_Studies[index].Image && <img src={caseStudy.Related_Case_Studies[index].Image.relativePath}/>}
                        <a href={caseStudy.Related_Case_Studies[index].Path}>
                            {caseStudy.Related_Case_Studies[index].Title}
                        </a>

                    </div>
                ))}
            </div>
        </section>

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
          Image {
            relativePath
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
          relativePath
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
          Image {
            relativePath
          }
          Name
          Role
          Path
        }
      }
    }
  }
}

`;

export default CaseStudyTemplate;

