import React, { Component } from 'react';

import './Formload.css';
import { validate } from '@babel/types';

class Formload extends Component{

    constructor(args) {
        super(args)
        this.state = {
            username: '',
            telefono: '',
            correo: '',
            empresa: '',
            cargo: '',
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
        const { username,telefono,correo,empresa,cargo } = this.state;
        return (
                
    <form className="FormGenerador">
         <div className="FormularioGnerador"> 
                <h1 className="TituloGenera">¿Qué necesitas llevar?</h1> 
                <h2 className="SudTituloGenera">Solo trabajamos con capacidad de carga</h2>
        <label className="TextoForm" htmlFor="username"></label>
            <div className="FormularioUno">       
                <input className="ForM1" 
                value={this.state.username}
                onChange={this.onChange.bind(this)}
                name="username"
                type="text"              
                id="username"
                placeholder="Nombre Completo"
                /> 

                 <label className="TextoForm" htmlFor="telefono"></label>
                <input className="ForM2"
                value={this.state.telefono}
                onChange={this.onChange.bind(this)}
                type="text" 
                name="telefono"
                id="telefono"
                placeholder="Teléfono "
                />
            </div>
            <br></br>
            <div className="FormularioUno">
                <label className="TextoForm" htmlFor="correo"></label>         
                <input  className="ForM1"
                value={this.state.correo}
                onChange={this.onChange.bind(this)}
                type="text"  
                name="correo"
                id="correo"
                placeholder="Correo"
                />
                  
                <input  className="ForM2"
                value={this.state.empresa}
                onChange={this.onChange.bind(this)}
                type="text" 
                name="empresa"
                id="empresa"
                placeholder="Empresa"
                />
             </div>
             <br></br>
             <div className="FormularioDos">
                <label htmlFor="cargo" className="TextoForm"></label>         
                <select  className="ForM3"
                name="cargo"
                id="cargo"
                value={this.state.Cargo}
                onChange={this.onChange.bind(this)}>
                <option value="">Cargo</option>
                <option value="Gerente">Gerente</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Camionero">Camionero</option>
                </select>
            </div>
            </div>
            {username === '' || telefono === '' || correo === '' || empresa === '' ? (
                <p className="Prueba">Revise todos los campos</p>  
            ) :null}
            <div className="ButtonGenerador">

            {username && telefono && correo && empresa ? ( 
            <div className="Buttog" onClick={this.save.bind(this)} >
                <p className="ButtonClick">ENVIO</p>  
            </div>
            ) :null }      
           {/*      <span>{this.state.message}</span> */}
             </div>

         </form>
  
        );  
    }

}


export default Formload;