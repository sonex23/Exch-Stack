import React from 'react';
import InputFilterExchange from '../components/tickers/InputFilterExchange';
import InputSearchTicker from '../components/tickers/InputSearchTicker';
import TableAllTicker from '../components/tickers/TableAllTicker';

const Tickers = () =>{
    return (
        <div>
            <div className="mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Stock Tickers</h1>
                    </div>
                </div>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 mb-3">
                        <span>Filter By Exchange : </span><InputFilterExchange/>
                    </div>
                    <div className="col-12 col-md-6">
                        <span>Search Emiten : </span><InputSearchTicker/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <TableAllTicker/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickers;