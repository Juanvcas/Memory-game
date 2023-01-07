import Card from './Card';
import '../styles/components/table.css';

const Table = ({ cards, start }) => {
	return (
		<section className='table16'>
			{start &&
				cards.map((card, index) => <Card key={index} img={card.card} />)}
		</section>
	);
};

export default Table;
