import React, { useState } from 'react';
import Store from './Store';

function Modal() {

  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(true);
  }

  window.onload = () => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  return (

  <div>
    <button id="myBtn" onClick={handleModal}>Store</button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <Store></Store>
          {/* <section className="store">
            <div className="item">
              <h5>+1 Mining Level</h5>
              <p>Will let you mine +  more gold at once</p>
              <p>Cost: 100 gold</p>
              <button >Purchase</button>
            </div>
            <div className="item">
              <p>+1 Copper Ore</p>
              <p>Purchase a copper ore to build things</p>
              <p>Cost: 100 gold</p>
              <button >Purchase</button>
            </div>
            <div className="item">
              <p>+1 Tin Ore</p>
              <p>Purchase a copper ore to build things</p>
              <p>Cost: 100 gold</p>
              <button >Purchase</button>
            </div>
            <div className="item">
              <p>+1 Auto Mine</p>
              <p>Automine gold ever 1s</p>
              <p>Cost: 100 gold</p>
              <button>Purchase</button>
            </div>
          </section> */}
        </div>
      </div>  
  </div>

  )
}

export default Modal;
