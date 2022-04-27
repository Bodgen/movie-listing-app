import React from 'react';
import styled from 'styled-components'

const CardPlaceholderStyles = styled.div`
  width: 282px;
  height: 470px;
  //background-color: aqua;
  margin-bottom: 50px;
`

const CardPlaceholderContainer = styled.div`
  position: relative;
  padding: 8px 8px 64px 8px;
  background-color: #121829;
  border-radius: 12px;
`
const CardImage = styled.div`
  width: 265px;
  height: 400px;
  background-color: #20283E;
  border-radius: 8px;
  margin-bottom: 24px;
`

const RatingButton = styled.div`
  position: absolute;
  height: 32px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  left: 16px;
  top: 16px;
`

const DescriptionPlaceholder = styled.div`
  width: 150px;
  height: 16px;
  background-color: #20283E;
  border-radius: 8px;
`

const CardPlaceholder = () => {
    return (
        <CardPlaceholderStyles>
            <CardPlaceholderContainer>
                <CardImage>
                    <RatingButton/>
                </CardImage>
                <DescriptionPlaceholder/>
            </CardPlaceholderContainer>
        </CardPlaceholderStyles>
    );
};

export default CardPlaceholder;