import { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 25px 20px;
  h3 {
    text-transform: uppercase;
    color: #e3975a;
    font-size: 14px;
    letter-spacing: 1px;
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    margin: 20px 0;
  }
  p {
      color: #777A81;
      line-height: 26px;
  }
`

const Description: FC = () => {
  return (
    <Container>
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </Container>
  )
}

export default Description
