import React from 'react';
import {useSelector} from 'react-redux';

const InputFilterExchange = () => {
    const exchangeList = useSelector((state)=>state.exchanges.exchangesList);
    return (
        <div>
            <form>
                <select name="filterByMic" id="filterByMic" className="form-control">
                    <option value="all">  
                        All Exchange
                    </option>
                    {exchangeList.map((exchange, index)=><option value={exchange.mic} key={index}>{exchange.name} ({exchange.mic})</option>)}
                </select>
            </form>
        </div>
    )
}

export default InputFilterExchange;
