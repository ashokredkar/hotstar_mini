import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleQuery = (event) => {
        if(event.key === "Enter" && query.length > 2){
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className="search_bar">
            <FiSearch className='icon_search' />
            <input type="text" onKeyUp={handleQuery} onChange={(e) => setQuery(e.target.value)} />
            {/* <AiOutlineClose className='icon_search' /> */}
        </div>
    )
}

export default SearchBar