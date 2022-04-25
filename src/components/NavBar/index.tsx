import { FC, useState } from "react"
import { ReactComponent as IconMenu } from "../../images/icon-menu.svg"
import { ReactComponent as IconCart } from "../../images/icon-cart.svg"
import { ReactComponent as IconClose } from "../../images/icon-close.svg"
import styled, { css } from "styled-components"

interface toggleMenuProps {
  toggleMenu: boolean
}

const Container = styled.div<toggleMenuProps>`
  ${({ toggleMenu }) => css`
    height: 55px;
    margin: 15px 0;
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

    svg {
      cursor: pointer;
    }

    .dark-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      height: ${toggleMenu ? "100vh" : 0};
      width: ${toggleMenu ? "100vw" : 0};
      background-color: black;
      opacity: ${toggleMenu ? "0.6" : 0};
      animation: ${toggleMenu ? "darken" : "lighten"};
    animation-duration: ${toggleMenu ? "0.5s" : "0.1s"};
    }

    @keyframes darken {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.6;
      }
    }

    @keyframes lighten {
      0% {
        opacity: 0.6;
        height: 100vh;
        width: 100vw;
      }
      99% {
        opacity: 0;
        height: 100vh;
        width: 100vw;
      }
      100% {
        opacity: 0;
        height: 0;
        width: 0;
      }
    }
  `}
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 25px;
    margin-left: 18px;
    cursor: pointer;
  }
`

const MenuNavigation = styled.div<toggleMenuProps>`
  ${({ toggleMenu, theme }) => css`
    background-color: ${theme.colors.white};
    height: 100vh;
    width: 66vw;
    position: absolute;
    top: 0px;
    left: ${toggleMenu ? 0 : "-66vw"};
    z-index: 2;
    animation: ${toggleMenu ? "pop" : "hide"};
    animation-duration: ${toggleMenu ? "0.5s" : "0.1s"};
    .inner-nav {
      margin: 30px 25px;
      ul {
        margin: 55px 0 0 0;
        padding: 0;
        li {
          list-style: none;
          font-weight: bolder;
          margin: 25px 0;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }

    @keyframes pop {
      0% {
        left: -66vw;
      }
      100% {
        left: 0;
      }
    }

    @keyframes hide {
      0% {
        left: 0;
      }
      100% {
        left: -66vw;
      }
    }
  `}
`

const NavBar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <Container toggleMenu={toggleMenu}>
      <div className='left-navbar'>
        <IconMenu onClick={handleToggleMenu} />
        <h1>sneakers</h1>
        <MenuNavigation toggleMenu={toggleMenu}>
          <div className='inner-nav'>
            <IconClose onClick={handleToggleMenu} />
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </MenuNavigation>
      </div>
      <IconContainer>
        <IconCart />
        <img src='image-avatar.png' alt='avatar' />
      </IconContainer>
      <div onClick={handleToggleMenu} className='dark-mask'></div>
    </Container>
  )
}

export default NavBar
