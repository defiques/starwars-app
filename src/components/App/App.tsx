import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import Layout from "../Layout/Layout";

const App:FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <HomePage /> }/>
                    <Route path="/people/*" element={ <PeoplePage /> } />
                </Route>
            </Routes>
        </div>
    );
};

export default App;