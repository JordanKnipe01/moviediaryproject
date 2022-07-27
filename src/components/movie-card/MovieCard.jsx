import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import add from '../../assets/add.png';
const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    function add_watchlist(){
        console.log("i was clicked" + " " + item.id);
    }
    return (
        <div>
            <input type="image"  src={add} className='overlay_add' onClick={() => { add_watchlist()}}></input>
      
        
            <Link to={link}>
                <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                    <Button>
                        Details
                    </Button>
                </div>
                <h3>{item.title || item.name}</h3>
            </Link>
        </div>
    );
}

export default MovieCard;