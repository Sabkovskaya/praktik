import React from 'react';
import Img6 from '../img/6.jpg';
import Img4 from '../img/4.jpg';
import Img8 from '../img/8.jfif';
import Img9 from '../img/9.jfif';
import Img12 from '../img/12.jpg';
import Img13 from '../img/13.jfif';

const componentName = () => {
    return (
        <div>
          
       <>
       
  <h2
    className="text-center text-white bg-primary"
    style={{ marginLeft: "1.7%", marginRight: "1.7%", marginBottom: 20 }}
  >
    Карточки найденных животных
  </h2>
  <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
    <div className="card" style={{ width: "30%", marginBottom: 20 }}>
      <img
        src={Img6}
        className="card-img-top m-auto"
        alt="Собака"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Котенок</h5>
        <p className="w-50 text-primary" style={{ minWidth: 200 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 200 }}>
          4
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          Вид животного:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          Кот
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Описание:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Найден котенок, черно-белый,на вид пару месяцев.Испуганный
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Номер чипа:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          ca-001-spb
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Район:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Выборский
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          20-11-2024
        </p>
        <a href="#" className="btn text-white bg-primary">
          Забрать
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "30%", marginBottom: 20 }}>
      <img
        src={Img4}
        className="card-img-top m-auto"
        alt="Кот"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Кот</h5>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          76
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          Вид животного:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          Кот
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Описание:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Потерялся кот, в Ленинском районе, серо-коричнивый, отзывается на
          кличку Барсик
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
          Ленинский
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          10-03-2022
        </p>
        <a href="#" className="btn text-white bg-primary">
          Найден
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "30%", marginBottom: 20 }}>
      <img
        src={Img8}
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
          Найден щенок,в центре, окрас бело-рыжий. Ласковый, любит поиграть и
          лезет на руки
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
        <a href="#" className="btn text-white bg-primary">
          Забрать
        </a>
      </div>
    </div>
  </div>
  <div className="bd-example bd-example-placeholder-cards d-flex justify-content-around">
    <div className="card" style={{ width: "30%" }}>
      <img
        src={Img9}
        className="card-img-top m-auto"
        alt="Собака"
        style={{ height: 300, width: "70%" }}
      />
      <div className="card-body">
        <h5 className="card-title">Щенок</h5>
        <p className="w-50 text-primary" style={{ minWidth: 250 }}>
          id:
        </p>
        <p className="w-50" style={{ minWidth: 250 }}>
          14
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
          Найден щенок-дворняшка,окрас рыжий.Очень ласковый, полненький{" "}
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Номер чипа:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          ca-001-spb
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Район:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          Выборский
        </p>
        <p className="w-50 text-primary" style={{ minWidth: 300 }}>
          Дата:
        </p>
        <p className="w-50" style={{ minWidth: 300 }}>
          14-03-2022
        </p>
        <a href="#" className="btn text-white bg-primary">
          Забрать
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "30%" }}>
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
        <a href="#" className="btn text-white bg-primary">
          Найден
        </a>
      </div>
    </div>
    <div className="card" style={{ width: "30%" }}>
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
        <a href="#" className="btn text-white bg-primary">
          Найден
        </a>
      </div>
    </div>
  </div>
  <h2
    className="text-center text-white bg-primary"
    style={{
      marginLeft: "1.7%",
      marginRight: "1.7%",
      marginBottom: 20,
      marginTop: 20
    }}
  >
    Подписка на новости
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
      <div id="emailHelp" className="form-text">
        Мы никогда не делимся Вашими e-mail ни с кем.
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Подписаться
    </button>
  </form>
</>

      </div>
      
    );
        }

export default componentName;