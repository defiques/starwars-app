import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import PeopleListItem from "../PeopleListItem/PeopleListItem";
import './PeopleList.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCharacters} from "../../features/thunk/CharacterThunk";
import Loader from "../Loader/Loader";
import {ICharacters} from "../../types/models/ICharacters";
import {Route, Routes} from "react-router-dom";
import Modal from "../Modal/Modal";
import {characterSlice} from "../../store/reducers/CharacterSlice";

const PeopleList:FC = () => {

    const dispatch = useAppDispatch();
    const loading = useAppSelector( s => s.characterReducer.loading);
    const characters = useAppSelector( s => s.characterReducer.characters);
    const filter = useAppSelector( s => s.characterReducer.activeEyeColor);
    const hasMore = useAppSelector( s => s.characterReducer.hasMore);
    const [page, setPage] = useState<number>(1);
    const [visible, setVisible] = useState<boolean>(false);
    const {clearData} = characterSlice.actions;


    const filterData = (data:ICharacters[], filter: string) => {
        if (filter === 'all') {
            return data
        }

        return data.filter( d => d.eye_color === filter)
    }

    useEffect( () => {
        dispatch(clearData());
    }, [])

    useEffect(() => {

        const controller = new AbortController();
        const { signal } = controller;

        dispatch(fetchCharacters({page, signal}));
        return () => {
            controller.abort();
        }
    }, [page]);

    const observer = useRef<IntersectionObserver|null>(null);
    const lastItemElementRef = useCallback(
        (node:HTMLDivElement) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore && filter === "all") {
                    setPage(s => s + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const handleOpenModal = () => {
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    const filteredData = filterData(characters, filter);

    return (
        <>
            <Routes>
                <Route path="/:id" element=
                    {
                    <Modal
                        visible={visible}
                        handleCloseModal={handleCloseModal}
                        />}/>
            </Routes>
            <div className="people-page-list">
                {filteredData.map( (character, index) => {
                    return (
                        <PeopleListItem
                            key={character.id}
                            data={character}
                            ref={index === characters.length - 1 ? lastItemElementRef : null}
                            handleOpenModal={handleOpenModal}
                        />
                    )

                })}
            </div>
            {loading
                &&
                <div className="flex justify-center items-center">
                    <Loader />
                </div>
            }
        </>

    );
};

export default PeopleList;