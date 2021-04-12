import React from 'react'

const InputSearchTicker = () => {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col-9">
                    <input type="text" id="search" placeholder="Emiten Name..." className="form-control"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Submit" className="btn btn-primary form-control"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputSearchTicker
