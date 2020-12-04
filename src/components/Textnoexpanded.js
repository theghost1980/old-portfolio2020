import React from 'react';
// translation
import { useTranslation } from "react-i18next";

const TextNE = (props) => {
    // translation
    const { t } = useTranslation();

    return (
        <div className={`titlesContainer ${props.expanded ? 'hide': 'show'}`}>
            <p className={`fontPrimary noBottomMargin ${props.topMargin ? 'TopMargin titleBig ': 'noTopMargin subtitleMedium'}`}>Saturno Mangieri</p>
            <p className={`fontSecondary noTopMargin ${props.topMargin ? 'subtitleMedium ': 'subtitleSmall'}`}>{t('navbar.subtTitle')}</p>
        </div>
    )
}

export default TextNE;