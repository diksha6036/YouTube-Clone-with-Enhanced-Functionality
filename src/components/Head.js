import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState ,useEffect} from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head=()=>{
    const[suggestion,setSuggestions]=useState([]);
    const[showsuggs,setshowsugg]=useState(false);
    const dispatch=useDispatch();
    const searchcache=useSelector(store=>store.search);
   const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
   }

   const[searchQuery,setSearchQuery]=useState("");
//    console.log(searchQuery);

    useEffect(()=>{
      const timer= setTimeout(()=>{
        if(searchcache[searchQuery]){
            setSuggestions(searchcache[searchQuery]);
        }
        else{
            getSearchSuggestions()
        }
        
        },100);

      return ()=>{
        clearTimeout(timer);
      }
     },[searchQuery])

     const getSearchSuggestions=async()=>{
        console.log("API Call- "+searchQuery);
           const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
           const json=await data.json();
        //    console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }))
        }
    return(
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div className="flex col-span-1">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger-icon" className="h-8 cursor-pointer" onClick={()=>toggleMenuHandler()}/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="youtube logo" className="h-8 ml-4"/>
    </div>
   
    <div className="col-span-10 ml-20">
    <div>
        <input className="w-1/2 border border-gray-400 h-9 rounded-tl-3xl rounded-bl-3xl border-r-0 p-3" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setshowsugg(true)} onBlur={()=>setshowsugg(false)}/>
        
        <button className="border border-gray-400 w-12 h-9 absolute rounded-tr-3xl rounded-br-3xl bg-gray-100"><img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="search-icon" className="w-6 ml-2" /></button>
        <img src="https://static-00.iconduck.com/assets.00/mic-icon-358x512-o7rb029b.png" alt="mic-logo" className="h-7 absolute mt-[-33px] ml-[520px]" /> </div>
        {
           showsuggs && searchQuery && (<div className="fixed bg-white py-2 px-2 w-[28rem] rounded-lg shadow-lg border border-gray-100 ">
            <ul className="w-full" >
               {suggestion.map(s=><li key={s} className="flex text-xl py-1 shadow-sm hover:bg-gray-100" ><img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="search-icon" className="h-6 ml-2 mr-2 mt-1"  /> {s}</li>)}
            </ul>
        </div>)
        }
    </div>
   
    <div className="col-span-1 flex "><img src="https://static-00.iconduck.com/assets.00/bell-icon-1715x2048-hael7mhz.png" alt="bell-icon" className="h-8" /><img src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="usericon" className="h-8 mx-2"  /></div>
    </div>
    )
}

export default Head;