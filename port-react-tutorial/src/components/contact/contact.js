import React from 'react';
import UserProfile from "../user_profile/user_profile";

const Contact = () => (
    <div className="contact">
        <div className="row">
            <div className="col m4 s12">
                <UserProfile />
            </div>
            <div className="col m8 s12">
                <h5>Contact</h5>
                <div className="card">
                    <div className="card-content container">
                        <div className="row">
                            <input placeholder="e@mail.com" type="email" label="Email" />
                            <input placeholder="Lorem..." type="Message" label="Email" />
                            <button className="right">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;