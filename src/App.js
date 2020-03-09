import React, { Component } from 'react'
import { BoardDisplay } from './components'
import io from 'socket.io-client';
import './App.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            symbol: null,
            turn: null,
            socket: null,
            winner: null,
            game: false
        }

    }

    componentDidMount() {
        const socket = io("localhost:5000");
        this.setState({
            socket: socket,
        })


        socket.on('symbol', symbol => {
            console.log(symbol)
            if(symbol === 'x') {
                console.log('setting state to true')
                this.setState( prevState => {
                    return {
                        ...prevState,
                        symbol: symbol,
                        game: true,
                        turn: true
                    }
                }
                )
            }else {
                console.log('setting state to false')
                this.setState(prevState => {
                    return {
                        ...prevState,
                        symbol: symbol,
                        game: true,
                        turn: false
                    }
                })
            }
        })
        socket.on("your-turn", ({board, player}) => {
            console.log('your-turn')
            this.setState( prevState => {
                return {
                    ...prevState,
                    turn: true,
                    board: board
                }
            })
        })
        socket.on("turn-over", () => {
            console.log('turn-over')
            this.setState( prevState =>{
                return{
                    ...prevState,
                    turn: false
                }

            })
        })

        socket.on("winner", ({board, symbol}) => {
            console.log(board)
            console.log('winner' + symbol)
            this.setState((prevState) => {
                return {
                    ...prevState,
                    board: board,
                    winner: symbol
                }})

        })

        socket.on("reset", () => {
            console.log('reset')
            this.setState(prevState => {
                return {
                    ...prevState,
                    board: [
                        null, null, null,
                        null, null, null,
                        null, null, null
                    ],
                    symbol: null,
                    game: false}
            })

        })

        socket.on("new-game", () => {
            console.log('new-game')
            let turn
            if(this.state.symbol === 'x'){
                turn = true
            }else {
                turn = false
            }
            this.setState(prevState => {
                return {
                    ...prevState,
                    game: true,
                    winner: null,
                    turn: turn,
                    board: [
                        null, null, null,
                        null, null, null,
                        null, null, null
                    ]}
            })

        })

    }
    handleClick(){
        console.log('button clicked')
        console.log(this.state.socket.id)
        let socket = this.state.socket

        socket.emit('new-game')
    }

    renderMessage = () => {
        let message;
        if(this.state.game){
            if(this.state.winner !== null){
                if(this.state.winner === this.state.symbol){
                    return (
                        <div>
                            <h1>WINNER</h1>
                            <button onClick={this.handleClick.bind(this)}>Play Again?</button>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <h1>You Lost.</h1>
                            <button onClick={this.handleClick.bind(this)}>Play Again?</button>
                        </div>
                    )
                }
            } else {

            }
        }else{
            if(this.state.turn === true ){
                return <h1>Your turn</h1>
            } else if (this.state.turn === false) {
                return <h1>Opponents turn</h1>
            }
        }
    }

    render() {

        return(
            <div className={'game'}>
                <BoardDisplay symbol={this.state.symbol} turn={this.state.turn} board={this.state.board} socket={this.state.socket}/>
                <div className={'game-details'}>
                    <h1>You are: {this.state.symbol}</h1>
                    {this.renderMessage()}
                </div>
            </div>
        )
    }
}
export default App