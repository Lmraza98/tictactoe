import React from 'react'
import './index.css'

class Board extends React.Component {


    render() {

        return(
            <div className="container-fluid">
                <div className="row row-border-right">
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto square">
                    </div>
                </div>
                <div className="row row-border-right">
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto square">
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto col-border-bottom square">
                    </div>
                    <div className="col-auto square">
                    </div>
                </div>
            </div>

        )
    }
}
export default Board