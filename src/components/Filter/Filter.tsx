import React, {FC, useState} from 'react';
import './Filter.scss';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/reducers/CharacterSlice";

const Filter:FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const filters = useAppSelector( s => s.characterReducer.filterEyeColor);
    const activeFilter = useAppSelector( s => s.characterReducer.activeEyeColor);
    const dispatch = useAppDispatch();
    const { handleFilter } = characterSlice.actions;

    return (
        <div className="people-page-filter">
            <span className="mr-3">color eye</span>
            <div
                className="people-page-filter-main"
                onClick={() => setVisible(s => !s)}
            >
                <span>{activeFilter}</span>
                <div className="people-page-filter-main-icon">
                    {visible ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {visible
                &&
            <div className="people-page-filter-add">
                {filters.map((filter) => {
                    return (
                        <div
                            key={filter}
                            className="people-page-filter-add-item"
                            onClick={() => {
                                dispatch(handleFilter(filter));
                                setVisible(false);
                            }}
                        >
                            {filter}
                        </div>
                    )

                })}
            </div>
            }
        </div>
    );
};

export default Filter;