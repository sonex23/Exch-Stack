import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


const InputFilterCountry = () => {
    const countryList = useSelector((state)=>state.country);
    const history = useHistory();
    return (
        <div>
            <form>
                <select 
                name="filterByCountry" 
                id="filterByCountry" 
                className="form-control"
                onChange={(e)=> history.push(`/exchages/${e.target.value}`)}>
                    {countryList.map((country, index)=>
                      <option 
                      value={country} 
                      key={index} 
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
