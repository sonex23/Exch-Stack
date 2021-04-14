import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router';

const InputFilterExchange = () => {
    const exchangeList = useSelector((state)=>state.exchanges.exchangesList);
    const history = useHistory();
    const { mic } = useParams();

    return (
        <div>
            <form>
                <select 
                name="filterByMic" 
                id="filterByMic" 
                className="form-control" 
                onChange={(e)=> history.push(`/tickers/${e.target.value}`)}>
                    {exchangeList.map((exchange, index)=>
                      <option
                      selected={mic === exchange.mic? true:false} 
                      value={exchange.mic} 
                      key={index} 
                      >
                        {exchange.name} ({exchange.mic})
                      </option>)
                        }
                </select>
            </form>
        </div>
    )
}

export default InputFilterExchange;
