import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
    "characters/getCharacters",
    async ({ characterNumber, characterOffset }) => {
        const response = await axios.get(
            `https://www.breakingbadapi.com/api/characters?limit=${characterNumber}&offset=${characterOffset}`
        )
       
        return response.data
    }
);
