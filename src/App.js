import { useState, useEffect, useContext } from 'react';
import Table from './components/Table';
import { MemoryContext } from './context/MemoryContext';
import './styles/App.css';

const App = () => {
	const { start, sortCards, resetGame } = useContext(MemoryContext);

	return (
		<main className='main'>
			<h1>Memory Game</h1>
			<Table />
			<button onClick={() => sortCards()} hidden={start}>
				Start Game
			</button>
			<button onClick={() => resetGame()} hidden={!start}>
				Reset
			</button>
		</main>
	);
};

export default App;
