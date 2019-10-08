import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ProjectCard from './ProjectCard.jsx';
import '../styles/Projects.css';

import blockusPreview from '../../public/resources/blockusPreview.png';
import inDevelopment from '../../public/resources/inDevelopment.svg';

const Projects = (props) => (
	<div className="projects-container">
		<ProjectCard 
			title="Blockus"
			description="board game conversion"
			link="https://github.com/PlasmaIntec/blockus"
			picture={blockusPreview}
		/>
		<ProjectCard
			title="Placeholders Review Component"
			description="responsive component design"
			link="https://github.com/kamp-placeholders/reviews"
			picture={inDevelopment}
		/>
		<ProjectCard
			title="Zillions Photo Carousel Component"
			description="backend design"
			link="https://github.com/mye-zillions/photo-carousel"
			picture={inDevelopment}
		/>
		<ProjectCard
			title="Thyrsus"
			description="google map api integration"
			link="https://github.com/PlasmaIntec/Thyrsus"
			picture={inDevelopment}
		/>
	</div>
)

export default Projects;