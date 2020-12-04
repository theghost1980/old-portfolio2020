import React from 'react';
// components
import LanguageMenu from './languageMenu';
// translations
import { useTranslation } from "react-i18next";

const Footer = (props) => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="footerDivRow">
                <p className="normalFooterp">{t('footer.txtFooter1')}</p>
                <LanguageMenu />
            </div>
            <p className="smallFooterp">{t('footer.txtFooter2')}</p>
            <ul className="ulFooter">
                <li>GatsbyJs</li>
                <li>ReactJs</li>
                <li>GraphQL</li>
                <li>Contentful</li>
                <li>Javascript</li>
                <li>Pexels</li>
                <li>Icons8</li>
            </ul>
        </footer>
    )
}

export default Footer;