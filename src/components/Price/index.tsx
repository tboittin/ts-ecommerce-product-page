import { FC } from "react"
import styled, { css } from "styled-components"

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .new-price {
      display: flex;
      align-items: center;
      h2 {
          margin: 0;
          font-size: 30px;
      }
      span {
        font-weight: bold;
        color: ${theme.colors.orange};
        background-color: ${theme.colors.lightOrange};
        padding: 5px;
        margin-left: 15px;
        border-radius: 4px;
      }
    }
    .old-price {
      span {
        color: ${theme.colors.grey};
        font-weight: 500;
        text-decoration: line-through;
      }
    }
  `}
`

const Price: FC = () => {
  return (
    <Container>
      <div className='new-price'>
        <h2>$125.00</h2>
        <span>50%</span>
      </div>
      <div className='old-price'>
        {/* TODO move down strike-through */}
        <span>$250.00</span>
      </div>
    </Container>
  )
}

export default Price
