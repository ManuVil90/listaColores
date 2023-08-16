import React from 'react';

const ColorList = () => {
  const colors = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

  return (
    <div className='container'>
      <h2 className='text-center'>Lista de Colores</h2>
      <ul className="list-group">
        {colors.map((color, index) => (
          <li className="list-group-item" key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;