import React from 'react'
import { useState } from 'react';

const enemies = 
  {
    name: "rat",
    type: "earth",
    hp: "10",
    damage: "1",
    drops:
      {
        copperOre: "Copper Ore",
        tinOre: "Tin Ore"
      }
  }

const player = {
    name: "Player1",
    type: "",
    hp: 10,
    defense: 1,
    attackDamage: 1,
  }

function Battle() {

  const [playerHP, setPlayerHP] = useState(player.hp);
  const [enemyHP, setEnemyHP] = useState(enemies.hp);

  // ATTACK FUNCTION
  function handleAttack() {
    setEnemyHP(enemyHP - player.attackDamage);
    checkEnemyHP(enemyHP);
  }

  function checkEnemyHP(enemyHP) {
    if (enemyHP == 0) {
       alert("enemy has died");
       setEnemyHP(0); //to stop from going negative
    }
  } 

  return (
    <div>
      <div className="player" hp={player.hp} name={player.name}>
        <h1>HP: {player.hp}</h1>
        {player.name}
      </div>
      <div className="enemy">
        <h1>HP: {enemyHP}</h1>
        {enemies.name}
        <button onClick={handleAttack}>Click to attack</button>
      </div>
    </div>
  )
}

export default Battle
