import React from 'react';
import './App.scss';
import Card from './Card';
import FormControl from './FormControl';

function App() {
  const fullSigns = [
    { name: 'singe', desc: 'est rigolo', flowers: ['chrysanthème'] },
    { name: 'coq', desc: 'se lève tôt', flowers: ['flower of fragrant', 'plantain', 'lily', 'nerve plant', 'snapdragon'] },
    { name: 'chien', desc: 'est fidèle', flowers: [] },
    { name: 'porc', desc: 'est gourmand', flowers: [] },
    { name: 'rat', desc: 'est malin', flowers: ['liliacée'] },
    { name: 'buffle', desc: 'est têtu', flowers: ['tulipe', 'rose', 'fleur de pêcher', 'sempervirent'] },
    { name: 'tigre', desc: 'est puissant', flowers: ['Cineraria'] },
    { name: 'lievre', desc: 'est doux', flowers: [] },
    { name: 'dragon', desc: 'est organisé', flowers: [] },
    { name: 'serpent', desc: 'est modeste', flowers: [] },
    { name: 'cheval', desc: 'est endurant', flowers: [] },
    { name: 'chevre', desc: 'est naïf', flowers: [] },
  ];

  const checkYear = () => {
    const year = document.querySelector('input').value;
    const index = year % 12;
    alert(`vous etes ${fullSigns[index].name}, un signe qui ${fullSigns[index].desc}`);
  };

  return (
    <div className="container">
      <h1>Astrologie chinoise</h1>
      <FormControl text="Quel est votre année de naissance ?" type="number" />
      <button onClick={checkYear} type="button" className="btn btn-success">Savoir</button>
      <div className="card-columns">
        { fullSigns.map((item) => <Card sign={item} />) }
      </div>
    </div>
  );
}

export default App;


/* const fullSigns = [
  { name: 'singe', desc: 'est rigolo', flowers: ['chrysanthème'] },
  { name: 'coq', desc: 'se lève tôt', flowers: ['flower of fragrant', 'plantain', 'lily', 'nerve plant', 'snapdragon'] },
  { name: 'chien', desc: 'est fidèle', flowers: [] },
  { name: 'porc', desc: 'est gourmand', flowers: [] },
  { name: 'rat', desc: 'est malin', flowers: ['liliacée'] },
  { name: 'buffle', desc: 'est têtu', flowers: ['tulipe', 'rose', 'fleur de pêcher', 'sempervirent'] },
  { name: 'tigre', desc: 'est puissant', flowers: ['Cineraria'] },
  { name: 'lievre', desc: 'est doux', flowers: [] },
  { name: 'dragon', desc: 'est organisé', flowers: [] },
  { name: 'serpent', desc: 'est vicieux', flowers: [] },
  { name: 'cheval', desc: 'est endurant', flowers: [] },
  { name: 'chevre', desc: 'est naïf', flowers: [] },
]; */
