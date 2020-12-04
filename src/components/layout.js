import React from 'react';
//components

// translations
import { withTrans } from '../i18n/withTrans'
// import NavBar from './navBar';
import Footer from './footer';
import Header from './header';

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

export default withTrans(Layout);
