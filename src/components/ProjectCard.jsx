import { Box, Stack, } from '../utils/LayoutComponents/layout.js';

const ProjectCard = ({ title, description, image, link }) => {


    return (
        <box-l>
            <stack-l>
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={image} alt={title} />
                <a href={link}>View Project</a>
            </stack-l>
        </box-l>
    );
}

export default ProjectCard;