import React from "react";
//components
import Head from "../components/Head";
import ErrorBoundary from "../components/ErrorHandler";

//media-imgs
import HeartIcon from '../imgMedia/icons8-trust-64.png';
import MusicIcon from '../imgMedia/icons8-musical-notes-64.png';

// styles
import '../styles/index.css';

// translations
import { useTranslation } from "react-i18next";


export default function App(props) {
  const { t } = useTranslation();

  return (
        <div className="homeContainer">
          {/* testing error boundaries component */}
          <ErrorBoundary>
          <Head title={t('home.titlePage')} />
          <div className="homeParagraph">
            <p className="textHome">{t('home.textHome1')}</p>
            <img src={HeartIcon} className="iconsHome" alt="Heart Love"/>
            <p className="textHome">{t('home.textHome2')}</p>
            <img src={MusicIcon} className="iconsHome" alt="Music Melody" />
            <p className="textHome">{t('home.textHome3')}</p>
          </div>
          </ErrorBoundary>
          {/* end test */}
        </div>
      )
}
