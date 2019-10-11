import React, { Component } from 'react';
import camionero1 from '../../logos/camionero1.jpg'; 
import './CardImage.css';



class CardImage extends Component {
  render() { 
    return (
       <div className="content-card">
          <a href="/Company">
          <div className="content-card-image">
           <img className="people" src={camionero1} href=""/>         
            </div> </a>
        <div className="texto-team">
            <h2>Empresa</h2>
            <p>Leidy Aroca</p>
        </div>
      </div>
    );
  }
}
export default CardImage;