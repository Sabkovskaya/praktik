import React from 'react';
import Logo from '../img/logo.png'
import Header from '../component/Header';
import Footer from '../component/Footer';

import Img11 from '../img/11.jfif';
import Img12 from '../img/12.jpg';
import Img13 from '../img/13.jfif';

const componentName = () => {
    return (
        <div>
            <>
  <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
  <div className="p-3">
    <div
      className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
      style={{ minWidth: 300 }}
    >
      <p className="w-50 text-primary" style={{ minWidth: 250 }}>
        id:
      </p>
      <p className="w-50" style={{ minWidth: 250 }}>
        14
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 250 }}>
        Телефон:
      </p>
      <p className="w-50" style={{ minWidth: 250 }}>
        +7-952-522-52-52
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 300 }}>
        email:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        sofasabkovskaya@yandex.ru
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 300 }}>
        Имя:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        Софья
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 300 }}>
        Дата регистрации:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        26-06-2024
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 300 }}>
        Количество найденных животных:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        2
      </p>
      <p className="w-50 text-primary" style={{ minWidth: 300 }}>
        Количество объявлений:
      </p>
      <p className="w-50" style={{ minWidth: 300 }}>
        3
      </p>
    </div>
  </div>
  <h2 className="text-center text-white bg-primary m-2">
    Изменить адрес электронной почты
  </h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Введите адрес электронной почты
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div className="form-text">
        Мы никогда не делимся Вашими e-mail ни с кем.
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Отправить
    </button>
  </form>
  <h2 className="text-center text-white bg-primary m-2">
    Изменить номер телефона
  </h2>
  <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Введите номер телефона
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        aria-describedby="emailHelp"
      />
      <div className="form-text">Используйте цифры, +, -.</div>
    </div>
    <button type="submit" className="btn btn-primary">
      Отправить
    </button>
  </form>
  <h2 className="text-center text-white bg-primary m-2">
    Добавленные объявления
  </h2>
  <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
    <div className="card" style={{ width: "30%" }}>
      <br />{" "}
      <img
       src={Img11}
        className="card-img-top m-auto"
        alt="Щенок"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Щенок</h5>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          19
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          Вид животного:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          Собака
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Описание:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Найден щенок,в центре, окрас бело-рыжий.{" "}
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Номер чипа:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          go-011-spb
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Район:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Центральный
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          14-03-2022
        </p>
        <div
          className="position-absolute text-danger"
          style={{ top: 15, right: 15, cursor: "pointer" }}
        >
          Удалить
        </div>
        <button type="submit" className="btn btn-primary">
          Редактировать объявление
        </button>
      </div>
    </div>
    <div className="card" style={{ width: "30%" }}>
      <br />{" "}
      <img
        src={Img12}
        className="card-img-top m-auto"
        alt="Курица"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Курица</h5>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          88
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          Вид животного:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          Курица
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Описание:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Потерялась курица в Лен.области п.Швабрино,окрас бело-черный
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Номер чипа:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          go-011-spb
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Район:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Область
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          15-03-2022
        </p>
        <div
          className="position-absolute text-danger"
          style={{ top: 15, right: 15, cursor: "pointer" }}
        >
          Удалить
        </div>
        <button type="submit" className="btn btn-primary">
          Редактировать объявление
        </button>
      </div>
    </div>
    <div className="card" style={{ width: "30%" }}>
      <br />{" "}
      <img
        src={Img13}
        className="card-img-top m-auto"
        alt="Курица"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Курица</h5>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          08
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          Вид животного:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          Курица
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Описание:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Потерялась курица в Лен.области п.Кукурузино
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Номер чипа:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          go-011-spb
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Район:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Область
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          14-08-2022
        </p>
        <div
          className="position-absolute text-danger"
          style={{ top: 15, right: 15, cursor: "pointer" }}
        >
          Удалить
        </div>
        <button type="submit" className="btn btn-primary">
          Редактировать объявление
        </button>
      </div>
    </div>
  </div>{" "}
  <br />
  <nav aria-label="Page navigation example" className="m-3">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
</>

        </div>
    );
};

export default componentName;