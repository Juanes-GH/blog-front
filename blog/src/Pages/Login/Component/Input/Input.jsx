import React from "react";
import './Input.css';

const Input =({ attribute, handleChange, param })=>{
    return(
        <div>
            <input 
                id={attribute.id} //
                name={attribute.name} //
                placeholder={attribute.placeholder} // ms que aparece dentro del input
                type={attribute.type} //
                onChange={ (e)=> handleChange(e.target.name, e.target.value) } // utiliza para el cambio del input
                className='regular-style' //
            />
        </div>
    )
};

export default Input;