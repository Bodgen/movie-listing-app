import React from 'react';
import styled from "styled-components";

const CategoriesStyles = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  color: #EBE9FE;
  margin-top: 20px;
  margin-bottom: 88px;
  max-width: 477px;

  ul {
    display: flex;
    margin: 16px 16px 16px 40px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }

  ul li {
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    text-align: center;
    margin-right: 32px;
    padding: 8px 32px;
    border-radius: 8px;
  }

  .active {
    background-color: #7B6EF6;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

`

const Categories = ({items,activeCategory,onClickCategory}) => {
    return (
        <CategoriesStyles>
            <ul>
                <li className={activeCategory===null?'active':''} onClick={()=>onClickCategory(null)}>All</li>
                {items.map((item, index) => <li
                    className={activeCategory === index ? 'active' : ''}
                    onClick={() => onClickCategory(index)} key={`${item}_${index}`}>{item}
                </li>)}</ul>
        </CategoriesStyles>
    );
};

export default Categories;