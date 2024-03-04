import React from 'react'

const commentsData=[
    {
        name:'Diksha Malik',
        text:"lorem ipsum ico da lino poreop sanitino", 
        replies:[
            {
                name:'Diksha Malik',
                text:"lorem ipsum ico da lino poreop sanitino", 
                replies:[
                  
                ]
            }
        ]
    },
    {
        name:'Diksha Malik',
        text:"lorem ipsum ico da lino poreop sanitino", 
        replies:[
            {
                name:'Diksha Malik',
                text:"lorem ipsum ico da lino poreop sanitino", 
                replies:[
                  
                ]
            }
        ]
    },
    {
        name:'Diksha Malik',
        text:"lorem ipsum ico da lino poreop sanitino", 
        replies:[
            {
                name:'Diksha Malik',
                text:"lorem ipsum ico da lino poreop sanitino", 
                replies:[
                    {
                        name:'Diksha Malik',
                        text:"lorem ipsum ico da lino poreop sanitino", 
                        replies:[
                            {
                                name:'Diksha Malik',
                                text:"lorem ipsum ico da lino poreop sanitino", 
                                replies:[
                                  
                                ]
                            },
                            {
                                name:'Diksha Malik',
                                text:"lorem ipsum ico da lino poreop sanitino", 
                                replies:[
                                  
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:'Diksha Malik',
        text:"lorem ipsum ico da lino poreop sanitino", 
        replies:[
            {
                name:'Diksha Malik',
                text:"lorem ipsum ico da lino poreop sanitino", 
                replies:[
                  
                ]
            }
        ]
    },
    {
        name:'Diksha Malik',
        text:"lorem ipsum ico da lino poreop sanitino", 
        replies:[
            {
                name:'Diksha Malik',
                text:"lorem ipsum ico da lino poreop sanitino", 
                replies:[
                  
                ]
            }
        ]
    },
]

const Comment=({data})=>{
    const {name,text,replies}=data;
  return(
    <div className='flex shadow-sm  p-2 bg-gray-100 w-[950px] my-4 rounded-lg'>
        <img className='w-15 h-12' src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="userlogo" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

const CommentsList=({comments})=>{
 return comments.map((comment,index)=>(
            // return <Comment data={comment} key={index}/>
            <div>
                <Comment data={comment} key={index}/>
                <div className='pl-5 ml-4 border border-l-black w-[950px]'>
                {/* <Comment data={comment} key={index}/>
                <Comment data={comment} key={index}/>
                <Comment data={comment} key={index}/> */}
                <CommentsList comments={comment.replies}/>
                </div>
            </div>

 ))
}
const CommentsConatiner = () => {
  return (
    <div className='mx-5  p-2 '>
     <h1 className='text-2xl font-bold'>Comments:</h1>
     <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsConatiner
