import { FC } from "react"
import  { ReactComponent as IconMenu} from '../../images/icon-menu.svg'
import  { ReactComponent as IconCart} from '../../images/icon-cart.svg'

const NavBar: FC = () => {
    return (
        <div>
            <IconMenu />
            <div>sneakers</div>
            <IconCart />
            <img src="image-avatar.png" alt="avatar" />
        </div>
    )
}

export default NavBar