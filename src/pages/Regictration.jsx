import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Regictr from '../component/Regictr';


const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Regictr/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;