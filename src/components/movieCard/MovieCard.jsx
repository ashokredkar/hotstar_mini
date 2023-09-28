import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Genres from '../genres/Genres';
import "./style.scss";
import dayjs from 'dayjs';

const MovieCard = ({ viewInfo, item, mediaType }) => {
    const { url } = useSelector(state => state.home);
    const navigate = useNavigate();

    return (
        <div className="content_card" key={item.id}>
            <img className="display_img" src={url.backdrop + item?.backdrop_path} alt="" />
            <div className="content_info">
                <img src={url.backdrop + item?.backdrop_path} alt="" />
                <div className="content_wrapper">
                    <div className="content_actions">
                        <button onClick={() => navigate(`/${item.media_type || mediaType}/${item.id}`)} className="btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> View Details</button>
                        {/* <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button> */}
                    </div>
                    <div className="content_short_info"><h3>{item?.title || item?.name}</h3><p>({dayjs(item.release_date || item.first_air_date).format("YYYY")})</p></div>
                    <p>{item?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard