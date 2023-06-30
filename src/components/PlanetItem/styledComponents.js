import styled from 'styled-components'

export const Planet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlanetImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 292px;
  }
`

export const PlanetName = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 22px;
`

export const PlanetDescription = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 18px;
  text-align: center;
`
