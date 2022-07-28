import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

import MovieCard from '../components/movie-card/MovieCard';
import Button, { OutlineButton } from '../components/button/Button';
import Input from '../components/input/Input';
import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi';
import { onValue } from 'firebase/database';
import { useAuth } from '../contexts/AuthContext';
const Watchlist = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    const [user_item, set_user_item] = useState([])
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch(props.category) {
                    case category.movie:
                        console.log(props)
                        onValue(ref(db, `/${currentUser.uid}`), snapshot =>{
                            set_user_item([]);
                            const data = snapshot.val();

                            if(data !== null){
                               // Object,values(data).map
                            }
                        })
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;

                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword}/>
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}


export default Watchlist;