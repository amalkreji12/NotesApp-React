/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';


const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'
const NavBar = ( {userInfo, searchNote, handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if(searchQuery) {
      searchNote(searchQuery)
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

      {!isAuthPage &&( <SearchBar value={searchQuery} onChange={({ target }) => {
        setSearchQuery(target.value);
      }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />)}

      {!isAuthPage && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  )
}

export default NavBar