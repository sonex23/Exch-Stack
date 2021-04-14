import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import exchageMicActions from "../../redux/actions/exchageMicActions";

const InputFilterExchange = () => {
    const exchangeList = useSelector((state)=>state.exchanges.exchangesList);
    const dispatch = useDispatch();
    return (
        <div>
            <form>
                <select name="filterByMic" id="filterByMic" className="form-control" onChange={(e)=> dispatch(exchageMicActions.storeMIC(e.target.value))}>
                    {exchangeList.map((exchange, index)=>
                      <option 
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
