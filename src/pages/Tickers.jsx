import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputFilterExchange from '../components/InputFilterExchange';
import TableAllTicker from '../components/TableAllTicker';

const Tickers = () =>{
    return (
        <div>
            <Header/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Emiten List</h1>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <span>Filter By Exchange : </span><InputFilterExchange/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <TableAllTicker/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Tickers;