import React from 'react';
import styled from "styled-components";

const DetailsStyles = styled.div`

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

const TvDetails = styled.div`
  display: flex;

  .genres {
    display: flex;
    flex-direction: column;
  }

`
const DetailsRow = styled.div`
  width: 100%;
`

const Details = ({currentItem, mediaType}) => {
    return (
        <DetailsStyles>
            {mediaType === 'movie' ?
                <div>
                    <h5>Release Date:</h5>
                    <p>{currentItem.release_date}</p>
                    {currentItem.runtime &&
                        <div>
                            <h5>Run time</h5>
                            <p>{currentItem.runtime}</p>
                        </div>}
                    <h5>Genres</h5>
                    <p>{currentItem.genres.map((item, index) => {
                        if (index === currentItem.genres.length - 1) {
                            return item.name
                        } else
                            return item.name + ', '
                    })}</p></div>
                : <TvDetails>
                    <DetailsRow>
                        <h5>Status</h5>
                        <p>{currentItem.status}</p>
                        <h5>Type</h5>
                        <p>TV Show</p>
                    </DetailsRow>
                    <DetailsRow>
                        <h5>First air date</h5>
                        <p>{currentItem.first_air_date}</p>
                        <h5>Last air date</h5>
                        <p>{currentItem.last_air_date}</p>
                    </DetailsRow>
                    <DetailsRow>
                        <h5>No. of Seasons</h5>
                        <p>{currentItem.number_of_seasons}</p>
                        <h5>No. of episodes</h5>
                        <p>{currentItem.number_of_episodes}</p>
                    </DetailsRow>
                        <div className="genres">
                            <h5>Genres</h5>
                            <p>{currentItem.genres.map((item, index) => {
                                if (index === currentItem.genres.length - 1) {
                                    return item.name
                                } else
                                    return item.name + ', '
                            })}</p>
                        </div>
                </TvDetails>}
        </DetailsStyles>
    );
};

export default Details;