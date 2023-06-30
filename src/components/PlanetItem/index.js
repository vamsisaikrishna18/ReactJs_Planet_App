// Write your code here
import {
  Planet,
  PlanetImage,
  PlanetName,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <Planet>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <PlanetDescription>{description}</PlanetDescription>
    </Planet>
  )
}

export default PlanetItem
