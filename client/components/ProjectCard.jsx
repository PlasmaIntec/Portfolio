import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import '../styles/ProjectCard.css';

import gitHubIcon from '../../public/resources/gitHubIcon.png';

const ProjectCard = (props) => (
	<>
		<div className="project-card-container">
			<div>
				{props.title}
			</div>
			<div>
				{props.description}
			</div>
			<div>
				<a href={props.link}>
					<img className="project-card-github-icon" src={gitHubIcon}></img>
				</a>
			</div>
			<div>
				<img className="project-card-picture" src={props.picture}></img>
			</div>
		</div>
	</>
)

export default ProjectCard;