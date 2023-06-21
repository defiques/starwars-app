import ky from "ky";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IData} from "../../types/models/IData";

const api = ky.create({
    prefixUrl: "https://swapi.dev/api/people/"
});

interface apiData {
    data: IData[],
    page: number,
}

export const fetchCharacters = createAsyncThunk<
    apiData,
    {
        page: number, signal: AbortSignal
    }
    >
(
    'character/fetchCharacters',
    async ({page, signal}, {rejectWithValue}) => {
        try {
            const data = await api.get("", {
                searchParams: {
                    page
                },
                signal
            }).json();
            // @ts-ignore
            return {data: data.results, page}
        }

        catch (e) {
            return rejectWithValue("Произошла ошибка")
        }

    }
)