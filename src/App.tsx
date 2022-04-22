import "./App.css"
import NavBar from "./components/NavBar"
import Gallery from "./components/Gallery"
import Description from "./components/Description"
import Price from "components/Price"
import styled, { css } from "styled-components"

const Container = styled.div`
  ${({ theme }) => css`
    margin: ${"0 " + theme.sideMargin};
  `}
`

function App() {
  return (
    <Container className='App'>
      <NavBar />
      <Gallery />
      <Description />
      <Price />
    </Container>
  )
}

export default App
