import Button from "../components/Button.js";
import "./Home.css";

export default function Home() {
  return (
    <>
        <div className="pageBanner">
            <div className="textContainer">
                <h1>Creating Websites, Tools, and Games Through Code</h1>
                <p>I build practical web apps, experiment with programming ideas, and develop games on platforms like Roblox and Unity.</p>
            </div>
        </div>
        
        <div className="section">
            <div className="heading">
                <h2>What I Do</h2>
                <p>I enjoy combining web development, game creation, and problem-solving into projects that are actually useful.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="heading">
                        <img src="assets/code_64dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" alt="code_logo" />
                        <h3>Programming</h3>
                    </div>
                    <div className="textContainer">
                        <p> I focus mainly on JavaScript, React, and Roblox Lua, but I like exploring other languages too. I’m building tools for math, physics, and everyday coding tasks that are simple to use and actually make sense.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="heading">
                        <img src="assets/sports_esports_64dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg" alt="sports-esports_logo" />
                        <h3>Game Developement</h3>
                    </div>
                    <div className="textContainer">
                        <p>I create game mechanics and systems in Roblox Lua and experiment with Unity and C#. I focus more on learning and improving rather than producing big titles, but I enjoy making things that are fun and work reliably.</p>
                    </div>
                </div>                    
            </div>
        </div>

        <div className="section">
            <div className="cards">
                <div className="contact-card">
                    <div className="heading">
                        <h3>Want to See What I’m Building?</h3>
                        <p>I’m working on projects ranging from web tools to small games and prototypes. You can check out what I’ve finished or what I’m currently experimenting with.</p>
                    </div>
                    <div className="buttons">
                        <Button link="/portfolio" text="View Portfolio" />
                    </div>
                </div>               
            </div>
        </div>

        <div className="pageContent">

        </div>
    </>
  );
}