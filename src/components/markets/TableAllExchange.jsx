import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import exchangeActions from '../../redux/actions/exchangeActions';

const TableAllExchange = () => {
    const exchangesList = useSelector((state)=>state.exchanges.exchangeFiltered);
    const country = useSelector((state)=>state.exchanges.tmp)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(exchangeActions.filterExchange(country))    
    },[country])

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
