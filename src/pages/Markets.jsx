import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableAllExchange from '../components/TableAllExchange';
import styled from 'styled-components';

const MarketStyled = styled.div`
    min-height:100vh;
    position:relative;
    padding-bottom:200px;
`;

const Markets = () =>{
    return (
        <MarketStyled>
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Exchange List</h1>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <TableAllExchange/>
                    </div>
                </div>
            </div>
            <Footer/>
        </MarketStyled>
    )
}

export default Markets;