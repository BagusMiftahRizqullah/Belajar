import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        style={squareStyle}
        onClick={this.props.buttonClick}>
      {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
        <button style={buttonStyle}>Reset</button>
        <div style={boardStyle}>
        {this.props.squareGame.map((v,i)=>(
          <Square ket={i} value={v} buttonClick={()=>this.props.squareButton(i)}/>
        ))}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          xIsNext:true,
          stepNumber:0,
          history:[Array(9).fill(null)]
        }
        this.calculateWinner = this.calculateWinner.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.resetStep = this.resetStep.bind(this)
       
      }
    
      resetStep(){
        this.setState({
          xIsNext:true,
          stepNumber:0,
          history:[Array(9).fill(null)]
    
        })
      }
    
      calculateWinner(squares){
        const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
    
        for(let i = 0; i < lines.length;i++){
          const [a,b,c]=lines[i]
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
          }
        }
        return null
      }
    
      handleClick(i){
        const historyPoint = this.state.history.slice(0,this.state.stepNumber + 1)
        const current = historyPoint[this.state.stepNumber]
        const squares = [...current]
        const winner = this.calculateWinner(this.state.history[this.state.stepNumber])
        console.log(winner, "cek pemenang")
        const xO = this.state.xIsNext ? "X" : "O"
       
        if(winner || squares[i]){
          return
        }
        squares[i] = xO
        this.setState({
          history:[...historyPoint,squares],
          stepNumber:historyPoint.length,
          xIsNext:!this.state.xIsNext
        })
      }
  render() {
    const winner = this.calculateWinner(this.state.history[this.state.stepNumber])
    const xO = this.state.xIsNext ? "X" : "O"

    return (
      <div className="game">
        <div className="game-board">
          <Board stepStatus={xO} winStatus={winner} reset={this.resetStep} squaresGame={this.state.history[this.state.stepNumber]} squareButton={this.handleClick} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);