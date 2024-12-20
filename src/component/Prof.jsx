import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import Phone from '../component/Phone';
import Poshta from '../component/Poshta';
import kart2 from './Card2';
const Prof = (props) => {
  const [orders, setOrders] = useState([]);  
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

  useEffect(() => {
      req_user();
  }, []);  

  async function req_user() {
      const requestOptions = {
          method: 'GET',
          headers: myHeaders,
      };

      try {
          const response = await fetch("https://pets.xn--80ahdri7a.site/api/users/orders", requestOptions);
          
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          
          const result = await response.json();
        
          if (result && result.data && Array.isArray(result.data.orders)) {
              setOrders(result.data.orders); 
          }
      } catch (error) {
          console.error("Error fetching user data:", error);
       
      }

  }
  let [user, setUser]=useState({name: "", id: "", registrationDate: "", phone: ""});  
  
  let myHeaders2 = new Headers();
  myHeaders.append("Authorization", "Bearer "+localStorage.token);
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
      method: 'GET',
      headers: myHeaders2 //+body если существует
  };
  fetch("http://pets.сделай.site/api/users", requestOptions)
      .then(response=>response.json())
      .then(response=>setUser(response))
 
    return (
        <div>
            <Header/>
  <main style={{ minHeight: "70vh" }}>
    <div className="container bd-primary flex-wrap flex-lg-nowrap">
      <h2 className="text-center text-white  bg-primary m-2">Личный кабинет</h2>
      <div className="p-3">
        <div
          className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
          style={{ minWidth: 300 }}
        >
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            id:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.id}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Имя:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.name}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Телефон:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.phone}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            email:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.email}
          </p>
         
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Дата регистрации:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.registrationDate}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Количество найденных животных:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.countOrder}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Количество объявлений:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.countPets}
          </p>
        </div>
      </div>
      <Poshta/>
      <Phone/>
      {/* <h2 className="text-center text-white bg-primary m-2">
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
            Мы никогда не делимся вашими контактами.
          </div>
        </div>
        <button type="submit" className="btn color text-white">
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
        <button type="submit" className="btn color text-white">
          Отправить
        </button>
      </form> */}
      
    
   
      <br />
      <h2 className="text-center text-white bg-success m-2">
                    Добавленные объявления
                </h2>
                <div
                    className="d-flex flex-row"
                    style={{ paddingLeft: "11%", paddingRight: "11%" }}
                >
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <kart2 key={order.id || index} data={order} />
                        ))
                    ) : (
                        <p className='text-center'>Нет добавленных объявлений.</p>
                    )}
                </div>
    
    </div>
  </main>
  <br />
  <br />
            <Footer/>
        </div>
    );
};
 
export default Prof;