import React from 'react';
import {Container} from "../../ui/Container";
import './HomePage.scss';
import HomeBanner from "../../assets/home-banner.png"
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Container>
                <div className="homepage-wrapper-block">
                    <div className="homepage-wrapper-left">
                        <div className="homepage-wrapper-left-maintext">
                            <span className="font-bold">Find</span> all your
                            favorite <span className="font-bold">character</span>
                        </div>
                        <div className="homepage-wrapper-left-addtext">
                            You can find out all the information about your favorite characters
                        </div>
                        <div className="homepage-wrapper-left-button">
                            <Link to="/people">See more...</Link>
                        </div>
                    </div>
                    <div className="homepage-wrapper-right">
                        <div className="homepage-wrapper-right-img">
                            <img src={HomeBanner} alt="Home Banner" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;