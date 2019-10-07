import React from 'react';


const blog = (props)=>{
    return(
        <div>
            <h1>This is our header</h1>
            <p>{props.title}</p>
            <p>{props.des}</p>
        </div>
        

    )
}

export default blog