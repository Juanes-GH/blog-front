import React from "react";
import '../Title-S/Title.css'

const Title_S = ({text})=>{ //text = props
    return(
        <div className='title-container' >
           <label className='title-label' > {text} </label> 
        </div>
    )
};

export default Title_S;