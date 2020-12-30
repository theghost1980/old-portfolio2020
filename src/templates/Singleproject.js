import React from 'react'; 
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
//translation
import { useTranslation } from 'react-i18next';
//media-imgs
import iconLink from '../imgMedia/icons8-external-link-64.png';
//components
import Head from '../components/Head';

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      mainImage {
        fluid {
          src
        }
      }
      description {
          json
      }
      projectUrl
    }
  }
`

const Singleproject = (props) => {
  const { t } = useTranslation();

    const _dataJSON = props.data.contentfulProjects.description.json;
    const Text = ({ children }) => <p className="paraPost">{children}</p>;
    const H1 = ({ children }) => <h1 className="h1Post">{children}</h1>;
    const H2 = ({ children }) => <h2 className="h2Post">{children}</h2>;
    const H3 = ({ children }) => <h3 className="h3Post">{children}</h3>;
    const H4 = ({ children }) => <h4 className="h4Post">{children}</h4>;
    const H5 = ({ children }) => <h5 className="h5Post">{children}</h5>;
    const _CODE = ({ children }) => <code className="codePost">{children}</code>;
    const QUO = ({ children }) => <blockquote className="quoPost">{children}</blockquote>;

    const options = {
      renderMark: {
        [MARKS.CODE]: text => <_CODE>{text}</_CODE>,
      },
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
        [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
        [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
        [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
        [BLOCKS.HR]: () => <hr className="hrPost" />,
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.QUOTE]: (node, children) => <QUO>{children}</QUO>,
        "embedded-asset-block": node => {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <div className="postImgContainer">
                <img alt={alt} src={url} className="imgInPost" />
              <p className="textTitleImg">{alt}</p>
            </div>
          )
        },
      }
    };

    return (
        <div className="blogTemplateContainer">
          <Head title={props.data.contentfulProjects.title}/>
            <p className="postTitlePost">{props.data.contentfulProjects.title}</p>
            <div className="divLinkVisit">  
                <p className="projectVisitText">{t('project.visit')}</p>
                <a href={props.data.contentfulProjects.projectUrl}>
                  <img src={iconLink} alt="Icon Link" className="iconLinkProject" />
                </a>
            </div>
            <p className="postDatePost centered">{t('project.published')} {props.data.contentfulProjects.publishedDate}</p>
            <hr className="hrPost2" />
            {documentToReactComponents(_dataJSON,options)}
        </div>
    )
}

export default Singleproject;
