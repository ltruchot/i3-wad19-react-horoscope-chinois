import React from 'react';

function FormControl(props) {
  return (
    <div className="form-group">
      <label>{props.text}</label>
      <input type={props.type ? props.type : 'text'} className="form-control" />
    </div>
  );
}

export default FormControl;
