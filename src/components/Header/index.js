import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const remove = () => {
    Cookies.remove('jwt-token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-el">
      <Link to="/" className="link-el">
        <img
          srcc="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          className="kt"
          alt="website logo"
        />
      </Link>
      <button type="button" className="rr" onClick={remove}>
        LogOut
      </button>
    </nav>
  )
}
export default withRouter(Header)
