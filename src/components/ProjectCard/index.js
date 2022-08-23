import './index.css'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <li>
      <img className="img1" src={imageUrl} alt={name} />
      <p className="h1">{name}</p>
    </li>
  )
}

export default ProjectCard
