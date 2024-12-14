import React, { useEffect, useState } from 'react';
import {render} from 'react-dom';

import Slide from './Slide';


function Slaider(props) {


    let [card, setCard]=useState({data:{pets:[]}});
    useEffect(()=>req_slide(), []);
    function req_slide() {   
        var requestOptions = {
          method: 'GET',  
        };
        
        fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            setCard(result)



    })
          .catch(error => console.log('error', error));
        }

       let  slides=card.data.pets.map((pet, index)=>{
                if (index==0){return<Slide data={pet} key={index} css_class='carousel-item active'/>;        
                } else {return <Slide data={pet} key={index} css_class='carousel-item'/>;
           
        }})

        let  indicators=card.data.pets.map((pet, index)=>{
            if (index==0){return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index+'btn'}></button>;        
            } else {return  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide "+(Number(index)+1)} key={index+'btn'}></button>;
            
            }})


    return (


        
<div

  id="carouselExampleIndicators"
  className="carousel slide m-auto bg- bg-opacity-25 w-99 p-2"
  data-bs-ride="carousel"
  style={{ minHeight: 500 }}
>
  <div className="carousel-indicators">
    <button>
  {indicators}
   </button>
  </div>
  <h2
    className="text-center text-white bg-primary"
    style={{ marginLeft: "1.7%", marginRight: "1.7%", marginBottom: 20 }}
  >
    Найденные животные
  </h2>
  <div className="carousel-inner">    
{slides}
  </div>  
    
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon bg-primary" aria-hidden="true" />
    <span className="visually-hidden ">Предыдущий</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon bg-primary" aria-hidden="true" />
    <span className="visually-hidden">Следующий</span>
  </button>
</div>    );
}


export default Slaider;