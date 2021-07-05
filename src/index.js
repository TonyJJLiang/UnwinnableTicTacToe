import './index.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'


function Board(){
	const [boardVal, setBoard] = useState(Array(9).fill(""));
	const [turn, changeTurn] = useState("X");
	console.log(boardVal);

	function changeState(e, cellNum){
		let newBoard = boardVal.slice();
		newBoard[cellNum] = turn;
		changeTurn(turn === 'X' ? 'Circle' : 'X');
		setBoard(newBoard);
	}

	return (
		<div className = "board" turn = {turn}>
			<div  className="cell" value={boardVal[0]} onClick={(e)=>{changeState(e,0)}}></div>
			<div  className="cell" value={boardVal[1]} onClick={(e)=>{changeState(e,1)}}></div>
			<div  className="cell" value={boardVal[2]} onClick={(e)=>{changeState(e,2)}}></div>
			<div  className="cell" value={boardVal[3]} onClick={(e)=>{changeState(e,3)}}></div>
			<div  className="cell" value={boardVal[4]} onClick={(e)=>{changeState(e,4)}}></div>
			<div  className="cell" value={boardVal[5]} onClick={(e)=>{changeState(e,5)}}></div>
			<div  className="cell" value={boardVal[6]} onClick={(e)=>{changeState(e,6)}}></div>
			<div  className="cell" value={boardVal[7]} onClick={(e)=>{changeState(e,7)}}></div>
			<div  className="cell" value={boardVal[8]} onClick={(e)=>{changeState(e,8)}}></div>
		</div>
	);
}


ReactDOM.render(<Board/>,document.getElementById('root'))