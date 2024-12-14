import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Add from '../component/Add';


const componentName = () => {
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Add/>
            </main>
            <Footer/>
        </div>
    );
};

export default componentName;