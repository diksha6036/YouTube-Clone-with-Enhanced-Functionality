import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.message);
    useEffect(()=>{
      const i =  setInterval(()=>{
        //   console.log("Api pillong");

          dispatch(
           addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(25)+'💫'
           })
          )
       },1500)

       return ()=>clearInterval(i);
    },[])
  return (
    <>
    <div className='ml-[-14px] mt-6 p-3 border border-black h-[500px] w-full bg-slate-100 rounded-tr-lg rounded-tl-lg overflow-y-scroll flex flex-col-reverse'>
      <div>{chatMessages.map((c,i)=> (<ChatMessage name={c.name} message={c.message} key={i}/>))}</div>
      
    </div>
    <form onSubmit={(e)=>{
        e.preventDefault();
        // console.log("On form submit"+liveMessage)
        dispatch(addMessage({
            name:"Diksha",
            message:liveMessage,
        }))
        setLiveMessage("");
    }}
         >
    <div className='w-full p-2 ml-[-14px] border border-black rounded-br-lg rounded-bl-lg'> 
        <input type="text" className='w-72 border border-black ml-1 rounded-lg px-2' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button className='px-2 ml-7 h-8 border border-black rounded-lg bg-gray-200'>Chat</button>
    </div>
    </form>
    </>
  )
}

export default LiveChat
