import React, { Component } from 'react';

import './FormDriver.css';

class FormDriver extends Component{

    constructor(args) {
        super(args)
        this.state = {
            nombre: '',
            telefono: '',
            departamento: '',
            departamento1: '',
            ciudad2: '',
            ciudad: '',
            categoria: '',
            tipo: '',
            vehiculo: '',
            años: '',
            message: '',
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.nombre)
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
        const { nombre,telefono,departamento,vehiculo,tipo,categoria,ciudad,años,departamento1,ciudad2 } = this.state;
        return (
      <div>    
         <form className="FormularioCamionero">
             <h1 className="TituloCamioneroForm">Gana más dinero con Cargapp</h1>
            <div className="FomularioCamionero2">     
                    <div className="FormCamioneroUno"> 
                        <input className="FormUno"
                            value={this.state.nombre}
                            onChange={this.onChange.bind(this)}
                            type="text" 
                            id="nombre"
                            name="nombre" 
                            placeholder="Nombre completo"
                        /> 
                        <input className="FormDos"
                            value={this.state.telefono}
                            onChange={this.onChange.bind(this)}
                            type="text" 
                            id="telefono"
                            name="telefono" 
                            placeholder="Telefono"
                        />
                    </div>     
                    <div className="FormularioSeleccion">
                        <div className="Disponible">
                            <label>Disponible viajes para esta semana:</label>
                        </div> 
                        <div className="Seleccion">
                            <label className="SeleccionSi">
                            <input className="FormSeleccion" 
                                type="radio"
                                valiue="Si"
                                checked={true}
                             />Si
                            </label> 
                        </div> 
                    </div>  
                    <div  className="Ruta"><label>¿Cual es su ruta preferidad?</label></div>
                    <div className="Origen"><label>Origen:</label> </div>
                    <div className="FormCamioneroDos">
                               
                        <input className="FormTres"
                            value={this.state.departamento1}
                            onChange={this.onChange.bind(this)}
                            type="text" 
                            id="departamento1"
                            name="departamento1" 
                            placeholder="Despartamento"
                        />
                        <input  className="FormCuadro"
                            value={this.state.ciudad}
                            onChange={this.onChange.bind(this)}
                            type="text" 
                            name="ciudad"
                            id="ciudad" 
                            placeholder="Ciudad"
                        />
                    </div>
                    <div className="Origen"><label>Destino:</label> </div>
                    <div className="FormCamioneroDos">
                    <input className="FormTres"
                            value={this.state.departamento}
                            onChange={this.onChange.bind(this)}
                            type="text"  
                            name="departamento"
                            id="departamento"
                            placeholder="Despartamento"
                        />
                        <input  className="FormCuadro"
                            value={this.state.ciudad2}
                            onChange={this.onChange.bind(this)}
                            type="text" 
                            id="ciudad2"
                            name="ciudad2" 
                            placeholder ="Ciudad" 
                        />
                 <div className="FormTipoFor">                
                    <select  className="FormTipo"
                        name="categoria"
                        id="categoria"
                        value={this.state.categoria}
                        onChange={this.onChange.bind(this)}>
                        <option value="">Tipo del vehiculo</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Camionero">Camionero</option>
                    </select>
                    <select  className="FormTipo"
                        type="text" 
                        name="tipo" 
                        placeholder="Tipo de implemento"
                        value={this.state.tipo}
                        onChange={this.onChange.bind(this)}>
                        <option value="">Tipo de implemento </option>
                        <option value="Gerente">Gerente</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Camionero">Camionero</option>
                    </select> 
                </div>   
              <div className="FormTipoFor2"> 
                    <select  className="FormTipo"
                        type="text" 
                        name="vehiculo" 
                        placeholder="Categoria del vehiculo"
                        value={this.state.vehiculo}
                        onChange={this.onChange.bind(this)}>
                        <option value="">Categoria del vehiculo</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Camionero">Camionero</option>
                    </select> 
                    <select  className="FormTipo"
                        type="text" 
                        name="años" 
                        placeholder="Años de experincia"
                        value={this.state.años}
                        onChange={this.onChange.bind(this)}>
                        <option value="">Años de experincia</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Camionero">Camionero</option>
                    </select>
                   </div> 
                    </div>
                    </div>
                    {nombre === '' || telefono === '' || departamento === '' || departamento1 === '' || ciudad === '' || tipo === ''|| vehiculo === ''|| categoria  === '' || ciudad2 === ''|| años === '' ? (
                      <p className="PruebaCamionero">Revise todos los campos</p>  
                      ) :null}
                    <div className="ButtoCamionero">

                         {nombre && telefono && departamento && departamento1 && ciudad  && tipo && años && vehiculo && categoria && ciudad2 ? (         
                    <div className="ButtoC" onClick={this.save.bind(this)} >
                           <p className="ButtonClickCamionero">ENVIO</p>  
                   </div>
                    ) :null }      
                    </div>              
        </form>
    </div>
        );  
    }
   
}


export default FormDriver;