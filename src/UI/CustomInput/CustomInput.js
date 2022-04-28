import React from 'react';
import styled from 'styled-components'
import icon from '../../assets/img/search-icon.svg'

const CustomInputContainer = styled.div`
  width: 345px;
  height: 65px;
  border: 1px solid #323B54;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  img{
    margin:0 16px;
  }
`

const InputStyles = styled.input`
  border: none;
  background: none;
  color: #475069;
  font-size: 14px;
  line-height: 16px;
  &:focus{
    outline: none;
  }
`

const CustomInput = () => {
    return (
        <CustomInputContainer>
            <img src={icon} alt=""/>
            <InputStyles/>
        </CustomInputContainer>
    );
};

export default CustomInput;