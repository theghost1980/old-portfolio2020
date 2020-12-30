import React, { useState, useEffect } from 'react';
//components
import Head from '../components/Head';
// translations
import { useTranslation } from "react-i18next";
//media-imgs
import santaImg from '../imgMedia/santaImg.jpg';
//+++++++++++++++++
// testing npm install file-saver 
import Filesaver from 'file-saver';
// +++++++++++++++++

// clave: navidad2020$$

const Specialpage = () => {
    const [password, setPassword] = useState('');

    const { t, i18n } = useTranslation();
    const _lang = i18n.language || 'es';

    // test gtag
    useEffect(() => {
        console.log('gtag object');
        console.log(window.gtag);
      }, []);
    // end test

    const handleDownload = () => {
        // console.log('password field:',password);
        if (password === "navidad2020$$"){
            console.log(`${t('music.found')}`);
            alert(`${t('music.found')}`);
            try {
                  const _path = "https://gitlab.com/saturnoman/portfolio/-/raw/master/static/DFiles/Digital-Album-Inspiration.zip";
                  Filesaver.saveAs( _path, "Inspiración de Navidad");
                  //sending data to google analytics
                  window.gtag('event', 'download', {
                    'method': 'true'
                  });
                  console.log('Event sent: download, success');

              } catch (err) {
                  console.log('=====Fatal Error Downloading Files=====');
                  console.log(err);
                  console.log('Please contact me using the contact page');
                  console.log('=====End Error Downloading Files=====');
                  //sending data to google analytics
                  window.gtag('event', 'download', {
                    'method': 'failed'
                  });
                  console.log('Event sent: download, failed download by error');
          
            }
        } else if (password !== "navidad2020$$") {
            console.log(`${t('music.results')}`);
            alert(`${t('music.results')}`);
            //sending data to google analytics
            window.gtag('event', 'download', {
                'method': 'failed attempt'
            });
            console.log('Event sent: download, failed attempt');
        }
    }

    return (
        <div className="specialCont">
            <Head title={t('music.specialTitle')} lang={_lang}/> 
            <div className="buttonSpeCont">
                <input type="text" 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="inputPassSpe" 
                    autoFocus
                    placeholder={t('music.input')}
                />
                <button className="btnSpecialDownload"
                onClick={handleDownload}
                >
                    {t('music.download')}
                </button>
            </div>
            <h1 className="coloredFontTitle">{t('music.titlespe')}</h1>
            <p className="coloredParagr">{t('music.line1')}</p>
            <h2 className="coloredFontTitle">{t('music.titlespe2')}</h2>
            <p className="coloredParagr">{t('music.line2')}</p>
            <h3 className="coloredFontTitle centered">{t('music.formatKey')}</h3>
            <p className="coloredParagr">{t('music.line3')}</p>
            <h2 className="coloredFontTitle">{t('music.titlespe3')}</h2>
            <p className="coloredParagr">{t('music.line4')}</p>
            <img src={santaImg} alt="hohoho feliz navidad" className="santaImg" />
        </div>
    )
}

export default Specialpage;