import React from 'react';
import {Container} from "../../ui/Container";
import './PeoplePage.scss';
import ItemsCount from "../../components/ItemsCount/ItemsCount";
import Filter from "../../components/Filter/Filter";
import PeopleList from "../../components/PeopleList/PeopleList";

const PeoplePage = () => {
    return (
        <div className="people-page-wrapper">
            <Container>
                <div className="people-page-block">
                    <ItemsCount />
                    <Filter />
                    <PeopleList />
                </div>
            </Container>
        </div>
    );
};

export default PeoplePage;