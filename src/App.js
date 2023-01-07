import { useState, useEffect } from 'react';
import Table from './components/Table';
import './styles/App.css';

const cardsList = [
	{
		id: 0,
		card: '❤️',
		pair: false,
	},
	{
		id: 1,
		card: '💦',
		pair: false,
	},
	{
		id: 2,
		card: '😶‍🌫️',
		pair: false,
	},
	{
		id: 3,
		card: '♻️',
		pair: false,
	},
	{
		id: 4,
		card: '☮️',
		pair: false,
	},
	{
		id: 5,
		card: '🌏',
		pair: false,
	},
	{
		id: 6,
		card: '🥗',
		pair: false,
	},
	{
		id: 7,
		card: '🏂',
		pair: false,
	},
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [start, setStart] = useState(false);

	const randomize = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		if (!start) {
			setCards(array);
			setStart(!start);
		}
	};

	const sortCards = () => {
		const initCards = [];

		for (let i = 0; i <= cardsList.length; i++) {
			cardsList.map((card) => {
				if (!initCards.includes(card)) {
					initCards.push(card);
				} else if (!card.pair) {
					initCards.push(card);
					card.pair = true;
				}
			});
		}

		randomize(initCards);
	};

	const resetGame = () => {};

	return (
		<main className='main'>
			<h1>Memory Game</h1>
			<Table cards={cards} start={start} />
			<button onClick={() => sortCards()} disabled={start}>
				Start Game
			</button>
			<button onClick={() => resetGame()} disabled={!start}>
				Reset
			</button>
		</main>
	);
};

export default App;
