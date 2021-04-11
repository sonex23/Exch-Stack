import React from 'react';
import Header from '../components/Header';
import InputFilterExchange from '../components/InputFilterExchange';
import TableAllExchange from '../components/TableAllExchange';

const Markets = () =>{
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Exchange List</h1>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <TableAllExchange/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Markets;