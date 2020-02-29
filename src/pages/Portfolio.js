import React, { Component } from "react";
import Profile from "../components/Profile";
import projects from "../projects.json";

class Portfolio extends Component {
    state = {
        projects
    };

    render() {
        return(
            <>
            {this.state.projects.map(project => (
                <Profile
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                heroku={project.heroku}
                github={project.github}
                />
            ))}
            </>
        );
    }
}

export default Portfolio;