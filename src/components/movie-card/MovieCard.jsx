import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import add from '../../assets/add.png';
import { useState } from 'react';
import {uid} from "uid";
import {set, ref} from "firebase/database"
import { db } from '../../firebase/firebase';
import { useAuth } from '../../contexts/AuthContext';

const MovieCard = props => {

    const [watchlist_object, set_watchlist_object] = useState("");
    const {currentUser} = useAuth();
    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    function add_watchlist(){
        if(currentUser){
        //set_watchlist_object = item
        //console.log("i was set" + " " + set_watchlist_object);
        const uidd = uid();
        console.log(item.type)
        if(category.tv){
        set(ref(db, `/${currentUser.uid}/${'tv'}/${uidd}`), {
            watchlist_object: item,
            uid: uidd
        })
        }
        if(category.movie){
            set(ref(db, `/${currentUser.uid}/${'movie'}/${uidd}`), {
                watchlist_object: item,
                uid: uidd
            })
        
        }
        set_watchlist_object("");
        console.log("i was set" + " " + item.title);
    }
    else{
        console.log("i was clicked" + " " + item.title + " " + "But you are not logged in");
    }
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