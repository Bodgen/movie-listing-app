import React from 'react';
import styled from 'styled-components';
import RatingButton from "../RatingButton/RatingButton";

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 480px;
  background-color: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  border-radius: 12px;
  color: #EBEEF5;
  margin-bottom: 16px;
  transition: transform .3s cubic-bezier(.75, .25, .25, .75);
  
  &:hover {
    transform: scale(1.05);
  }

`

const CardContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 8px;
`
const Poster = styled.img`
  width: 256px;
  height: 400px;
  border-radius: 8px;
  transition: transform .3s cubic-bezier(.75, .25, .25, .75);
  object-fit: cover;
`
const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
  margin-bottom: 10px;

  .rating {
    position: absolute;
    top: 16px;
    left: 18px;
  }
`

const Card = ({title, img, rating}) => {
    return (
        <CardStyles>
            <CardContainer>
                <CardImage>
                    <Poster src={'https://image.tmdb.org/t/p/w200/' + img} alt={title}/>
                    <div className='rating'>
                        <RatingButton children={rating}/>
                    </div>
                </CardImage>
                <h6>{title}</h6>
            </CardContainer>
        </CardStyles>
    );
};

export default Card;