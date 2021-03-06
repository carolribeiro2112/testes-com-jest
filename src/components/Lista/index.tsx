import React from 'react';

export interface ListaProps {
  profession: string;
}

const Lista = (props: ListaProps) => {
  return(
    <>
      <p>Profissão</p>
      <ul data-testid="list">
        <li data-testid="item">{props.profession}</li>
      </ul>
    </>
  )
}

export default Lista;