import React from 'react'

const InputSearchExchange = () => {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col-9">
                    <input 
                     type="text" 
                     id="search" 
                     placeholder="Exchange Name or Mic" 
                     className="form-control"
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
