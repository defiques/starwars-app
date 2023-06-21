import React, {FC} from 'react';
import {Container} from "../../ui/Container";
import AppLogo from '../../assets/app-logo.png'
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header:FC = () => {
    return (
        <div className="header-wrapper">
            <Container>
                <div className="header-wrapper-block">
                    <div className="header-wrapper-img">
                        <NavLink to="/">
                            <img src={AppLogo} alt="App Logo" />
                        </NavLink>
                    </div>
                    <div className="header-wrapper-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/people">People</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;