import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {

  return (
    <header>
      <div className="header">
        <Link to="/">
        <img className="header__logo" src="/logo.svg" alt="Designed by Freepik" />
        </Link>
        <div className="header__name">수어 번역기</div>
      </div>
    </header>
  )
}

export default Header;