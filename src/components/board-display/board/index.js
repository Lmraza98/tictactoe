import React from 'react'
// import Tile from './tyle'
import './index.css'

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            turn: null
        })
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id, e) {
        let board = this.props.board
        board[id] = this.props.symbol
        this.setState({
            board: board,
            turn: false
        })
        console.log('id: ' + id)
        let socket = this.props.socket
        socket.emit('move', id, this.props.symbol)
    }

    renderYourTurn = () => {
        return(
            <div className="container-fluid">
                <div className="row row-border-right">
                    <div id={0} onClick={this.handleClick.bind(this, 0)} className="col-auto col-border-bottom square-active">
                        {this.state.board[0]}
                    </div>
                    <div id={1} onClick={this.handleClick.bind(this, 1)} className="col-auto col-border-bottom square-active">
                        {this.state.board[1]}
                    </div>
                    <div id={2} onClick={this.handleClick.bind(this, 2)} className="col-auto square-active">
                        {this.state.board[2]}
                    </div>
                </div>
                <div className="row row-border-right">
                    <div id={3} onClick={this.handleClick.bind(this, 3)} className="col-auto col-border-bottom square-active">
                        {this.state.board[3]}
                    </div>
                    <div id={4} onClick={this.handleClick.bind(this, 4)} className="col-auto col-border-bottom square-active">
                        {this.state.board[4]}
                    </div>
                    <div id={5} onClick={this.handleClick.bind(this, 5)} className="col-auto square-active">
                        {this.state.board[5]}
                    </div>
                </div>
                <div className="row">
                    <div id={6} onClick={this.handleClick.bind(this, 6)} className="col-auto col-border-bottom square-active">
                        {this.state.board[6]}
                    </div>
                    <div id={7} onClick={this.handleClick.bind(this, 7)} className="col-auto col-border-bottom square-active">
                        {this.state.board[7]}
                    </div>
                    <div id={8} onClick={this.handleClick.bind(this, 8)} className="col-auto square-active">
                        {this.state.board[8]}
                    </div>
                </div>
            </div>

        )

    }
    renderTheirTurn = () => {
        return(
            <div className="container-fluid">
                <div className="row row-border-right">
                    <div id={0} className="col-auto col-border-bottom square">
                        {this.state.board[0]}
                    </div>
                    <div id={1} className="col-auto col-border-bottom square">
                        {this.state.board[1]}
                    </div>
                    <div id={2} className="col-auto square">
                        {this.state.board[2]}
                    </div>
                </div>
                <div className="row row-border-right">
                    <div id={3} className="col-auto col-border-bottom square">
                        {this.state.board[3]}
                    </div>
                    <div id={4} className="col-auto col-border-bottom square">
                        {this.state.board[4]}
                    </div>
                    <div id={5} className="col-auto square">
                        {this.state.board[5]}
                    </div>
                </div>
                <div className="row">
                    <div id={6} className="col-auto col-border-bottom square">
                        {this.state.board[6]}
                    </div>
                    <div id={7} className="col-auto col-border-bottom square">
                        {this.state.board[7]}
                    </div>
                    <div id={8} className="col-auto square">
                        {this.state.board[8]}
                    </div>
                </div>
            </div>
        )
    }


    render() {

        if( this.state.turn === null && this.props.turn !== null ){
            this.setState({
                turn: this.props.turn
            })
        }
        if( this.state.board !== this.props.board ) {
            this.setState({
                board: this.props.board,
                turn: this.props.turn
            })
        }
        console.log('board rendered')
        console.log(this.state.board)
        let board
        if(this.props.turn){
            board =  this.renderYourTurn()
        }else {
            board = this.renderTheirTurn()
        }
        return(
            <>
                {board}
            </>
        )





    }
}
export default Board