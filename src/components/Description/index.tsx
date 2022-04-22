import { FC } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  ${({ theme }) => css`
    margin: 20px 0;
    h3 {
      text-transform: uppercase;
      color: ${theme.colors.orange};
      font-size: 14px;
      letter-spacing: 1px;
      margin: 10px 0;
    }
    h2 {
      font-size: 30px;
      line-height: 36px;
      margin: 10px 0;
    }
    p {
      color: ${theme.colors.grey};
      line-height: 26px;
    }
  `}
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
