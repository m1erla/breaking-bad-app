import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const char_limit = 12;
export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?_page=${page}&_limit=${char_limit}`);
    return res.data;

})
export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: "idle",
        error: "",
        page: 0,
        hasNextPage: true,
        item: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.page += 1;
            state.statuis = "success";
            if(action.payload.length < 12){
                state.hasNextPage = false;
            }
            
            
        }) 
         
    }
});



export default charactersSlice.reducer;
