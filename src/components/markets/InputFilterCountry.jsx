import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import exchangeActions from '../../redux/actions/exchangeActions';


const InputFilterCountry = () => {
    const countryList = useSelector((state)=>state.country);
    const dispatch = useDispatch();

    return (
        <div>
            <form>
                <select 
                name="filterByCountry" 
                id="filterByCountry" 
                className="form-control"
                onChange={(e)=>dispatch(exchangeActions.setTmp(e.target.value))}
                >
                    {countryList.map((country, index)=>
                      <option 
                      key={index} 
                      value={country} 
                      >
                        {country}
                      </option>)
                        }
                </select>
            </form>
        </div>
    )
}

export default InputFilterCountry;
