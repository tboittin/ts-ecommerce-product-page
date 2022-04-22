import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  background-color: orange;
  position: relative;
  left: -25px;
  width: 100vw;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`

const Gallery: FC = () => {
  return (
    <Container>
      <img src='./image-product-1.jpg' alt='Sneakers' />
    </Container>
  )
}

export default Gallery
