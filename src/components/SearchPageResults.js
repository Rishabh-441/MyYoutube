import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants';
import SearchItemBox from './SearchItemBox';
import Skimmer from './Skimmer';

const SearchPageResults = () => {
  const [searchParams] = useSearchParams();
  const [searchItems, setSearchItems] = useState([]); // Initialize to an empty array
  const query = searchParams.get('query');

  console.log("Query is: " + query);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
        const json = await response.json();
        console.log("Fetched data:", json); // Log the fetched data for debugging
        setSearchItems(json?.items || []); // Default to an empty array if items is undefined
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    if (query) { // Only fetch videos if the query is defined
      fetchVideos();
    }
  }, [query]);

  // console.log("Search items:", searchItems); // Log the search items to see their state

  return (
    <div>
      {searchItems.length === 0 ? (
        <Skimmer />
      ) : (
        <div className='p-6 w-full h-screen overflow-y-scroll'>
          <h1 className='text-xl font-bold'>Search Results: {query}</h1>
          <div className='flex flex-col'> {/* Center align items */}
            {searchItems.map((item) => (
              <SearchItemBox key={item?.id?.videoId} item={item} />
            ))}
          </div>
        </div>

      )}
    </div>
  );
};

export default SearchPageResults;
