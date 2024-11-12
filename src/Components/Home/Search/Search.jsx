import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import sreachclass from "./Search.module.css";
import { useLocation } from "react-router-dom";

const Search = ({ ShowSearch, setShowSearch,SearchValue,setSearchValue }) => {
    const locatio= useLocation()
    useEffect(()=>{
        if(locatio.pathname.includes('Collections')){
            setShowSearch(true)
        }else(
            setShowSearch(false)
        )
    },[locatio])
  return ShowSearch ? (
    <div>
      <Container className={sreachclass.main_search}>
        <div className={sreachclass.search_container}>
          <input 
          className={sreachclass.input_search}
          value={SearchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
           type="text" 
           placeholder=" Search Product" />
            
          <p className={sreachclass.searchicon_close} onClick={() => setShowSearch(!ShowSearch)}>x</p>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Search;
