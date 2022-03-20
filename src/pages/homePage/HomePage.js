import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characterSlice/services';
import {
    characterNumberState,
    characterOffsetState,
    characterListState,
    getMoreCharacters,
    getBackCharacters,
    isLoadingState,
    isErrorState,
} from '../../store/characterSlice/characterSlice';
import { Loading, Error } from '../../components';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css'

import "./HomePage.css";

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const characterList = useSelector(characterListState);
    const isLoading = useSelector(isLoadingState);
    const isError = useSelector(isErrorState);
    const characterNumber = useSelector(characterNumberState);
    const characterOffset = useSelector(characterOffsetState);

    useEffect(() => {
        dispatch(
            fetchCharacters(
                { characterNumber, characterOffset }
            )
        );
    }, [characterNumber, characterOffset])

    if (isError) return <Error errorMessage={isError} />

    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characterList.map(character =>
                        <div
                            key={character.char_id}
                            onClick={() =>
                                navigate(`/characterDetail${character.char_id}`)
                            }
                            className="character-container"
                        >
                            <img
                                src={character.img}
                                className="character-image"
                            />
                            <div className='character-name'>
                                {character.name}
                            </div>
                        </div>
                    )
                }
            </Masonry >
            {isLoading && <Loading />}
            <div className='get-more-characters-button-container'>
                <button
                    className='get-more-characters-button'
                    onClick={() => dispatch(getBackCharacters())}
                    disabled={characterNumber === 12 && true}

                >
                    Back
                </button>
                <button
                    className='get-more-characters-button'
                    onClick={() => dispatch(getMoreCharacters())}
                    disabled={characterNumber === 48 && true}
                >
                    Get More characters - {characterNumber}
                </button>
            </div>
        </div >
    );
};

export default HomePage;