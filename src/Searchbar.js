import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css"
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Searchbar() {


    const[{}, dispatch] = useStateValue();
    const [inputSearch, setInputSearch] = useState('');
    const history = useHistory();
    
    
    const handleChange = e => {
      e.preventDefault();
      console.log(inputSearch)

      dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: inputSearch
      })
      

      history.push(`/search/${inputSearch}`)

    }


    return (
        <form className="searchBar">
        <input onChange={e => setInputSearch(e.target.value)}
        placeholder="Enter the title"
        value={inputSearch} 
        type="text" />
        
            <Button type="submit" onClick={handleChange}>
            <SearchIcon className="searchBar__inputButton"/>
            </Button>
     
        </form>
    )
}

export default Searchbar
