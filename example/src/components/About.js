import React from 'react';

const About = (props) => {
    var userName = props.match.params.who || "who"
    return (
        <div>
            <h1>About {userName}</h1>
            <p>About US page body content</p>
        </div>
    );
}

export default About;
