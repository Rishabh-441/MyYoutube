import React, { useEffect, useState } from 'react';
import LiveMessage from './LiveMessage';
import { generateRandomMessage, generateRandomName } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/liveChatSlice';

const LiveChat = () => {
    const messages = useSelector((store) => store.liveChat.messages);
    const dispatch = useDispatch();
    const [myMessage, setMyMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(()=> {
            dispatch(addMessage({name: generateRandomName(), message: generateRandomMessage()}));
        }, 1500);

        return () => clearInterval(interval);
    }, [dispatch, messages]);

  return (
    <>
      <div className='h-[460px] border-2 border-black rounded-t-lg bg-gray-100'>
        <div className='flex items-center border-b-2 border-black'>
            <h1 className='p-2'>LiveChat</h1>
            <img className='h-12' src="https://imgs.search.brave.com/q2Nz9LWXIsCcilIctq-8ZhcrWJbXACFQzDOEk_yG8AI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE2LzAx/Ny8wODIvbm9uXzJ4/L2xpdmUtbGl2ZS10/cmFuc3BhcmVudC1s/aXZlLWljb24tZnJl/ZS1wbmcucG5n" alt="Live" />
        </div>
        <div className='h-[400px] p-2 overflow-y-scroll flex-col-reverse'>
          {
            [...messages].reverse()?.map(({name, message}, index) => (
              <LiveMessage key={index} name={name} message={message} />
            ))
          }
        </div>

      </div>

      <form onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name:"Rishabh Tiwari", message: myMessage}));
          setMyMessage("");
      }} className='border-2 border-t-0 border-black p-2 rounded-b-lg flex'>
        <input
          onChange={(e) => setMyMessage(e.target.value)}
          value={myMessage}
          className='border-none bg-slate-200 rounded-lg w-full p-2 mr-2'
          type="text"
          placeholder="Type your message..."
        />
        <button className='p-2 border-2 rounded-lg bg-green-200'>Send</button>
      </form>
    </>
  );
};

export default LiveChat;
