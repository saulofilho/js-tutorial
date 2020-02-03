import React from "react";
import UserProfile from "../user_profile/user_profile";
import Experience from "../experience/experience";
import monkey from "../../images/monkey.jpg";
import dog from "../../images/dog.jpg";


const Home = () => (
  <div className="home">
    <div className="row">
      <div className="col m4 s12">
        <UserProfile />
      </div>
      <div className="col m8 s12">
      <h5 className="subtitle">About Me</h5>
      <div className="card">
        <div className="card-content">
          <p className="card-title">
            <b>Título</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <br />
          <p className="card-title">
            <b>Título</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </div>
      </div>
      <h5 className="subtitle">Experiences</h5>
        <Experience title="Ruby Developer"
          company="Soundcloud"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={dog}
        />
        <Experience title="React Developer"
          company="Twitter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
          avatar={monkey}
        /> 
    </div>
    </div>
  </div>
);

export default Home;
