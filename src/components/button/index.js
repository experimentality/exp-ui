import React from 'react';
import './button.scss';

const Button = ({event, text, disable}) =>{
  return(
    <div className={"x-button " + (disable && 'x-disabled')}>
      <button onClick={event} type="button"> {text} </button>
    </div>
  )
}
export default Button;