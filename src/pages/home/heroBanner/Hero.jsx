import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Genres from '../../../components/genres/Genres';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [heroSlider, setHeroSlider] = useState([]);
    const [activeHero, setActiveHero] = useState({});
    const { data, loading } = useFetch("/movie/popular");
    const { url } = useSelector(state => state.home);
    const [bg, setBg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // setHeroSlider(data && data?.results);
        setActiveHero(data && data?.results?.[Math.floor(Math.random() * 20)]);
    }, [data]);

    // useEffect(() => {
    //     const background =
    //         url?.backdrop +
    //         data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    //     setBg(background);
    //   }, [data]);

    return (
        <section id="hero" style={{ backgroundImage: `url(${url.backdrop + activeHero?.backdrop_path})` }}>
            <div className="wrapper">
                <h1>{activeHero?.title}</h1>
                {/* <img src={hero_title} alt="" /> */}
                <div className="short_info"><p>{activeHero?.release_date?.substring(0, 4)}</p> • <p>2h 13m</p> • <p>2 Languages</p> • <span>U/A 13+</span></div>
                <p className="desc">{activeHero?.overview}</p>
                <div className="category">
                    <Genres data={activeHero?.genre_ids} />
                </div>
                {/* <div className="hero_actions">
                    <button onClick={() => navigate(`/${activeHero.media_type}/${activeHero.id}`)} className="btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> View Details</button>
                    <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
                </div> */}
            </div>
            {/* <HeroSlider heroSlider={heroSlider} /> */}
        </section>
    )
}

export default Hero