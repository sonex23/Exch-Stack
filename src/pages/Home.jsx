import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TableExchange from '../components/TableExchange';
import TableTickerList from '../components/TableTickerList';


const Home =()=> {
    return (
        <div>
            <Header/>
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <TableExchange/>
                    </div>
                    <div className="col-md-6">
                        <TableTickerList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
