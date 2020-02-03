import React from 'react';

const Experience = (props) => (
    <div className="card">
        <div className="row">
            <div className="col s2 m2">
                <img src={props.avatar} className="responsive-img" alt="img avatar"/>
                {props.name}
            </div>
            <div className="col s10 m10">
                <p><b>{props.title} in <span className="grey darken-2 white-text">{props.company}</span></b></p>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
);

export default Experience;