import Logo from "../../assets/icon/logo.png";

import "./css/style.css"

export default function Masterpage() {
  return (
    <div className="masterpage">
      <img src={Logo} alt="logo" id="logo"/>
      <div className="nav">
        <ul className="options">
          <li><a href="#home">Masculina</a></li>
          <li><a href="#about">Feminina</a></li>
          <li><a href="#contact">Kids</a></li>
        </ul>
      </div>
    </div>
  )
}