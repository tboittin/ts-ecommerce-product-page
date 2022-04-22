import { FC } from "react"
import styled, { css } from "styled-components"

import { ReactComponent as IconMinus } from "../../images/icon-minus.svg"
import { ReactComponent as IconPlus } from "../../images/icon-plus.svg"
import { ReactComponent as IconCart } from "../../images/icon-cart.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Amount = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.lightGrey};
    border-radius: 5px;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 5px;
    .icon {
      margin: 20px;
      cursor: pointer;
    }
    span {
      font-weight: bold;
    }
  `}
`
const CTA = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.orange};
    border-radius: 5px;
    width: 100%;
    margin-top: 5px;
    .icon {
      path {
        fill: ${theme.colors.white};
      }
    }
    span {
      margin: 20px;
      color: ${theme.colors.white};
      font-weight: bold;
      font-size: 18px;
    }
  `}
`

const AddToCart: FC = () => {
  let amount = 0
  return (
    <Container>
      <Amount>
        <IconMinus className='icon' />
        <span>{amount}</span>
        <IconPlus className='icon' />
      </Amount>
      <CTA>
        <IconCart className='icon' />
        <span>Add to cart</span>
      </CTA>
    </Container>
  )
}

export default AddToCart
