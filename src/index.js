import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryProvider } from './context/MemoryContext';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<MemoryProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MemoryProvider>
);
