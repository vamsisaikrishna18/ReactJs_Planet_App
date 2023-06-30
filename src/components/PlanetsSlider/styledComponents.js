import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  padding: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #05acff;
  font-size: 44px;
  font-weight: 600;
  text-align: center;
`
