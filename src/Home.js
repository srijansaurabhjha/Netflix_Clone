import React from "react";
import "./Home.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
const Home = () => {
  return (
    <div className="home">
      <div className="home_text">
        <h3>{"Jurassic World: Camp Cretaceous"}</h3>
        <p>
          {
            "Six teens attending an adventure camp on the opposite side of Isla Nublar must band together to survive when dinosaurs wreak havoc on the island."
          }
        </p>
        <div className="home_buttons">
          <Button className="home_button_arrow">
            <PlayArrowIcon /> Play
          </Button>
          <Button className="home_button_info">
            <InfoIcon /> Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
