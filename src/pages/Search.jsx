import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Sea from '../component/Sea';


const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Sea/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;