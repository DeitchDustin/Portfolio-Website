import './header.css';
import HeaderImage from '../../assets/header.jpg';
import data from './data'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait"/>
        </div>
        <h3>Dustin Deitch</h3>
        <p>
          ***Intro Paragraph Placeholder***
        </p>
        <a href="#contact">Lets Talk</a>
        <a href="#portfolio">My Work</a>
      </div>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        }
      </div>
    </header>
  )
}

export default Header;