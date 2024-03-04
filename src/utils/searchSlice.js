import { createSlice } from "@reduxjs/toolkit";


const searchSlice =createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;


// we have a Well organised , well optimized search  
// the search is using live api 
// the search is using debouncing (making api calls after cetain time not at every key press geneally after 200ms)
// the search is using caching (when deleting not making api call again and again for which have already in our cache)
