import React from 'react';
import styled from "styled-components";
import preview from '../../assets/img/film-preview.png';
import filmTitle from '../../assets/img/film_title.png';
import RatingButton from "../../UI/RatingButton/RatingButton";

const DetailsPageStyles = styled.div`
  display: flex;
  flex-direction: column;
`


const FilmPreview = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%);
  border-radius: 40px;
  margin-bottom: 150px;
`

const AboutFilmPopup = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 200px;
  top: 488px;
  width: 560px;
  height: 144px;
  background: rgba(32, 40, 62, 0.8);
  border-radius: 24px;

  h1 {
    padding-left: 40px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;


`
const FilmTitle = styled.img`
  height: 750px;
  width: 480px;
  margin-right: 80px;
`
const FilmDescription = styled.div`
  h2{
    margin-bottom: 24px;
  }
  p{
    margin-bottom: 24px;
  }
`

const DetailsPage = () => {
    return (
        <DetailsPageStyles>
            <FilmPreview>
                <img src={preview} alt=""/>
            </FilmPreview>
            <AboutFilmPopup>
                <h1>Film Name</h1>
            </AboutFilmPopup>
            <Content>
                <FilmTitle src={filmTitle} alt=""/>
                <FilmDescription>
                    <h2>Title</h2>
                    <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the
                        efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble
                        once more in order to undo Thanos' actions and restore order to the universe once and for all,
                        no matter what consequences may be in store.</p>
                    <RatingButton/>
                </FilmDescription>
            </Content>
        </DetailsPageStyles>
    );
};

export default DetailsPage;