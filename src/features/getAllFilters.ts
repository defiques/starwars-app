import {ICharacters} from "../types/models/ICharacters";

export const getAllFilters = (data:ICharacters[]) => {
    const res: string[] = [];
    for (const d of data) {
        if (!res.includes(d.eye_color)) {
            res.push(d.eye_color)
        }
    }

    return res;
}