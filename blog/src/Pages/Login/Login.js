import React, {useState} from 'react';
import './Login.css'
import Title from './Component/Title/Title';
import Label from './Component/Label/Label';
import Input from './Component/Input/Input';

const Login = ()=>{

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value){
        if(name === 'usuario'){
            // variable para guardar
            setUser(value)
        }else {
            setPassword(value)
        }
    }

    function handleSubmit(){
        let account = { user, password }
        if(account){
            console.log('account:', account)
        }
    }

    return(
     <div className='login-container'>

            <Title text='Iniciar sesion' />
            <Label text='Usuario' />
            <Input 
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese un usuario'

            }}
             handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input 
            attribute={{
                id: 'constraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese un usuario'

            }}
             handleChange={handleChange}
            />
            <button onClick={handleSubmit}>
                Iniciar
            </button>
            <img src='' />
    </div>

    )
};

export default Login;