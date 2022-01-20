import React, {useState} from 'react';
import { UserContext } from '../Context/UserContext';


function Store() {

  let x = UserContext;
  console.log(x);

  const [gold, setGold] = useState(10000);
  const [copperOre, setCopperOre] = useState(0);
  const [tinOre, setTinOre] = useState(0);

   // LEVEL STATES
   const [miningLevel, setMiningLevel] = useState(1);
   const [autoMineLevel, setAutoMineLevel] = useState(0);
 
   // MODAL STATE
   const [modal, setModal] = useState(false);

   // LEVEL UP MINING LOGIC
   function levelUpMining() {  
    // Level 2 
    if (gold >= 100 && miningLevel == 1) {
      setGold(gold - 100); 
      setMiningLevel(miningLevel + 1);
    // Level 3
    } else if (miningLevel >= 2 && gold >= 5000){
      setGold(gold - 5000); 
      setMiningLevel(miningLevel + 1);
    } else {
      alert("You do not have enough gold");
    }
  }

  // SKILL - AUTOMINE LEVEL UP LOGIC
  function handleAutoMineClick() {
    if (gold < 5000) {
      alert("You do not have enough gold");
    } else if (gold >= 5000) {
      setGold(gold - 5000);
      setAutoMineLevel(autoMineLevel + 1);
    }
    runAutoMine();
  }

  // LOGIC - AUTOMINE
  function runAutoMine() {
    let intervalID = window.setInterval(myCallback, 1000);
    const mineButton = document.getElementById('mine');
    function myCallback() {
      mineButton.click();
    }
  }

  // INVENTORY - BUY TIN ORE
  function handleBuyTinOre() {
    setGold(gold - 100);
    setTinOre(tinOre + 1);
  }

   // INVENTORY - BUY COPPER ORE
   function handleBuyCopperOre() {
      setGold(gold - 100);
      setCopperOre(copperOre + 1);
  }

  return (
    <>
    <h1>Store</h1>
    <section className="store">
      
        <div className="item">
          <h5>+1 Mining Level</h5>
          <p>Will let you mine + {miningLevel + 1} more gold at once</p>
          <p>Cost: 100 gold</p>
          <button onClick={levelUpMining}>Purchase</button>
        </div>
        <div className="item">
          <p>+1 Copper Ore</p>
          <p>Purchase a copper ore to build things</p>
          <p>Cost: 100 gold</p>
          <button onClick={handleBuyCopperOre}>Purchase</button>
        </div>
        <div className="item">
          <p>+1 Tin Ore</p>
          <p>Purchase a copper ore to build things</p>
          <p>Cost: 100 gold</p>
          <button onClick={handleBuyTinOre}>Purchase</button>
        </div>
        <div className="item">
          <p>+1 Auto Mine</p>
          <p>Automine gold ever 1s</p>
          <p>Cost: 100 gold</p>
          <button onClick={handleAutoMineClick}>Purchase</button>
        </div>
      </section>
      </>
  )
}

export default Store;
