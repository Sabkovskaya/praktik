import React from 'react';
import Img2 from '../img/2.png';
import Img3 from '../img/3.jpg';
import Img7 from '../img/7.jpg';


const componentName = () => {
    return (
        <div>
            <>
  <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
  <br />
  <div
    id="carouselExampleIndicators"
    className="carousel slide m-auto  bg-secondary-subtle w-75 p-2"
    data-bs-ride="carousel"
    style={{ minHeight: 400 }}
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={Img2}
          className="d-block m-auto"
          alt="Паук"
          style={{ width: 215 }}
        />
        <h2 className="text-center">Утерян паук</h2>
        <p className="text-center">
          Паук мохнатый, была утерян в Красногвардейском районе
        </p>
      </div>
      <div className="carousel-item">
        <img
          src={Img3}
          className="d-block m-auto"
          alt="Попугай"
          style={{ width: 350 }}
        />
        <h2 className="text-center">Найден попугай</h2>
        <p className="text-center">Попугай желтый, был найден в Лен.области</p>
      </div>
      <div className="carousel-item">
        <img
          src={Img7}
          className="d-block m-auto"
          alt="Котенок"
          style={{ width: 350 }}
        />
        <h2 className="text-center">Найден котенок</h2>
        <p className="text-center">Котенок, был найден в Калининском районе</p>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
  <br />
</>

        </div>
    );
};

export default componentName;