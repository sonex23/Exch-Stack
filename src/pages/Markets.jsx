import React from 'react';
import TableAllExchange from '../components/TableAllExchange';
import InputFilterCountry from '../components/InputFilterCountry';

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
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 mb-3">
                        <span>Filter By Country: </span><InputFilterCountry/>
                    </div>
                    {/* <div className="col-12 col-md-6">
                        <span>Search Emiten : </span><InputSearchTicker/>
                    </div> */}
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