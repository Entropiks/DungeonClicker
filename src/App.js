import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState } from 'react';
import Battle from './Components/Battle';
import './App.css';
import Inventory from './Components/Inventory';
import Modal from './Components/Modal';
import SpinningCoin from './Assets/spinningCoin.gif';
import Store from './Components/Store';

function App() {

  // ITEM STATES
  const [gold, setGold] = useState(10000);
  const [copperOre, setCopperOre] = useState(0);
  const [tinOre, setTinOre] = useState(0);

  // LEVEL STATES
  const [miningLevel, setMiningLevel] = useState(1);
  const [autoMineLevel, setAutoMineLevel] = useState(0);

  // MODAL STATE
  const [modal, setModal] = useState(false);

  // MINING CLICK LOGIC
  function handleMineGold() {
    setGold(gold + 1);
    if (miningLevel == 2) {
      setGold(gold + 2);
    } else if (miningLevel == 3) {
      setGold(gold + 3);
    }
  }

  return (
    <div className="App">
      <div className="hotbar-wrapper">
        <div className="gold-storage">
          <img src={SpinningCoin} style={{width: 25, marginLeft: 10, marginRight: 5}}/>
          <h3>{gold}</h3>
          {/* <p>Gems: </p> */}
        </div>
      </div>
      <h1>Mining Level: {miningLevel}</h1>
      <h1>Automine Level: {autoMineLevel}</h1>
      <p>Tin Ore: {tinOre}</p>
      <p>Copper Ore: {copperOre}</p>
      <button id="mine" onClick={handleMineGold}>Mine Gold</button>
      {/* <Battle></Battle> */}

      <Modal isOpen={false}></Modal>
      <Inventory></Inventory>
      {/* <Store></Store> */}
    </div>
  );
}

export default App;
