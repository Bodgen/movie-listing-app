import React from 'react';
import styled from 'styled-components'

const ButtonStyles = styled.div`
  width: 120px;
  height: 55px;
  background: #7B6EF6;
  border: 2px solid #7B6EF6;
  border-radius: 12px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover{
    background-color:#5A4AF4 ;
  }
`


const Button = ({children}) => {
    return (
        <ButtonStyles>
            <h6>{children}</h6>
        </ButtonStyles>
    );
};

export default Button;