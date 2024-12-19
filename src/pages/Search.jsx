import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';


const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Search/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;