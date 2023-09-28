import React from 'react'
import hotstar_mini from '../../assets/hotstar_mini.svg';
// import { AiSearch } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { SlScreenDesktop } from 'react-icons/sl'
import { TbMovie } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import "./style.scss";

const Sidebar = () => {
    const menuOptions = [{title: "Search", icon: <AiOutlineSearch />, href: "/search/popular_searches" }, {title: "Home", icon: <AiOutlineHome />, href: "/"}, {title: "TV", icon: <SlScreenDesktop />, href: "/explore/tv"}, {title: "Movies", icon: <TbMovie />, href: "/explore/movie"}];
    return (
        <header>
            <Link to={"/"} className="logo_container">
                <img src={hotstar_mini} alt="Hotstar" />
                <span className="badge">Mini</span>
            </Link>
            
            <nav>
                {menuOptions.map((menu, i) => (
                    <Link to={menu.href} className="menu" key={i}>
                        <span className='nav_icon'>{menu.icon}</span>
                        <p>{menu.title}</p>
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Sidebar