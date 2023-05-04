import React from "react";
import EnjoyTV from "./EnjoyTV";
import EnjoyTV2 from "./EnjoyTV2";
import EnjoyTV3 from "./EnjoyTV3";
import EnjoyT4 from "./EnjoyT4";

const Getstarted = () => {
  return (
    <div>
      <div className="getstarted_background">
        <div className="getstarted_content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="getstarted_login">
            <div className="getstarted_email">
              <input type="email" placeholder="Email address" />
            </div>
            <div className="getstarted_button">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="TV">
        <div className="tv_assembly">
          <div className="tv1">
            <EnjoyTV />
          </div>
          <div className="tv2">
            <EnjoyTV2 />
          </div>
        </div>
        <div className="tv_assembly">
          <div className="tv1">
            <EnjoyTV3 />
          </div>
          <div className="tv2">
            <EnjoyT4 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
