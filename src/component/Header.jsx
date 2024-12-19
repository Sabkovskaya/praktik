import React from 'react';
import Logo from '../img/logo.png';
import {Link} from "react-router-dom";
import Search2 from "./Search2";


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-">
  <div className="container-fluid">
  {/* <a className="navbar-brand" href="index.html"> */}
  <Link to={'/'} className="navbar-brand">
  <img
    src={Logo}
    className="rounded-3"
    style={{ height: 55, width: 55 }}
    alt="logo"
  />
  </Link>
{/* </a> */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="index.html"> */}
            <Link to={'/'} className="nav-link">
            Главная
            </Link>
          
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="html/profile.html"> */}
            <Link to={'/login'} className="nav-link">
            Личный кабинет
            </Link>
          {/* </a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="html/registration.html"> */}
          <Link to={'/region'} className="nav-link">
            Регистрация
            </Link>
          {/* </a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="html/add_pet.html"> */}
          <Link to={'/add_pet'} className="nav-link">
            Добавить объявление
            </Link>
          {/* </a> */}
        </li>
        <li className="nav-item">
        <Link to={'/search'} className="nav-link">
            Поиск по объявлениям
            </Link>
          {/* </a> */}
        </li>
      </ul>
      <Search2/>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;