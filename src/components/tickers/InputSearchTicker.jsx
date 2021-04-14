import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import tickersActions from "../../redux/actions/tickersActions";
import tmpActions from '../../redux/actions/tmpActions';


const InputSearchTicker = () => {
    const searchValue = useSelector((state)=> state.tmp.searchInput);
    const exchangeMic = useSelector((state) => state.exchangeMic.exchangeMic);
    const dispatch = useDispatch();
    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(tickersActions.getTickersByExchangeCodeAndTickerSymbol(searchValue,exchangeMic));
        tmpActions.storedSearchValue('');
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="form-row">
                    <div className="col-9">
                    <input 
                     type="text" 
                     id="search" 
                     placeholder="Emiten Name or Symbol" 
                     className="form-control"
                     onChange={(e)=>dispatch(tmpActions.storedSearchValue(e.target.value))}
                     value={searchValue}
                     />
                    </div>
                    <div className="col-3">
                    <input 
                     type="submit" 
                     value="Submit" 
                     className="btn btn-primary form-control"
                     />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputSearchTicker
