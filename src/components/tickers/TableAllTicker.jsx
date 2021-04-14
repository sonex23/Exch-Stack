import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link, useParams } from 'react-router-dom';
import {Button} from "react-bootstrap";
import tikersActions from '../../redux/actions/tickersActions';

const TableAllTicker= () => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0)
    const { mic } = useParams();

    const tickerList = useSelector((state) => state.tickers.tickersList);
    //const exchangeMic = useSelector((state) => state.exchangeMic.exchangeMic);
    const exchangeMic = mic;

    useEffect(()=>{
        setCounter(0)
        dispatch(tikersActions.getLimitedTIcker(exchangeMic,counter.start))
    },[exchangeMic])

     const nextPage=()=>{
        setCounter(counter + 15)
        dispatch(tikersActions.getLimitedTIcker(exchangeMic,counter))
     }
     const prevPage=()=>{
        setCounter(counter - 15)
        dispatch(tikersActions.getLimitedTIcker(exchangeMic,counter))
     }
    
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
                            <th>Chart</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tickerList.map((data, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.symbol}</td>
                                    <td>{data.stock_exchange.name}</td>
                                    <td>{data.stock_exchange.mic}</td>
                                    <td>{data.stock_exchange.country}</td>
                                    <td>{data.stock_exchange.city}</td>
                                    <td>{data.stock_exchange.website}</td>
                                    <td>
                                        <button 
                                         className="btn btn-primary" 
                                        >
                                        <Link 
                                         to={`/ticker/${data.stock_exchange.mic}/${data.symbol}`} 
                                         style={{ textDecoration: 'none', color: 'white' }}>
                                        Daily
                                        </Link>
                                        </button>
                                        {/* <Link to=""> 
                                        <button 
                                        className="btn btn-primary" 
                                        >Intraday</button>
                                        </Link> */}
                                    </td>
                                </tr>
                            )
                        })
                        }
                        
                    </tbody>
                    <Button variant="primary" className="w-50" onClick={prevPage}>Previous</Button>
                    <Button variant="primary" className="w-50" onClick={nextPage}>Next</Button>
                </table>
            </div>
        </div>
    )
}

export default TableAllTicker;
