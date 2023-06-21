import {IData} from "../types/models/IData";
import {ICharacters} from "../types/models/ICharacters";

export const getNeededData = (data:IData[]): ICharacters[] => {
    const idRegExp = /\/([0-9]*)\/$/;
    return data.map( (d) => {
        return {
            id: d.url.match(idRegExp)![1],
            birth_year: d.birth_year,
            eye_color: d.eye_color,
            gender: d.gender,
            hair_color: d.hair_color,
            height: d.height,
            mass: d.mass,
            name: d.name,
            skin_color: d.skin_color
        }
    })
}