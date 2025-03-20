import '../styles/header.css'

const Header = () => {

  return (
    <header>
      <div className="header">
        <img className="header__logo" src="/logo.svg" alt="Designed by Freepik" />
        <div className="header__name">수어 번역기</div>
      </div>
    </header>
  )
}

export default Header;