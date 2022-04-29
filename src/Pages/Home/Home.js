import React from 'react';
import styled from 'styled-components'
import CustomInput from "../../UI/CustomInput/CustomInput";
import Categories from "../../UI/Categories/Categories";
import Card from "../../UI/Card/Card";
import {useEffect} from "react";
import {Link} from "react-router-dom"
import {actions, fetchItems} from "../../redux/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import CardPlaceholder from "../../UI/CardPlaceholder/CardPlaceholder";

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
const categoryItems = ['Movie', 'TV Show']
const filtersCategory = ['movie', 'tv']
const placeholderItems = [1, 2, 3, 4]

const Home = () => {
    const isLoading = useSelector(state => state.movies.isFetching)
    let items = useSelector(state => state.movies.items)
    const category = useSelector(state => state.movies.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    const onSelectCategory = (index) => {
        dispatch(actions.setCategory(index))
    }

    return (
        <HomePageStyles>
            <Description>
                <h1 className="title">Movie APP</h1>
            </Description>
            <CustomInput>Search</CustomInput>
            <Categories activeCategory={category} items={categoryItems} onClickCategory={onSelectCategory}/>
            <CardSection>
                {isLoading ? placeholderItems.map((index) => <CardPlaceholder key={`${index}_movie`}/>) :
                    items && items.filter(
                        (item) => category !== null ? item.media_type === filtersCategory[category] : item
                    )
                        .map((film) =>
                            <Link to={`/movie/${film.media_type}/${film.id}`}>
                                <Card key={film.id} title={film.title ? film.title : film.name}  img={film.poster_path}
                                      rating={film.vote_average}/>
                            </Link>
                        )}
            </CardSection>
        </HomePageStyles>
    );
}

export default Home;