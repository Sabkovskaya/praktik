import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Prof from '../component/Prof';



const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Prof/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;