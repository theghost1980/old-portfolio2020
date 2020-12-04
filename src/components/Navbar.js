import React, { useState } from 'react';
import { Link } from 'gatsby';
import TextNE from './TextNoExpanded';
// component
import MusicPlayer from './MusicPlayer';
// styles
import '../styles/index.css';
//translation {t('home.link')}
import { useTranslation } from "react-i18next";

const NavBar = (props) => {
    // translation
    const { t } = useTranslation();

    const [expanded, setExpanded] = useState(true);
    //music player
    const [musicOn, setMusicOn] = useState(false);

    // console.log(`expanded:${expanded}`);

    return (
        <nav className={expanded ? 'expanded': 'noExpanded'}>
            <div className={expanded ? 'faceContainer': 'faceContainer bgLeft'}>
                <Link to="/" activeClassName="activeNavLink" onClick={() => setExpanded(true)} className="noLinks">
                    {!expanded && <TextNE expanded={expanded} topMargin={false} /> }
                </Link>
            </div>
            <div className="menuContainer">
                {expanded && <TextNE expanded={!expanded} topMargin={true} /> }
                <ul className={expanded ? 'horizontalUl': 'horizontalUl animateUl'}>
                    <li><Link to="/" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(true);
                        setMusicOn(false);
                        }}>{t('navbar.link1')}</Link></li>
                    <li><Link to="/About" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(false);
                        setMusicOn(false);
                        }}>{t('navbar.link2')}</Link></li>
                    <li><Link to="/Portfolio" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(false);
                        setMusicOn(false);
                        }}>{t('navbar.link3')}</Link></li>
                    <li><Link to="/Blog" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(false);
                        setMusicOn(false);
                        }}>{t('navbar.link4')}</Link></li>
                    <li><Link to="/Music" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(false);
                        setMusicOn(true);
                        }}>{t('navbar.link5')}</Link></li>
                    <li><Link to="/Contact" activeClassName="activeNavLink" onClick={() => {
                        setExpanded(false);
                        setMusicOn(false);
                        }}>{t('navbar.link6')}</Link></li>
                </ul>
                { musicOn && <MusicPlayer />}
            </div>
        </nav>
    )
}

export default NavBar;