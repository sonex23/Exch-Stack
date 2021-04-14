import React from 'react';
import { useSelector } from 'react-redux';

const TableAllExchange = () => {
    const exchangesList = useSelector((state)=>state.exchanges.exchangeSearch)
    return (
        <div>
            <div className="card shadow p-3">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Acronym</th>
                            <th>Mic</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exchangesList.map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.acronym===''? 'OOTC': data.acronym}</td>
                                    <td>{data.mic}</td>
                                    <td>{data.country}</td>
                                    <td>{data.city}</td>
                                    <td>{data.website}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableAllExchange
