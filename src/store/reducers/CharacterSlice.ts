import {ICharacters} from "../../types/models/ICharacters";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCharacters} from "../../features/thunk/CharacterThunk";
import {getNeededData} from "../../features/getNeededData";
import {getAllFilters} from "../../features/getAllFilters";

interface CharacterState {
    characters: ICharacters[],
    filterEyeColor: string[],
    activeEyeColor: string,
    loading: boolean,
    totalCount: number,
    page: number,
    error: string,
    hasMore: boolean,
}

const initialState: CharacterState = {
    characters: [],
    filterEyeColor: ['all'],
    activeEyeColor: 'all',
    loading: false,
    totalCount: 0,
    page: 1,
    error: '',
    hasMore: true,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        handleFilter(state, action:PayloadAction<string>) {
            state.activeEyeColor = action.payload;
        },
        clearData(state) {
            state.characters = [];
            state.totalCount = 0;
            state.page = 1;
            state.filterEyeColor = ['all'];
            state.activeEyeColor = 'all';
            state.hasMore = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            const data = getNeededData(action.payload.data);
            const filters = getAllFilters(data);
            filters.map( (filter) => {
                return !state.filterEyeColor.includes(filter) ? state.filterEyeColor.push(filter) : null
            })
            state.characters = state.characters.concat(data);
            state.loading = false;
            state.totalCount = state.characters.length;
            state.page = action.payload.page;
        });
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.hasMore = false;
            state.loading = false;
        })
    }
});

export default characterSlice.reducer;