import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// components
import Head from '../components/Head';
//translation
import { useTranslation } from 'react-i18next';

const Blog = (props) => {
    const { i18n } = useTranslation();
    const _lang = i18n.language || 'es';

    //loading data from contentful api
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsBlogpost(sort: {order: DESC, fields: dateTime}){
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
                }     
            }
        }
    }`);
    // console.log(data);

    return (
            <div className="containerBlogList">
                <Head title="Blog" lang={_lang}/> 
                <ul className="postList">
                    {data.allDatoCmsBlogpost.edges.filter(post => post.node.locale === _lang).map(filteredPost => {
                        const _url = filteredPost.node.cover.fluid.src;
                        return (
                            <li className="post" key={filteredPost.node.id}>
                                <Link className="navLinkPost" to={`/Blog/${filteredPost.node.slug}`}>
                                    <div className="containerTextPost">
                                        <p className="postTitle">{filteredPost.node.title}</p>
                                        <p className="postDate">{filteredPost.node.dateTime}</p>
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

export default Blog;