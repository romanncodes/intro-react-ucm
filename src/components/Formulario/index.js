import React from "react";
import Swal from "sweetalert2";


function Formulario(){

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [nombres, setNombres] = React.useState(["Juan", "Pablo", "Tomas", "Rene"]);

    const obtenerNombre = (e)=>{
        console.log(e.target);
        setName(e.target.value);    
    }

    const saludar=()=>{
        if(name==="" || lastName===""){
            Swal.fire({
                title: "Ups!",
                text: `Complete los datos`,
                icon: "error"
              });
            return;    
        }    

        Swal.fire({
            title: "Holas!",
            text: `Hola ${name} ${lastName}`,
            icon: "success"
          });

        setNombres([...nombres, name])  
        setName("")
        setLastName("")
    }
    
    return <>
        <h3>Ejemplo de captura de datos con usestate</h3>

        <input type="text" placeholder="Nombre" onChange={obtenerNombre} value={name} />
        <br />

        <input type="text" placeholder="Apellido" onChange={ (e)=>{setLastName(e.target.value)} } value={lastName} />
        <br/>
        <button onClick={saludar}>saludar</button>

        <p>
            <ul>
                {nombres.map( (item, index)=>(
                    <li key={index}>{item}</li>
                ) )}
            </ul>
        </p>

    </>
}


export {Formulario};