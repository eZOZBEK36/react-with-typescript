import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutPage: React.FC = () => {
	return (
		<>
			<h1>Page of Informations</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
				assumenda ad autem molestiae facilis illo consequuntur, neque
				laudantium quis nihil?
			</p>
			<NavLink to='/'>
				<button className='btn'>Go Back</button>
			</NavLink>
		</>
	);
};

export default AboutPage;
