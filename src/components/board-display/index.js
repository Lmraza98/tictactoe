import React from 'react'
import Board from '../board'
import './index.css'

class BoardDisplay extends React.Component {

    render() {

        return(
            <div className={"flex-home"}>
                <div className="home">
                    <Board/>
                </div>
            </div>

        )
    }
}
export default BoardDisplay