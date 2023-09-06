import React from "react";
import "./footer.css";


export const Footer = () => {
  const numSquares = 110; // Cantidad de cuadrados en el mosaico

  const squareElements = Array.from({ length: numSquares }, (_, index) => (
    <div key={index} className="square"></div>
  ));

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Solange Cottier</h1>

        

        <div className="footer__social">
          {/* Tus enlaces sociales */}
        </div>

        <span className="footer__copy">&#169; SolangeLilianaCottier. All rights reserved</span>

        <div className="mosaic">{squareElements}</div>
      </div>
    </footer>
  );
};

export default Footer;
