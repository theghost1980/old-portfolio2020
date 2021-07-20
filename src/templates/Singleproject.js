import React from 'react'; 
import { graphql } from 'gatsby';
//translation
import { useTranslation } from 'react-i18next';
//media-imgs
import iconLink from '../imgMedia/icons8-external-link-64.png';
//components
import Head from '../components/Head';

export const data = graphql`
  query($slug: String!) {
    dataEN: datoCmsPortfolio(slug: {eq: $slug}, locale: {eq : "en"}) {
      id
      cover {
        fluid {
          src
        }
      }
      dateTime(fromNow: true)
      locale
      seoLine
      techUsed
      url
      slug
      title
      categories
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
    dataES: datoCmsPortfolio(slug: {eq: $slug}, locale: {eq : "es"}) {
      id
      cover {
        fluid {
          src
        }
      }
      dateTime(fromNow: true)
      locale
      seoLine
      techUsed
      url
      slug
      title
      categories
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const Singleproject = (props) => {
  const { t, i18n } = useTranslation();
  const _lang = i18n.language;
  const dataProject = (_lang === 'es' ? props.data.dataES : props.data.dataEN);

    return (
        <div className="blogTemplateContainer">
          <div className="marginsLR">
            <Head title={dataProject.title} lang={_lang}/>
              <p className="postTitlePost">{dataProject.title}</p>
              <p className="textHome centered">URL: <a href={dataProject.url} target="_blank" rel="noreferrer">{dataProject.url}</a></p>
              <div className="mainImgPostCont">
                <img src={dataProject.cover.fluid.src} className="mainImagePost boxShadow1" alt={dataProject.cover.fluid.src}/>
              </div>
              <p className="postDatePost">{t('project.published')} {dataProject.dateTime}</p>
              <hr className="hrPost2" />
              <div 
                dangerouslySetInnerHTML={{
                  __html: dataProject.contentNode.childMarkdownRemark.html
                }}
              />
              <hr className="hrPost2" />
            </div>
        </div>
    )
}

export default Singleproject;
