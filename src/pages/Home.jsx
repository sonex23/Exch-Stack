import React from 'react';
import Hero from '../components/home/Hero';
import TableExchange from '../components/home/TableExchange';
import TableTickerList from '../components/home/TableTickerList';

const Home = () => {
    return (
        <div>
            <Hero />
            <div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <TableExchange />
                    </div>
                    <div className="col-md-6">
                        <TableTickerList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
