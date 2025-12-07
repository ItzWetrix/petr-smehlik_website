import { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {

  const [selected, setSelected] = useState("programming"); 
  // default = programming (you can change this)

  return (
    <>
      <div className="section">
        <div className="heading">
          <h2>My Portfolio</h2>
          <p>A showcase of my work in programming and game development</p>
        </div>

        <div className="switcher">
            <button 
                className={selected === "programming" ? "active" : ""} 
                onClick={() => setSelected("programming")}
            >
                <img src="assets/code_64dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" alt="code_logo" />
                Programming
            </button>

            <button 
                className={selected === "games" ? "active" : ""} 
                onClick={() => setSelected("games")}
            >
                <img src="assets/sports_esports_64dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" alt="games_logo" />
                Game Development
            </button>
        </div>

        {/* THIS is the dynamic content area */}
        <div className="projectsContentArea">
          {selected === "programming" && (
            <div className="programmingContent">
              <p>Your programming projects cards will show here.</p>

            </div>
          )}

          {selected === "games" && (
            <div className="gameContent">
              <p>Your game development projects cards will show here.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}