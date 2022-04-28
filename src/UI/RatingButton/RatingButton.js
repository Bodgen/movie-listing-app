import React from 'react';
import styled from "styled-components";
import star from '../../assets/img/star.svg'

const RatingButtonStyles = styled.div`
  display: flex;
  align-items: center;
  width: 58px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  color: #FFBD6D;

`

const RatingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`


const RatingButton = () => {
    return (
        <RatingButtonStyles>
            <RatingButtonContainer>
                <img src={star} alt=""/>
                <h6>8.1</h6>
            </RatingButtonContainer>
        </RatingButtonStyles>
    );
};

export default RatingButton;