import React, { useState } from 'react'; 
import './App.scss';
import Card from './Card';
import FormControl from './FormControl';

function App() {
  const [mySign, setMySign] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
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
    // alert(`vous etes ${fullSigns[index].name}, un signe qui ${fullSigns[index].desc}`);
    setMySign(fullSigns[index].name);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="container">

      <h1>Astrologie chinoise</h1>
      <FormControl text="Quel est votre année de naissance ?" type="number" />
      <button onClick={checkYear} type="button" className="btn btn-success">Savoir</button>
      <div>Mon signe chinois: {mySign}</div>
      <div className="card-columns">
        { fullSigns.map((item) => <Card callback={() => setModalVisible(true)} chosen={ mySign === item.name } sign={item} />) }
      </div>

      <div className="modal" style={{display: modalVisible ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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
