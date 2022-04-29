import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import RatingButton from "../../UI/RatingButton/RatingButton";
import axios from "axios";
import {useParams} from "react-router-dom";

const DetailsPageStyles = styled.div`
  display: flex;
  flex-direction: column;
`


const FilmPreview = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%);
  border-radius: 40px;
  margin-bottom: 150px;

  img {
    width: 1200px;
    height: 480px;
    border-radius: 40px;
  }
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

  h2 {
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
  border-radius: 24px;
`
const FilmDescription = styled.div`

  .rating {
    max-width: 62px;
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    font-size: 20px;
  }

  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #767E94;
    margin-bottom: 8px;
  }
`

const DetailsPage = () => {
    const [currentFilm, setCurrentFilm] = useState(null)
    const {movieId} = useParams()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0ccca053096b78aeb501b706e51dece9&language=en-US`)
            .then(response => setCurrentFilm(response.data))
    }, [])
    console.log(currentFilm)
    return (
        <DetailsPageStyles>
            {currentFilm &&
                <div>
                    <FilmPreview>
                        <img src={'https://image.tmdb.org/t/p/w200/' + currentFilm.backdrop_path} alt=""/>
                    </FilmPreview>
                    <AboutFilmPopup>
                        <h2>{currentFilm.title}</h2>
                    </AboutFilmPopup>
                    <Content>
                        <FilmTitle src={'https://image.tmdb.org/t/p/w200/' + currentFilm.poster_path} alt=""/>
                        <FilmDescription>
                            <h2>{currentFilm.tagline}</h2>
                            <p>{currentFilm.overview}</p>
                            <div className='rating'>
                                <RatingButton children={currentFilm.vote_average}/>
                            </div>
                            <h5>Release Date:</h5>
                            <p>{currentFilm.release_date}</p>
                            <h5>Run time</h5>
                            <p>{currentFilm.runtime}</p>
                            <h5>Genres</h5>
                            <p>{currentFilm.genres.map((item, index) => {
                                if (index === currentFilm.genres.length-1) {
                                    debugger
                                    return item.name
                                } else
                                    return item.name + ', '
                            })}</p>
                        </FilmDescription>
                    </Content>
                </div>}
        </DetailsPageStyles>
    );
};

export default DetailsPage;