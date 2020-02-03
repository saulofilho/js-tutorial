import React from "react";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import { Switch, Route } from "react-router-dom";

const Main = () => (
    <main>
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </main>
);

export default Main;