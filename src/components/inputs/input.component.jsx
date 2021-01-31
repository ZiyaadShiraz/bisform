import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props) {
  return (
    <TextField
      required
      id='standard-required'
      variant={props.variant}
      label={props.label}
      style={{ width: `${props.width}` }}
    />
  );
}

export default Input;
