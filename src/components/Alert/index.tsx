import React from 'react';

export interface AlertProps{
  alert: string;
}

const Alert = (props: AlertProps) => {
  return(
    <strong>{props.alert}</strong>
  )
}

export default Alert;