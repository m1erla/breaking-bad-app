import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCharacters = createAsyncThunk('characters/getCharacters', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`);
    return res.data;

})
export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: "id1e",
        error: "",
        page: 0,
        hasNextPage: true,
        item: {}, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            console.log(action.payload);
            state.item = action.payload[0];
            state.status = "success";
        }) 
         
    }
});



export default charactersSlice.reducer;