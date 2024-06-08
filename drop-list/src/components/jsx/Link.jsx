import React from "react";

const Link = (props) => {
    return (
        <div id={props.id}>
            <a href={props.referencia}>{props.title}</a>
        </div>
    )
};

export default Link;