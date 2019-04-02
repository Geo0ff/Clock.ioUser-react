import React from 'react';

const user = (props) => { 
   return <ol>
        <span>name: {props.name} </span>
        <input onChange={props.changeEvent} value={props.children}/>
        <button onClick={props.delEvent}>Delete</button>
        </ol>
}

export default user;