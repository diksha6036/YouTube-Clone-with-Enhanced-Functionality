import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex my-2'>
      <img src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="usericon" className="h-6"  />
      
      <span className='font-bold pr-2'>{name}</span>
      <span>{message}</span>
      
    </div>
  )
}

export default ChatMessage
