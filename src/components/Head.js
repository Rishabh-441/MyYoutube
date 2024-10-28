import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_URL } from '../utils/constants';
import { addToCache } from '../utils/searchSlice';
import { Link } from 'react-router-dom';


const Head = () => {
    const [searchText, setSearchText] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
    const dispatch = useDispatch();
    const cacheData = useSelector((store) => store.search.searchCache);


    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!searchText) {
                setIsSuggestionOpen(false);
                return;
             } // Avoid fetching when searchText is empty
    
            if (cacheData.hasOwnProperty(searchText)) {
                setSearchSuggestions(cacheData[searchText] || []);
                setIsSuggestionOpen(true); // Fallback to an empty array
            } else {
                try {
                    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_URL + searchText);
                    const json = await data.json();
                    if (json && json[1]) {
                        dispatch(addToCache({ [searchText]: json[1] }));
                        setSearchSuggestions(json[1]);
                        setIsSuggestionOpen(true);
                    } else {
                        setSearchSuggestions([]); // Fallback if no suggestions are returned
                    }
                } catch (error) {
                    console.error("Error fetching search suggestions:", error);
                    setSearchSuggestions([]); // In case of error
                }
            }
        }, 200);
    
        return () => clearTimeout(timer);
    }, [searchText, cacheData, dispatch]);
    

    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='fixed bg-white z-50 left-0 top-0 w-full grid grid-flow-col shadow-lg p-4'> 
        <div className='flex col-span-1'>
            <img 
                onClick={() => handleMenuToggle()}
                className='h-6'
                src="https://imgs.search.brave.com/fC3dBqW1gmAK9uNEAr4_p084RMOLpcCW6lFw3Gnertg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTIvMTAv/dGhyZWVsaW5lcy5w/bmc" 
                alt="menuToggleButton" />
            <Link to={`/`}>
            <img 
                className='h-6'
                src="https://imgs.search.brave.com/l6KgUZ58kQsHO99QU95oCel0knh0gTd3lTRlrXqqDIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvZG93bmxvYWQt/eW91dHViZS1sb2dv/LXdpdGhvdXQtYmFj/a2dyb3VuZC5wbmc" 
                alt="" />
            </Link>
            
        </div>
        <div className='col-span-10 h-8'>
            <input
                value={searchText || ""}
                className='w-1/2 border border-gray-500 rounded-l-full p-1 px-5'
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                type="text" name="searchBox" id="searchBox"
                onFocus={() => {
                    if (searchText) setIsSuggestionOpen(true);
                }}
                onBlur={(e) => {
                    setTimeout(() => setIsSuggestionOpen(false), 200);  // Delay to allow click to register
                }}
            />
            <Link to={`/searchPage?query=${encodeURIComponent(searchText)}`}>
            <button className='border border-gray-500 rounded-r-full p-1 px-3 bg-gray-200'
                >Search</button>
            </Link>
                

            {isSuggestionOpen && Array.isArray(searchSuggestions) && searchSuggestions.length > 0 && 
                <div className='text-left w-1/2 bg-white px-5 py-2 rounded-lg shadow-lg'>
                {searchSuggestions.map((s) => (
                    <div className="py-1 px-2 hover:bg-gray-200 rounded-sm cursor-pointer"
                        key={s}
                        onClick={(e) => {
                            console.log(e.target.textContent);
                            setSearchText(e.target.textContent);
                            setIsSuggestionOpen(false);  // Close suggestion box after selection
                        }}
                    >
                        {s}
                    </div>
                ))
            }
        </div>
    }

        </div>
        <div className='col-span-1 flex justify-end'>
            <img 
                className='h-6'
                src="https://imgs.search.brave.com/MfCMRjbwpgFuoONjuznH5NyMPYgEXwI4nagKtkUzPOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n" 
                alt="user icon" />
        </div>
    </div>
  )
}

export default Head
 