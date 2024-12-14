import React from 'react';

const componentName = () => {
    return (
        <div>
            
            <>
  <h2 className="text-center text-white bg-primary m-2">
    Поиск по объявлениям
  </h2>
  <div className="p-3">
    <form className="w-50 m-auto border p-3" style={{ minWidth: 300 }}>
      <div className="mb-3">
        <label htmlFor="district" className="form-label">
          Выберите район:
        </label>
        <select id="district" className="form-select">
          <option>Приморский</option>
          <option>Петроградский</option>
          <option>Василиостровский</option>
          <option>Центральный</option>
          <option>Красногвардейский</option>
          <option>Выборгский</option>
          <option>Калининский</option>
          <option>Область</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="kind" className="form-label">
          Введите вид животного:
        </label>
        <select id="kind" className="form-select">
          <option>Собака</option>
          <option>Курица</option>
          <option>Паук</option>
          <option>Попугай</option>
          <option>Кошка</option>
        </select>
      </div>
      <input type="submit" className="btn btn-primary" defaultValue="Войти" />
    </form>
  </div>
</>
            
</div>
    );
};

export default componentName;