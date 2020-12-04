import React from 'react';
//components

// translations
import PropTypes from 'prop-types';
import { withTrans } from '../i18n/withTrans';
// import NavBar from './navBar';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, t, i18n }) => {
    // if (props.height != null){
    //     console.log(`Layout Received height: ${props.height}`);
    // }
    return (
        <div className="layoutContainer">
            <div className="content">
                <Header />
                <main className="dataContainer">
                    { children }
                </main>
            </div>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default withTrans(Layout);
