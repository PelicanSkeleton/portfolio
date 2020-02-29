import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Profile(props) {
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Project: </strong> {props.name}
                    </li>
                    <li>
                        <strong>Description: </strong>{props.description}
                    </li>
                    <li>
                        <strong>Heroku: </strong><Link target="_blank" to={`//${props.heroku}`}>GO!</Link>
                    </li>
                    <li>
                        <strong>Github: </strong><Link target="_blank" to={`//${props.github}`}>GO!</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;