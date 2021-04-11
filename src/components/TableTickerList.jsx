import React from 'react';
import {Button} from "react-bootstrap";
const TableTickerList= () => {
    return (
        <div>
            <h2 className="mb-3">Ticker List</h2>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Stok Exchange</th>
                            <th>Stok Exchange(mic)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Stok Exchange</td>
                            <td>Stok Exchange(mic)</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Stok Exchange</td>
                            <td>Stok Exchange(mic)</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Stok Exchange</td>
                            <td>Stok Exchange(mic)</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Stok Exchange</td>
                            <td>Stok Exchange(mic)</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Stok Exchange</td>
                            <td>Stok Exchange(mic)</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <Button variant="primary" href="#" className="w-100">See all Ticker List</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTickerList;
