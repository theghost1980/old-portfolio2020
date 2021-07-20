import React from 'react';
import { graphql } from 'gatsby';
//translation
import { useTranslation } from 'react-i18next';
//components
import Head from '../components/Head';

export const data = graphql`
  query PostQuery($slug: String!) {
    dataEN: datoCmsBlogpost(slug: {eq: $slug}, locale: {eq : "en"}) {
      id
      cover {
        fluid {
          src
        }
      }
      dateTime(fromNow: true)
      locale
      slug
      title
      categories
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
    dataES: datoCmsBlogpost(slug: {eq: $slug}, locale: {eq : "es"}) {
      id
      cover {
        fluid {
          src
        }
      }
      dateTime(fromNow: true)
      locale
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

const Singlepost = (props) => {
  const { t, i18n } = useTranslation();
  const _lang = i18n.language;
  const dataPost = (_lang === 'es' ? props.data.dataES : props.data.dataEN);

    return ( 
        <div className="blogTemplateContainer">
          <div className="marginsLR">
           <Head title={dataPost.title} lang={_lang}/>
            <p className="postTitlePost">{dataPost.title}</p>
            <div className="mainImgPostCont">
              <img src={dataPost.cover.fluid.src} className="mainImagePost boxShadow1" alt={dataPost.cover.fluid.src}/>
            </div>
            <p className="postDatePost">{t('blog.written')} {dataPost.dateTime}</p>
            <hr className="hrPost2" />
            <div 
              dangerouslySetInnerHTML={{
                __html: dataPost.contentNode.childMarkdownRemark.html
              }}
            />
            </div>
        </div>
    )
}

export default Singlepost;
