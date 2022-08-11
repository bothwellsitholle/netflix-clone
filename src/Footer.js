import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3 className="Footer-title">Comming Soon</h3>
      <div className="footer-wrapper">
        <div className="footer-a">
          <h3 className="footer-a-title">My Father's Dragon</h3>
          <p className="footer-a-desc">
            Based on the Newbery-winning children's books, this animated film
            follows a young boy who runs away to an island to...{" "}
          </p>
        </div>

        <div className="footer-b">
          <h3 className="footer-b-title"> Gone for Good </h3>
          <p className="footer-b-desc">
            {" "}
            Based on the Newbery-winning children's books, this animated film
            follows a young boy who runs away to an island to rescue...
          </p>
        </div>

        <div className="footer-c">
          <h3 className="footer-c-title">Entrapped </h3>
          <p className="footer-c-desc">
            In this “Trapped” spin-off, police duo Andri and Hinrika investigate
            a murder in the remote highlands when a spiritual group...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
