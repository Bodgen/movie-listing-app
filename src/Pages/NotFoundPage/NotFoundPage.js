import React from 'react';
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import mainImg from "../../assets/img/404Page.svg"
import {Link} from "react-router-dom";

const NotFoundPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 40px;

  img {
    width: 400px;
    height: 320px;
    margin-bottom: 40px;
  }

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
    color: #8E95A9;
  }
`

const NotFoundPage = () => {
    return (
        <NotFoundPageStyles>
            <img src={mainImg} alt=""/>
            <h2>Lost your way?</h2>
            <p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
            <Link to='/'>
                <Button>Go Home</Button>
            </Link>
        </NotFoundPageStyles>
    );
};

export default NotFoundPage;