import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

//components
import Head from '../components/Head';
// translations
import { useTranslation } from 'react-i18next';

const Portfolio = (props) => {
    const { t, i18n } = useTranslation();
    const _lang = i18n.language || 'es';

    //loading data from contentful api
    const data = useStaticQuery(graphql`
    query{
        allContentfulProjects(sort: {fields: publishedDate, order: DESC}){
            edges {
                node {
                    id
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, yyyy")
                    mainImage {
                        file {
                            url
                        }
                    }
                    seo {
                        seo
                    }
                    lang
                }     
            }
        }
        }
    `);

    return (
            // <Layout>
                <div className="portfolioContainer">
                    <Head title={t('portfolio.titlePage')} lang={_lang}/>  
                    <ul className="projectList" >
                        {data.allContentfulProjects.edges.filter(project => project.node.lang === _lang).map(filteredProject => {
                              const _src = filteredProject.node.mainImage.file.url;
                              return (
                                  <li key={filteredProject.node.id}>
                                      <Link className="navLinkProject"  to={`/Portfolio/${filteredProject.node.slug}`}>
                                          <div className="titleDateProject">
                                              <p className="projectTitle">{filteredProject.node.title}</p>
                                              <p className="projectDatePublished">{filteredProject.node.publishedDate}</p>
                                          </div>
                                          <div className="seoContainer">
                                              <p className="seoText">SEO: {filteredProject.node.seo.seo}</p>
                                          </div>
                                          <hr className="hrProject" />
                                          <div className="imgProjectCont">
                                              <img src={_src} alt={filteredProject.node.title} className="imgProject" />
                                          </div>
                                      </Link>
                                  </li>
                              )
                        }) 
                        }
                    </ul> 
                </div>
            // </Layout>
    )
}

export default Portfolio;