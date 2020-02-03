import React from 'react';
import avatar from "../../images/patolino.jpg";

const UserProfile = () => (
    <div className="card">
        <div className="row">
            <div className="col">
                <img src={ avatar } className="responsive-img" alt="avatar"/>
            </div>
        </div>
        <div className="row center-align">
            <h5>Pablito Guacamole</h5>
            <p>Javascript Dev</p>
        </div>
    </div>
);

export default UserProfile;