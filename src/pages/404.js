import React from 'react';
import { Link } from 'gatsby';
// components
import Head from '../components/Head';
//media-imgs
import SaturnImg from '../imgMedia/saturn-clip-art-5aff6367d9b249.3502323515266865678917.png';
import IconShip from '../imgMedia/icons8-space-shuttle-64.png';

const Notfound = () => {
    return (
        <div className="containerNF">
            <Head title="Page Not Found" />
        <div className="notFoundContainer">
            <div className="textColumn">
                <p className="titleNotFound">We've being lost in Saturn</p>
                <p className="textNotFound">It seems the page you are trying to reach it doesn't exist. Please double check the link.</p>
            </div>
            <div className="image">
                <img src={SaturnImg} alt="Saturn Planet Blue" className="imgNotFound"/>
            </div>
        </div>
        <div className="textIcon">
            <Link to="/" activeClassName="activeNavLink" className="navNotFound">
                <p className="smallText">Take me Back Home</p>
                <img src={IconShip} className="iconShip" alt="Space Ship to Home" />
            </Link>
        </div>
        </div>
    )
}

export default Notfound;