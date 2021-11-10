import React from 'react';
import Navbar from './components/Navbar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<TodosPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
