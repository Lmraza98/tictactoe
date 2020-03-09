import React from 'react'
import Board from './board'
import './index.css'

class BoardDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            board: this.props.board,
            symbol: this.props.symbol,
            turn: this.props.turn,
            socket: this.props.socket
        })
    }

    render() {

        return(
            <div className={"flex-home"}>
                <div className="home">
                    <Board symbol={this.props.symbol} turn={this.props.turn} board={this.props.board} socket={this.props.socket}/>
                </div>
            </div>

        )
    }
}
export default BoardDisplay