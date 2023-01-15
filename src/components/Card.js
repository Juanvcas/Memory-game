import { useContext } from 'react';
import { MemoryContext } from '../context/MemoryContext';
import '../styles/components/card.css';

const Card = ({ id, img, picked }) => {
	const { isPicked } = useContext(MemoryContext);
	return (
		<div
			className={`card ${picked && 'red'}`}
			onClick={() => !picked && isPicked(id)}
		>
			{img}
		</div>
	);
};

export default Card;
