import React from 'react';

export interface AvatarProps {
  url: string;
}

const Avatar = (props: AvatarProps) => {
  return(
    <img data-testid="img" src={props.url} alt=""/>
  )
}

export default Avatar;