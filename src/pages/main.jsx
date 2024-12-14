import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Slaider from '../component/Slaider';
import Kartochki from '../component/Kartochki';
import Subscrib  from '../component/subscrib';
import Card from '../component/Card';


 
function Main(props) {
    let [cards, setCards]=useState([]);
    
    useEffect(()=>load(), []);
    function load(){
        fetch('https://pets.xn--80ahdri7a.site/public/api/pets')
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                
setCards(result.data.orders.map((card)=><Card data={card}/>));

            })
    }


    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
            <Slaider/>
            <h2 className="text-center text-white bg-primary  m-2">
            Карточки найденных животных
            </h2>
                <div
                className="d-flex flex-row flex-wrap"
                style={{ paddingLeft: "11%", paddingRight: "11%" }} >
                
                {cards}</div>
                
                <Subscrib/>
            </main>
            <Footer/>
        </div>
    );
};


export default Main;