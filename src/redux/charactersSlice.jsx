import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCharacters = createAsyncThunk('character/getCharacter', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
    return res.data;

})
export const charactersSlice = createSlice({
    name: "character",
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.items = action.payload;
            
            
        }) 
         
    }
});



export default charactersSlice.reducer;
