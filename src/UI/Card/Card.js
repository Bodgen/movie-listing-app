import React from 'react';
import styled from 'styled-components';
import RatingButton from "../RatingButton/RatingButton";
import image from '../../assets/img/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png'

const CardStyles = styled.div`
  width: 280px;
  height: 480px;
  background-color: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  border-radius: 12px;
  color: #EBEEF5;
  margin-bottom: 16px;
`

const CardContainer = styled.div`
  position: relative;
  margin: 7px 12px;
  height: 100%;
`

const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
  margin-bottom: 24px;
  img{
    max-width: 256px;
    
  }
  .rating{
    position: absolute;
    top: 8px;
    left: 10px;
  }
`

const Card = () => {
    return (
        <CardStyles>
            <CardContainer>
                <CardImage>
                    <img src={image} alt=""/>
                    <div className='rating'>
                        <RatingButton/>
                    </div>
                </CardImage>
                <h6>Black Window</h6>
            </CardContainer>
        </CardStyles>
    );
};

export default Card;