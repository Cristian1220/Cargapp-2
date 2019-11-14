import React, { Component } from 'react';
import './CardImage.css';



class CardImage extends Component {
  render() { 
    const { empresa,nombreEmpresa,EmpreMini,CamioneMini,TransporMini,NombreMni, url } = this.props;
    return (
       <div className="content-card">
          <a href={url}>
          <div className="content-card-image">
            <img className="people" src={empresa} />
            <div className="Shadow"></div>
            <img className="ImgMini"  src={EmpreMini} />
          </div> </a>
        <div className="texto7">
            <h2>{nombreEmpresa}</h2>
        </div>
        <div className="TextoMini">
            <h3>{NombreMni}</h3>
        </div>
      </div>

    );
  }
}
export default CardImage;