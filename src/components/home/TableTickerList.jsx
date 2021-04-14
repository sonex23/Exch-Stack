import React from 'react';
import {Button} from "react-bootstrap";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const TableTickerList= () => {
    const headTicker = useSelector((state) => state.headTicker.headTickerList);
    
    return (
        <div>
            <h2 className="mb-3">Price Updates</h2>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Emiten</th>
                            <th>Exchange</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                    {headTicker.map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.symbol}</td>
                                    <td>{data.exchange}</td>
                                    <td>${data.open}</td>
                                    <td>${data.close}</td>
                                    <td>${data.volume}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="5">
                                <Link to="/tickers/XNAS">
                                 <Button variant="primary" className="w-100">See all Ticker List</Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTickerList;
