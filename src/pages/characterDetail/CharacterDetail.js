import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components';
import "./CharacterDetail.css";

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    const fetchOneCharacter = async () => {
        await axios.get(
            `https://www.breakingbadapi.com/api/characters/${id}`
        ).then((response) => setCharacter(response.data));

    }

    useEffect(() => {
        fetchOneCharacter();
    }, [id])

    return (
        <div>

            {
                character.length !== 0 ?
                 <div className='character-container'>
                        <div className='character-header'>
                            {character[0].name}
                        </div>  
                        <img
                            src={character[0].img}
                            className="character-detail-image"
                        />
                        <div className='character-detail'></div>
                 </div>
                : <Loading />
            }
        </div>
    );
};

export default CharacterDetail;