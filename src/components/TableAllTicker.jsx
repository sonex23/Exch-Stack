import React from 'react';
import { useSelector } from 'react-redux';

const TableAllTicker= () => {
    const tickerList = useSelector((state) => state.tickers.tickersList);
    return (
        <div>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Exchange</th>
                            <th>Exchange Mic</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Website</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tickerList.map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.symbol}</td>
                                    <td>${data.exchange.name}</td>
                                    <td>${data.exchange.mic}</td>
                                    <td>${data.exchange.country}</td>
                                    <td>${data.exchange.city}</td>
                                    <td>${data.exchange.website}</td>
                                    <td><button className="btn btn-primary">EOD</button> <button className="btn btn-primary">Intraday</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableAllTicker;
