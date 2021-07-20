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
            allDatoCmsPortfolio(sort: {order: DESC, fields: dateTime}){
            edges {
                node {
                    title
                    slug
                    dateTime(fromNow: true)
                    id
                    cover {
                        fluid {
                            src
                        }
                    }
                    locale
                    seoLine
                    techUsed
                }     
            }
        }
    }`);
    console.log(data);

    return (
            // <Layout>
                <div className="portfolioContainer">
                    <p className="textHome centered">{t('portfolio.welcomeText')}</p>
                    <Head title={t('portfolio.titlePage')} lang={_lang}/>  
                    <ul className="projectList" >
                        {data.allDatoCmsPortfolio.edges.filter(project => project.node.locale === _lang).map(filteredProject => {
                              const _src = filteredProject.node.cover.fluid.src;
                              return (
                                  <li key={filteredProject.node.id}>
                                      <Link className="navLinkProject"  to={`/Portfolio/${filteredProject.node.slug}`}>
                                          <div className="titleDateProject">
                                              <p className="projectTitle">{filteredProject.node.title}</p>
                                              <p className="projectDatePublished">{filteredProject.node.dateTime}</p>
                                          </div>
                                          <hr className="hrProject" />
                                          <div className="imgProjectCont">
                                              <img src={_src} alt={filteredProject.node.title} className="imgProject" />
                                          </div>
                                          <p className="seoText centered marginsLR">SEO: {String(filteredProject.node.seoLine).split(",").join(" ")}</p>
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