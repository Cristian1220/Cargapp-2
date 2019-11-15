import React, { Component } from 'react';
import './CardImage.css';



class CardImage extends Component {
  render() { 
    const { empresa,nombreEmpresa,EmpreMini,NombreMini, url } = this.props;
    return (
       <div className="content-card">
        <a href={url}>
          <div className="content-card-image">
            <img className="people" src={empresa} />
            <div className="Shadow" />
           
            <div className="TextoMini">
              <h3>{NombreMini}</h3>
            </div>
            
            <div className="Shadow1"> </div>
            <img className="ImgMini"  src={EmpreMini} />
             
          </div> 
        </a>
        <div className="texto7">
            <h2>{nombreEmpresa}</h2>
        </div>
      </div>

    );
  }
}
export default CardImage;