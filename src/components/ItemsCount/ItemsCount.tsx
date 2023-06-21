import React, {FC} from 'react';
import './ItemsCount.scss';
import {useAppSelector} from "../../hooks/redux";

const ItemsCount:FC = () => {

    const totalCount = useAppSelector( s => s.characterReducer.totalCount);

    const content =
        totalCount
        ?
        <div>{totalCount} <span className="font-bold">Peoples</span> for you to choose your favorite</div>
        :
        <div>There is no people to choose yet</div>

    return (
        <div className="people-page-title">
            {content}
        </div>
    );
};

export default ItemsCount;