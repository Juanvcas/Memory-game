import { createContext, useState } from 'react';
import { cardsList } from './Cards';

export const MemoryContext = createContext();

export const MemoryProvider = (props) => {
	const [cards, setCards] = useState([]);
	const [start, setStart] = useState(false);

	const randomize = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		setCards(array);
		setStart(true);
	};

	const sortCards = () => {
		const initCards = [];

		for (let i of cardsList) {
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

	const resetGame = () => {
		cardsList.map((card) => {
			card.pair = false;
			card.picked = false;
		});
		sortCards();
	};

	let pairs = [];

	const isPicked = (card) => {
		console.log('pick');
		const list = [...cards];
		pairs.push(card);
		if (pairs.length === 2) {
			if (pairs[0] === pairs[1]) {
				list.map((i) => {
					if (i.id === card) i.picked = true;
				});
				setCards(list);
			} else {
				pairs.splice(0, pairs.length);
			}
		}

		const pickeds = list.filter((i) => i.picked);
		if (pickeds.length === list.length) {
			alert('¡You Win!');
		}
	};

	return (
		<MemoryContext.Provider
			value={{
				cardsList,
				cards,
				setCards,
				start,
				sortCards,
				resetGame,
				isPicked,
			}}
		>
			{props.children}
		</MemoryContext.Provider>
	);
};
