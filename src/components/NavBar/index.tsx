import { FC } from "react"
import { ReactComponent as IconMenu } from "../../images/icon-menu.svg"
import { ReactComponent as IconCart } from "../../images/icon-cart.svg"
import styled from "styled-components"

const Container = styled.div`
  height: 55px;
  margin: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-navbar {
    display: flex;
    align-items: center;
    h1 {
      font-family: "Poppins", sans-serif;
      margin: 0 12px;
      letter-spacing: -3%;
      font-size: 30px;
      line-height: 21px;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 25px;
    margin-left: 18px;
  }
`

const NavBar: FC = () => {
  return (
    <Container>
      <div className='left-navbar'>
        <IconMenu />
        <h1>sneakers</h1>
      </div>
      <IconContainer>
        <IconCart />
        <img src='image-avatar.png' alt='avatar' />
      </IconContainer>
    </Container>
  )
}

export default NavBar
