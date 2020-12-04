import React from 'react';
//components
import Slider from '../components/Slider';
import Head from '../components/Head';
// translations
import { useTranslation } from "react-i18next";
//components
// import Layout from '../components/layout';
//media-imgs
import IconPC from '../imgMedia/icons8-programming-64.png';
import Python from '../imgMedia/icons8-python-64.png';
import Csharp from '../imgMedia/icons8-cs-64.png';
import SQL from '../imgMedia/icons8-sql-64.png';
import Linkedin from '../imgMedia/icons8-linkedin-circled-64.png';


//props, lists & definititions

const About = (props) => {
    const { t } = useTranslation();

    const _list = [
        {'id':'0-textCarousel','title':t('about.sliderTitle1'),'list': [{'item':''},{'item': ''}],'icon':true,'src':'./icons-imgs/responsive.png','alt':t('about.altItem1')},
        {'id':'1-textCarousel','title':t('about.sliderTitle2'),'list': [{'item':t('about.sliderItem2-1')},{'item': t('about.sliderItem2-2')}],'icon':false},
        {'id':'2-textCarousel','title':t('about.sliderTitle3'),'list': [{'item':'Contentful & WordPress'},{'item': t('about.sliderItem3-1')}],'icon':true,'src':'./icons-imgs/wordpress.png','alt':t('about.altItem3')},
        {'id':'3-textCarousel','title':t('about.sliderTitle4'),'list': [{'item':t('about.sliderItem4-1')},{'item': t('about.sliderItem4-2')}],'icon':true,'src':'./icons-imgs/fast.png','alt':t('about.altItem4')},
        {'id':'4-textCarousel','title':t('about.sliderTitle5'),'list': [{'item':'ReactJs, GatsbyJs y GraphQL'},{'item': 'Javascript & Typescript'},{'item': t('about.sliderItem5-1')}],'icon':false},
        {'id':'5-textCarousel','title':t('about.sliderTitle6'),'list': [{'item':t('about.sliderItem6-1')},{'item': t('about.sliderItem6-2')}],'icon':true,'src':'./icons-imgs/artistic.png','alt':t('about.altItem6')},
        {'id':'6-textCarousel','title':t('about.sliderTitle7'),'list': [{'item':t('about.sliderItem7-1')},{'item': t('about.sliderItem7-2')},{'item': t('about.sliderItem7-3')}],'icon':true,'src':'./icons-imgs/help.png','alt':t('about.altItem7')}
        // {'id':'0-textCarousel','title':'Mobile First Web Designs','list': [{'item':''},{'item': ''}]},
    ];

    return (
        // <Layout>
            <div className="aboutContainer">
                <Head title={t('about.titlePage')}/>
                <section className="topSection">
                    <div className="divCol2Cont">
                        <div className="divCol59">
                            <p className="textReading topMarginTextP spreadLineH justifyT">{t('about.txtAbout1')}</p>
                            {/* <p className="textReading2 centered">My native language is Spanish. Other languages I can understand and speak are:</p>
                            <ul className="ulVerticalAbout">
                                <li className="textReading2">English - <a href="https://www.efset.org/cert/SLLjGL" rel="noreferrer"  target="_blank" className="outLink">C2</a></li>
                                <li className="textReading2">Italian - B2</li>
                                <li className="textReading2">French - B1</li>
                            </ul> */}
                        </div>
                        <div className="divCol31">
                            <Slider type="Text" list={_list} class="sliderTxtCont" autoWidth={false} autoHeight={true} disableButtonsControls={true} autoPlayInterval={4000} autoPlay={true}/>
                        </div>
                    </div>
                    <p className="textReading2 spreadLineH justifyT">{t('about.txtAbout2')}</p>
                    <ul className="horizUlAbout">
                        <li className="liUlAbout">
                            <div className="iconTitle">
                                <img src={IconPC} alt="computer programming languages" className="listIcon" />
                                <p className="textReading2">{t('about.txtAbout3')}</p>
                            </div>
                        </li>
                        <li className="liUlAbout">
                            <div className="iconTitle">
                                <img src={Python} alt="computer programming languages" className="listIcon" />
                                <p className="textReading2">Python</p>
                            </div>
                        </li>
                        <li className="liUlAbout">
                            <div className="iconTitle">
                                <img src={Csharp} alt="computer programming languages" className="listIcon" />
                                <p className="textReading2">C-Sharp</p>
                            </div>
                        </li>
                        <li className="liUlAbout">
                            <div className="iconTitle">
                                <img src={SQL} alt="computer programming languages" className="listIcon" />
                                <p className="textReading2">SQL</p>
                            </div>
                        </li>
                    </ul>
                    <div className="textIcon2">
                        <p className="textReading2 spreadLineH justifyT">{t('about.txtAbout4')}</p>
                        <a href="https://www.linkedin.com/in/saturno-mangieri-011265138/" rel="noreferrer"  target="_blank" className="outLink">
                            <img src={Linkedin} className="iconLinkedin" alt="Linkedin Profile Saturno" />
                        </a>
                    </div>
                </section>
            </div>
        // </Layout>
    )
}

export default About;