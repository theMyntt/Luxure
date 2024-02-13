import womanBrownDress from "../../../assets/img/womanBrownDress.png";
import luxureBag from "../../../assets/img/luxureBag.png";

export default function LeftContentHome() {
  return (
    <div className="contents" id="leftContent">
      <h1>Luxure, a grife imponente.</h1>
      <p>Bem vindos ao nosso site.</p> <br />
      <div className="gray card">
        <img
          src={womanBrownDress}
          alt="Uma mulher com um blazer marrom."
          className="brand-photo"
        />
        <div className="padding-15">
          <h2>Apenas para quem realmente tem poder.</h2> <br />
          <button className="notoutlined">Ver mais</button>
        </div>
      </div>
      <div className="gray card">
        <img
          src={luxureBag}
          alt="Uma mulher segurando a Bag da Luxure."
          className="brand-photo"
        />
        <div className="padding-15">
          <h2>Mostre sua imponência com a Luxure Bag.</h2> <br />
          <button className="notoutlined">Ver mais</button>
        </div>
      </div>
    </div>
  );
}
