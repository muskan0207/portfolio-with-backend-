import React from "react";
import { useNavigate } from "react-router-dom";
import bitmoji from "../../assets/images/bitmoji.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid main-page">
      <div className="row w-100 justify-content-center align-items-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 d-flex justify-content-center">
          <div className="bitmoji-container" onClick={() => navigate("/home")}>
            <img src={bitmoji} alt="Bitmoji" className="bitmoji-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
