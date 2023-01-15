import { useContext } from 'react';
import { MemoryContext } from '../context/MemoryContext';
import Card from './Card';
import '../styles/components/table.css';

const Table = () => {
	const { cards, start } = useContext(MemoryContext);
	return (
		<section className='table16'>
			{start &&
				cards.map((card, index) => (
					<Card key={index} id={card.id} img={card.card} picked={card.picked} />
				))}
		</section>
	);
};

export default Table;
