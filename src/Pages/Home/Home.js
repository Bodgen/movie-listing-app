import React from 'react';
import styled from 'styled-components'
import CustomInput from "../../UI/CustomInput/CustomInput";
import Categories from "../../UI/Categories/Categories";
import Card from "../../UI/Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
`

const Description = styled.div`
  .title {
    margin-bottom: 88px;
  }

  a {
    text-decoration: none;
    color: #7c6ef6;
  }
`

const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const Home = () => {
    const [films, setFilms] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=0ccca053096b78aeb501b706e51dece9`).then(response => {
            setFilms(response.data.results)
        })
    }, [])
    return (
        <HomePageStyles>
            <Description>
                <h1 className="title">Movie APP</h1>
            </Description>
            <CustomInput>Search</CustomInput>
            <Categories/>
            <CardSection>
                {films && films.map((film) =>
                    <Link to={`/movie/` + film.id}>
                        <Card key={film.id} title={film.title?film.title:film.name} img={film.poster_path} rating={film.vote_average}/>
                    </Link>
                )}
            </CardSection>
        </HomePageStyles>
    );
};

export default Home;