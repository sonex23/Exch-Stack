import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TableExchange from '../components/TableExchange';
import TableTickerList from '../components/TableTickerList';
import Footer from '../components/Footer';
import styled from 'styled-components';

const HomeStyled = styled.div`
    min-height : 100vh;
    position: relative;
    padding-bottom : 200px;
    @media screen and (max-width:576px){
        padding-bottom: 500px;
    }
`;


const Home = () => {
    return (
        <HomeStyled>
            <Header />
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <TableExchange />
                    </div>
                    <div className="col-md-6">
                        <TableTickerList />
                    </div>
                </div>
            </div>
            <Footer />
        </HomeStyled>
    )
}

export default Home
