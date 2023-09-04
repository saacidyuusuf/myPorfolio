import Classes from './navbar.module.css'
import { FaTimes} from "react-icons/fa";
import Link from 'react-dom'

const MobileNavbar = ({close}) => {
  
  return (
    <div className={Classes.bac}>
    <div className={Classes.times}>
      <FaTimes onClick={() => close} />
    </div>
    <nav>
      <ul className={Classes.mobile}>
        <li>
          <Link to="/" className={Classes.singlelink}>
            work
          </Link>
        </li>
        <li>
          <Link to="/about" className={Classes.singlelink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Classes.singlelink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>

  )
}

export default MobileNavbar