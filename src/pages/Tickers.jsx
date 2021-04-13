import React from 'react';
import InputFilterExchange from '../components/InputFilterExchange';
import InputSearchTicker from '../components/InputSearchTicker';
import TableAllTicker from '../components/TableAllTicker';

const Tickers = () =>{
    return (
        <div>
            <div className="mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Emiten List</h1>
                    </div>
                </div>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-4">
                        <span>Filter By Exchange : </span><InputFilterExchange/>
                    </div>
                    <div className="col-6">
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