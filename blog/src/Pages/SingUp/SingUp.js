import React, {useState, useEffect} from 'react';
import '../SingUp/SingUp.css'

import login_Api from './api.js'
import Input_S from './component/Input-S/Input';
import Title_S from './component/Title-S/Title';
import Label_s from './component/Label-S/Label';

const SingUp =()=>{

    // const [user, setUser] = useState([])

    useEffect(() => { // efecto a 
        login_Api()
    }, [])

    return(
        <div className='sinUp-container'>

            <Title_S text='Registro'/>
                <Label_s text='Nombre'/>
                    <Input_S 
                       attribute= {{
                        id: 'nombre',
                        name: 'nombre',
                        type: 'text',
                        placeholder: 'Ingrese un nombre'
                        }}
                        //  handleChange={handleChange} // funcion de guardar los datos
                    />
                <Label_s text='Correo'/>

                <Label_s text='Fecha de nacimientp'/>

                <Label_s text='Contraseña'/>

                <button>Iniciar</button>

        </div>
    )
};

export default SingUp;