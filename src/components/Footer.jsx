import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  color: white;
  background-color: #007bff;
  padding-top: 30px;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: left;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <div className="container">
        <div className="row">
          {/* column */}
          <div className="col-12 col-md-4 mb-4">
            <h4>Exch Stack</h4>
            <span>Analytics with Easy Ways</span>
            <br></br>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h4>Contact Us</h4>
            <span>
              contact@exchstack.com
              <br></br>
              021 - 222 - 3334
              <br></br>
              Jakarta, Indonesia
              <br></br>
            </span>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h4>Our Social Media</h4>
            <span>
              <a href="https://instagram.com" className="text-white">
                <img src="img/instagram.png" width="30px" alt="instagram"></img> Exch - Stack
              </a>
              <br></br>
              <a href="https://facebook.com" className="text-white">
                <img src="img/facebook.png" width="25px" alt="facebook"></img> Exch Stack
              </a>
            </span>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;