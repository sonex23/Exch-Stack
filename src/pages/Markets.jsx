import React from 'react';
import TableAllExchange from '../components/TableAllExchange';

const Markets = () =>{
    return (
        <div>
            <div className="mt-3">
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