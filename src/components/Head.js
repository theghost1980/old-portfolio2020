import React from 'react';
import { Helmet } from  'react-helmet';
//media-imgs
import imageView from '../imgMedia/miniViewSite.png';
// translations
import { useTranslation } from "react-i18next";

const Head = ({ title }) => {
    const { t } = useTranslation();

    const content = t('head.content');
    const keywords = t('head.keywords');
    const _title = t('head.title');
    const _subTitle = t('navbar.subtTitle');

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="author" content="Saturno Mangieri" />
            <meta name="title" content={_title} />
            <meta name="description" content={content} />
            <meta name="keywords" content={keywords} />
            <meta property="og:image" content={imageView} />
            <meta property="og:description" content={content}  />
            <meta property="og:title" content={_title}></meta>
            <title>{`${title} | ${_subTitle}`}</title>
        </Helmet>
    )
}

export default Head;
