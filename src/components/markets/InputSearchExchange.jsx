import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import exchangeActions from '../../redux/actions/exchangeActions';
import tmpActions from '../../redux/actions/tmpActions';

const InputSearchExchange = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state)=> state.tmp.searchInput);

    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(exchangeActions.searchExchanges(searchValue));
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
                     placeholder="Market Name or Mic" 
                     className="form-control"
                     onChange={(e)=> dispatch(tmpActions.storedSearchValue(e.target.value))}
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

export default InputSearchExchange
