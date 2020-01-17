import React from 'react';

const Card = ({ chosen, sign, callback }) => {
  const img = `images/${sign.name}.jpg`;

  return (
    <div
      onClick={callback}
      className="card"
      style={{ border: chosen ? '5px solid red' : '0' }}
    >
      <img src={img} className="card-img-top" alt="toto" />
      <div className="card-body">
        <h5 className="card-title">{sign.name}</h5>
        <p className="card-text">{sign.desc}</p>
      </div>
    </div>
  );
};

export default Card;
