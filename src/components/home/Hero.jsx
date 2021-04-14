import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
    background-color = #4346E9;
`;

function Hero() {
    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-md-6 p-4">
                    <h1 className="display-4 mb-4">
                    <strong>The fastest ways to follow Markets</strong>
                    </h1>
                    <p className="mb-4">
                    Get all of information about stocks market, and Invest with no worry
                    </p>
                    <Link to="markets">
                     <StyledButton>See the Markets</StyledButton>
                    </Link>
                </div>
                <div className="col-md-6 d-none d-md-inline-block">
                    <img src="img/stocks.jpg" className="img-fluid" alt="ilustrasi"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
