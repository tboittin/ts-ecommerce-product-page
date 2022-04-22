import { FC } from "react"
import styled, { css } from "styled-components"

import { ReactComponent as IconNext } from "../../images/icon-next.svg"
import { ReactComponent as IconPrevious } from "../../images/icon-previous.svg"

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    left: -25px;
    width: 100vw;
    display: flex;
    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
    .arrows {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        cursor: pointer;
        border-radius: 50%;
        background-color: ${theme.colors.white};
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
        .previous {
          margin-left: -5px;
        }
        }
      }
    }
  `}
`

const Gallery: FC = () => {
  return (
    <Container>
      <img src='./image-product-1.jpg' alt='Sneakers' />
      <div className='arrows'>
        <div className='icon'>
          <IconPrevious className="previous"/>
        </div>
        <div className='icon'>
          <IconNext />
        </div>
      </div>
    </Container>
  )
}

export default Gallery
