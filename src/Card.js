import React from 'react';

const Card = ({ sign }) => {
  const img = `images/${sign.name}.jpg`;

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="toto" />
      <div className="card-body">
        <h5 className="card-title">{sign.name}</h5>
        <p className="card-text">{sign.desc}</p>
      </div>
    </div>
  );
};

export default Card;
