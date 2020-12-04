import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// components
import Head from '../components/Head';
//translation
import { useTranslation } from 'react-i18next';

const blog = (props) => {
    const { i18n } = useTranslation();
    const _lang = i18n.language || 'es';

    //loading data from contentful api
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}){
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, yyyy")
                    id
                    mainImage {
                        file {
                            url
                        }
                    }
                    lang
                }     
            }
        }
    }`);
    // console.log(data);

    return (
            <div className="containerBlogList">
                <Head title="Blog" />
                <ul className="postList">
                    {data.allContentfulBlogPost.edges.filter(post => post.node.lang === _lang).map(filteredPost => {
                        // console.log(filteredPost);
                        const _url = filteredPost.node.mainImage.file.url;
                        return (
                            <li className="post" key={filteredPost.node.id}>
                                <Link className="navLinkPost" to={`/blog/${filteredPost.node.slug}`}>
                                    <div className="containerTextPost">
                                        <p className="postTitle">{filteredPost.node.title}</p>
                                        <p className="postDate">{filteredPost.node.publishedDate}</p>
                                    </div>
                                    <div className="containerImgPost">
                                        <img src={_url} alt={filteredPost.node.title} className="blogListImg"/>
                                    </div>
                                </Link>
                            </li>
                        )
                        }) 
                    }
                </ul>
            </div>
    )
}

export default blog;