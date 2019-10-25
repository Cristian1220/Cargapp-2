import React, { Component } from 'react';

import './Tranform.css';

class Tranform extends Component{
    constructor(args) {
        super(args)
        this.state = {
            nombre: '',
            telefono: '',
            correo: '',
            nit: '',
            message: '',
        }
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        console.log(e.target.value) 
    }

    save(e){
        
        if(!this.validate()){
          return;
        }

        this.setState({
            message: 'Guardado correctamente'
        })
    }
        validate(){
            if(this.state.acept != true){
                this.setState({
                    message: 'Acepte los terminos y condiciones'
                })
                return false
            } 
            return true 
    }
    render()  {
        const { nombre,telefono,correo,nit } = this.state;
        return (

        <form className="formula">
         <h1 className="titulotrn">Gana más dinero con Cargapp.</h1>
            <div className="formulario3">  
             
                  <label htmlFor="nombre"></label>
                 <div className="FormParte1">       
                    <input className="form1"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    name="nombre"
                    id="nombre"
                     placeholder="Nombre Completo"
                    /> 
                
                    <label  htmlFor="telefono"></label>
                    <input className="form2"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    name="telefono" 
                    id="telefono"
                    placeholder="Teléfono"
                    />
               </div>

               <div className="FormParte2">
                    <label htmlFor="correo"></label>       
                    <input  className="form2"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    type="text"  
                    name="correo"
                    id="correo"
                    placeholder="Correo"
                    />

                    <label  htmlFor="nit"></label>   
                    <input  className="form1"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    type="text" 
                    name="nit" 
                    id="nit"
                    placeholder="Nit"
                     />
                </div> 
                {nombre === '' || telefono === '' || correo === '' || nit === '' ? (
                <p className="PruebaTranportador">Revise todos los campos</p>  
                 ) :null}      
            </div>
            
                <div className="ButtonTranportado">
                    {nombre && telefono && correo && nit ? ( 
                <div className="ButtoT" onClick={this.save.bind(this)} >
                    <p className="ButtonClickt">ENVIO</p>  
                </div>
                    ) :null}      
                </div> 

        </form>
     
        );  
    }

}


export default Tranform;