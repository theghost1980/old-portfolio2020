import React from "react";
//components
import Head from "../components/Head";
import Errorboundary from "../components/Errorhandler";

//media-imgs
import HeartIcon from '../imgMedia/icons8-trust-64.png';
import MusicIcon from '../imgMedia/icons8-musical-notes-64.png';

// styles
import '../styles/index.css';

// translations
import { useTranslation } from "react-i18next";


export default function App(props) {
  const { t, i18n } = useTranslation();
    const _lang = i18n.language || 'es';

  return (
        <div className="homeContainer">
          {/* testing error boundaries component */}
          <Errorboundary>
          <Head title={t('home.titlePage')} lang={_lang}/> 
          <div className="homeParagraph">
            <h1 className="textHome">{t('home.textHome1')}</h1>
            <img src={HeartIcon} className="iconsHome" alt="Heart Love"/>
            <p className="textHome">{t('home.textHome2')}</p>
            <img src={MusicIcon} className="iconsHome" alt="Music Melody" />
            <h2 className="textHome">{t('home.textHome3')}</h2>
          </div>
          </Errorboundary>
          {/* end test */}
        </div>
      )
}
