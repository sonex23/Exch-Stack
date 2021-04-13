import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import exchageCountryAction from "../redux/actions/exchageCountryAction";

const InputFilterCountry = () => {
    const countryList = useSelector((state)=>state.country);
    // const dispatch = useDispatch();
    return (
        <div>
            <form>
                <select name="filterByCountry" id="filterByCountry" className="form-control">
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
