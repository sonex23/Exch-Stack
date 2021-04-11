import React from 'react';
import {Button} from "react-bootstrap";
import { useSelector } from 'react-redux';
const TableExchange = () => {
    const headExchanges = useSelector((state) => state.headExchange.headExchangesList);
    
    return (
        <div>
            <h2 className="mb-3">Markets</h2>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Acronym</th>
                            <th>Mic</th>
                            <th>Country</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {headExchanges.map((data, index) =>{
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.acronym===''? 'OOTC': data.acronym}</td>
                                    <td>{data.mic}</td>
                                    <td>{data.country}</td>
                                    <td>{data.city}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="5">
                                <Button variant="primary" href="#" className="w-100">See all Exchange List</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableExchange
