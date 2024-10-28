import React, { useEffect, useState } from 'react';
import Button from './Button';
import { YOUTUBE_VIDEO_CATEGORY_LIST_API } from '../utils/constants';
import ButtonListShimmer from './ButtonListShimmer';


const ButtonList = () => {
    const [buttonList, setButtonList] = useState([]);

    useEffect(() => {
      const fetchButtonList = async()=> {
          const data = await fetch(YOUTUBE_VIDEO_CATEGORY_LIST_API);
          const json = await data.json();
          setButtonList(json.items);
      }
      fetchButtonList();
    }, [])
      
    return ( buttonList.length === 0 ? <ButtonListShimmer/> :
    <div
      className='flex mt-3 ml-2 overflow-x-auto whitespace-nowrap px-8 w-11/12'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar on Firefox/IE
    >
      {buttonList.map((btnItem) => (
        <Button key={btnItem.id} btnText={btnItem.snippet.title} />
      ))}
    </div>
    );
}

export default ButtonList;
