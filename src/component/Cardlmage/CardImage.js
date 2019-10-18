import React, { Component } from 'react';
import './CardImage.css';



class CardImage extends Component {
  render() { 
    const { empresa,nombreEmpresa,url } = this.props;
    return (
       <div className="content-card">
          <a href={url}>
          <div className="content-card-image">
            <img className="people" src={empresa} />        
          </div> </a>
        <div className="texto7">
            <h2>{nombreEmpresa}</h2>
        </div>
      </div>

    );
  }
}
export default CardImage;