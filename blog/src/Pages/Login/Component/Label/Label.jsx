import React from 'react';

const Label = ({ text })=>{ // text = props
    return(
        <div>
            <label> {text} </label>
        </div>
    )
};

export default Label;