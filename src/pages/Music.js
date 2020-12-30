import React, { useState, useEffect } from 'react';
//components
import Slider from '../components/Slider';
import Head from '../components/Head';

// translations
import { useTranslation } from "react-i18next";

//media-imgs
import iconGallery from '../imgMedia/icons8-image-96.png';
import iconClose from '../imgMedia/icons8-multiply-64.png';
import cdInspiration from '../imgMedia/Inspiration-caratula.jpg';
import cdBhajananda from '../imgMedia/bhajananda-estar-en-ti.png';
import cdParapeto from '../imgMedia/parapeto-largo-viaje-del-sol.png';
import { Link } from 'gatsby';


//props, lists & declarations
const _listEN = [
    {'id': '0-imgCarousel-Gallery', 'credits':'Venezuelan Embassy in Morocco', 'caption': 'Concert & Traditional music workshop. Morocco 2015'},
    {'id': '1-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditation & Workshop. Barquisimeto - Venezuela 2011'},
    {'id': '2-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditation & Workshop. Barquisimeto - Venezuela 2011'},
    {'id': '3-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditation & Workshop. Barquisimeto - Venezuela 2011'},
    {'id': '4-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'},
    {'id': '5-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'},
    {'id': '6-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'},
    {'id': '7-imgCarousel-Gallery', 'credits':'Venezuelan Embassy in Algeria', 'caption': 'Venezuelan Music Concert in Algeria - Africa 2015'},
    {'id': '8-imgCarousel-Gallery', 'credits':'Venezuelan Embassy in Algeria', 'caption': 'Venezuelan Music Concert in Algeria - Africa 2015'},
    {'id': '9-imgCarousel-Gallery', 'credits':'Carter Photo & Video', 'caption': 'Romantic Concert in Barquisimeto - Venezuela 2012'},
    {'id': '10-imgCarousel-Gallery', 'credits':'Gabriela Borjas', 'caption': 'Sai Youth gathering in Caracas - Venezuela 2012'},
    {'id': '11-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'},
    {'id': '12-imgCarousel-Gallery', 'credits':'Gabriela Borjas', 'caption': 'Sai Youth gathering in Caracas - Venezuela 2012'},
    {'id': '13-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'},
    {'id': '14-imgCarousel-Gallery', 'credits':'', 'caption': 'Performing in local restaurant in Quito - Ecuador 2009'},
    {'id': '15-imgCarousel-Gallery', 'credits':'', 'caption': 'Performing in local restaurant in Quito - Ecuador 2009'},
    {'id': '16-imgCarousel-Gallery', 'credits':'', 'caption': 'Gathering with Krishna devotees in Quito - Ecuador 2009'},
    {'id': '17-imgCarousel-Gallery', 'credits':'', 'caption': 'Ibarra - Ecuador 2009'},
    {'id': '18-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Recording Inspiration Album in Barquisimeto - Venezuela 2006'},
    {'id': '19-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Recording Inspiration Album in Barquisimeto - Venezuela 2006'},
    {'id': '20-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Recording Inspiration Album in Barquisimeto - Venezuela 2006'},
    {'id': '21-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Recording Inspiration Album in Barquisimeto - Venezuela 2006'},
    {'id': '22-imgCarousel-Gallery', 'credits':'', 'caption': 'Music show in local restaurant in Casablanca - Morocco 2014'},
    {'id': '23-imgCarousel-Gallery', 'credits':'', 'caption': 'Music show in local restaurant in Rabat - Morocco 2014'},
    {'id': '24-imgCarousel-Gallery', 'credits':'Zoè Perrín', 'caption': 'Music show in ArtLina in Rabat - Morocco 2015'},
    {'id': '25-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concert in Cervantes Institute in Rabat - Morocco 2014'},
    {'id': '26-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concert in Cervantes Institute in Rabat - Morocco 2014'},
    {'id': '27-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concert in Cervantes Institute in Rabat - Morocco 2014'},
    {'id': '28-imgCarousel-Gallery', 'credits':'Jesús Albarrete', 'caption': 'Music show in Le Grand Comptoir in Rabat - Morocco 2014'},
    {'id': '29-imgCarousel-Gallery', 'credits':'', 'caption': 'Concert with Kike Pinto. Romulo Gallegos House Caracas - Venezuela 2010'}
  ];
  const _listES = [
    {'id': '0-imgCarousel-Gallery', 'credits':'Embajada de Venezuela en Marruecos', 'caption': 'Concierto y taller de música tradicional. Marruecos 2015'},
    {'id': '1-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditaciones & Talleres. Barquisimeto - Venezuela 2011'},
    {'id': '2-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditaciones & Talleres. Barquisimeto - Venezuela 2011'},
    {'id': '3-imgCarousel-Gallery', 'credits':'Susana Montesinos', 'caption': 'Meditaciones & Talleres. Barquisimeto - Venezuela 2011'},
    {'id': '4-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'},
    {'id': '5-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'},
    {'id': '6-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'},
    {'id': '7-imgCarousel-Gallery', 'credits':'Embajada de Venezuela en Argelia', 'caption': 'Concierto de música venezolana en Argelia - Africa 2015'},
    {'id': '8-imgCarousel-Gallery', 'credits':'Embajada de Venezuela en Argelia', 'caption': 'Concierto de música venezolana en Argelia - Africa 2015'},
    {'id': '9-imgCarousel-Gallery', 'credits':'Carter Photo & Video', 'caption': 'Concierto Romaántico en Barquisimeto - Venezuela 2012'},
    {'id': '10-imgCarousel-Gallery', 'credits':'Gabriela Borjas', 'caption': 'Encuentro de Jóvenes Sai Caracas - Venezuela 2012'},
    {'id': '11-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'},
    {'id': '12-imgCarousel-Gallery', 'credits':'Gabriela Borjas', 'caption': 'Encuentro de Jóvenes Sai Caracas - Venezuela 2012'},
    {'id': '13-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'},
    {'id': '14-imgCarousel-Gallery', 'credits':'', 'caption': 'Presentacioón en restaurantes en Quito - Ecuador 2009'},
    {'id': '15-imgCarousel-Gallery', 'credits':'', 'caption': 'Presentacioón en restaurantes en Quito - Ecuador 2009'},
    {'id': '16-imgCarousel-Gallery', 'credits':'', 'caption': 'Encuentro con la Organización Krishna en Quito - Ecuador 2009'},
    {'id': '17-imgCarousel-Gallery', 'credits':'', 'caption': 'Ibarra - Ecuador 2009'},
    {'id': '18-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Grabando Album Inspiración. Barquisimeto - Venezuela 2006'},
    {'id': '19-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Grabando Album Inspiración. Barquisimeto - Venezuela 2006'},
    {'id': '20-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Grabando Album Inspiración. Barquisimeto - Venezuela 2006'},
    {'id': '21-imgCarousel-Gallery', 'credits':'Licar Vásquez', 'caption': 'Grabando Album Inspiración. Barquisimeto - Venezuela 2006'},
    {'id': '22-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto en restaurantes en Casablanca - Marruecos 2014'},
    {'id': '23-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto en restaurantes en Casablanca - Marruecos 2014'},
    {'id': '24-imgCarousel-Gallery', 'credits':'Zoè Perrín', 'caption': 'Concierto en ArtLina en Rabat - Marruecos 2015'},
    {'id': '25-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concierto en Instituto Cervantes en Rabat - Marruecos 2014'},
    {'id': '26-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concierto en Instituto Cervantes en Rabat - Marruecos 2014'},
    {'id': '27-imgCarousel-Gallery', 'credits':'Uma Dagnino', 'caption': 'Concierto en Instituto Cervantes en Rabat - Marruecos 2014'},
    {'id': '28-imgCarousel-Gallery', 'credits':'Jesús Albarrete', 'caption': 'Concierto en Le Grand Comptoir en Rabat - Marruecos 2014'},
    {'id': '29-imgCarousel-Gallery', 'credits':'', 'caption': 'Concierto con Kike Pinto. Casa Rómulo Gallegos. Caracas - Venezuela 2010'}
  ];
//   end props, list & declarations

const Music = () => {
    const { t, i18n } = useTranslation();
    const _lang = i18n.language || 'es';
    console.log(`lang:${_lang}`);

    const _listCD = [
        {id:1,'songs':'11','styles': t('slider.styles1'),src: cdInspiration, price:10.00, title: t('slider.titleCD1'),'format': t('slider.formatM'), fileSrc:"https://gitlab.com/saturnoman/portfolio/-/raw/master/static/DFiles/Digital-Album-Inspiration.zip", fileName:"Digital-Album-Inspiration.zip"},
        {id:2,'songs':'11','styles': t('slider.styles2'),src: cdBhajananda, price:10.00, title: t('slider.titleCD2'),'format': t('slider.formatM'), fileSrc:"https://gitlab.com/saturnoman/portfolio/-/raw/master/static/DFiles/Bhajananda-CD-Album.zip", fileName:"Bhajananda-CD-Album.zip"},
        {id:3,'songs':'15','styles': t('slider.styles3'),src: cdParapeto, price :10.00, title: t('slider.titleCD3'),'format': t('slider.formatM'), fileSrc:"https://gitlab.com/saturnoman/portfolio/-/raw/master/static/DFiles/Parapeto-CD-Album.zip", fileName:"Parapeto-CD-Album.zip"}
    ];

    const [gallery, setGallery] = useState(false);

     //////////loading paypal Script
     useEffect(() => {
        //TEST <script src="https://www.paypal.com/sdk/js?client-id=ARN1sPZp6DLblYVX_w9k-L3l9cfPhzGuc-ISmWhAPFQ2NDgFhCzzoXdQ9mFrAc8s4CQWO3vPF1fQ6dod&currency=GBP"></script>
        //LIVE "https://www.paypal.com/sdk/js?client-id=ATZS5RnQGQWlVQMwVQoHrRZS0xXnWxgYbZ6MQB3xVVgYagxE5Q_tu0GDQRijfJPorf0e07p0lIQqb1H-&currency=USD"
        /////////load PayPal script
        /////Listed as
        /////new Client-ID: ATZS5RnQGQWlVQMwVQoHrRZS0xXnWxgYbZ6MQB3xVVgYagxE5Q_tu0GDQRijfJPorf0e07p0lIQqb1H-
        /////s: ED23ubfOKrl7BpvVtn0qSrmwFo3IJmaaU75JbLQM3JZfFcbaE2_3YqwjSQFt9hEnp4cJhGzoGMFL_y-n
        /////
        const _urlSDKLive =  "https://www.paypal.com/sdk/js?client-id=ATZS5RnQGQWlVQMwVQoHrRZS0xXnWxgYbZ6MQB3xVVgYagxE5Q_tu0GDQRijfJPorf0e07p0lIQqb1H-&currency=USD";
        const _urlSDKTest =  "https://www.paypal.com/sdk/js?client-id=ARN1sPZp6DLblYVX_w9k-L3l9cfPhzGuc-ISmWhAPFQ2NDgFhCzzoXdQ9mFrAc8s4CQWO3vPF1fQ6dod&currency=USD";
        const script = document.createElement("script");
        script.src = _urlSDKLive;
        
        //handlers
        script.onload = function() {
            console.log("PayPal script loaded");
        };
        script.onerror = function(err) {
            console.log("Error loading PPAL Script",err);
            console.log("========End-Error========");
        };
        document.body.appendChild(script);
        ///////// end loading script
    });

    return (
        <div className="musicContainer">
            <Head title={t('music.titlePage')}/>
            <div className="marginLeftRight">
                {/* special sections for navidad */}
                <div className="specialDiv">
                    <p className="textReadingSpecial centered">{t('music.specialP')}</p>
                    <Link to="/specialPage" className="linkMore">{t('music.readmore')}</Link>
                </div>
                {/* end special section */}
                <p className="textReading topMarginTextP spreadLineH justifyT margin20">{t('music.textMusic1')}</p>
                {/* <p className="textReading2 spreadLineH justifyT">During many years the music have been one of my greatest passions. 
                    I had the opportunity to play among many great musicians. While living on Morocco I could enjoy performing latin music
                    in many places and cities.
                </p> */}
                <div className="colDivRow">
                    <div className="div50w">
                        <p className="titleMusicP">{t('music.titleMusic1')}</p>
                        <p className="textReading2 spreadLineH justifyT">{t('music.textMusic2')}</p>
                        <p className="titleMusicP noBotMargin">{t('music.titleMusic2')}</p>
                        <p className="textReading2 spreadLineH noBotMargin">{t('music.subtitleMusic1')}</p>
                        <ul>
                            <li className="textReading2">{t('music.listItemMusic1')}</li>
                            <li className="textReading2">{t('music.listItemMusic2')}</li>
                            <li className="textReading2">{t('music.listItemMusic3')}</li> 
                            <li className="textReading2">{t('music.listItemMusic4')}</li> 
                            <p className="textReading2 miniT marginBot">{t('music.listItemMusic5')}<a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" target="_blank" rel="noreferrer">Paypal.com</a>.</p>
                        </ul>
                    </div>
                    <div className="div50w">
                        <Slider 
                            type="CD"  
                            list={_listCD} 
                            source={null}
                            ext=".jpg" class="sliderContCD" 
                            autoWidth={false} autoHeight={false} 
                            disableButtonsControls={false} 
                            autoPlayInterval={6000}
                            autoPlay={true}
                            mouseTracking
                        />
                    </div>
                </div>
                <div className={`colDivRow2 ${gallery ? 'hideColDivRow2': null }`}>
                    <div className="div50w w80">
                        <p className="titleMusicP">{t('music.titleMusic3')}</p>
                        <p className="textReading2 spreadLineH justifyT">{t('music.textMusic3')}</p>
                    </div>
                    <div className="div50w2">
                        <div tabIndex={0} role="button" className="btnGallery" onClick={() => setGallery(!gallery)} onKeyDown={() => setGallery(!gallery)}>
                            <img src={iconGallery} alt="Singing all around the Globe" className="galleryIcon"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* special div for gallery */}
            { gallery &&
                <div className="galleryContainer">
                    <div tabIndex={0} role="button" className="closeBtn" onClick={() => setGallery(!gallery)} onKeyDown={() => setGallery(!gallery)}>
                        <img src={iconClose} alt="Close Gallery" className="iconClose" />
                    </div>
                    <Slider 
                    type="Img"  
                    list={(_lang === 'es') ? _listES : _listEN} 
                    source="./performances/" 
                    ext=".jpg" class="sliderCont" 
                    autoWidth={true} autoHeight={true} 
                    disableButtonsControls={false} 
                    autoPlayInterval={4000}
                    autoPlay={false}
                    mouseTracking/>
                </div>
            }
            {/* end special div */}
        </div>
    )
}

export default Music;