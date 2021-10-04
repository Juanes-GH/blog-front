import axios from 'axios'; 

const login_Api = async ()=>{
    const res = await axios.get('http://localhost:3000/')//manera de traer datos de la db
    console.log(res)
}

export default login_Api