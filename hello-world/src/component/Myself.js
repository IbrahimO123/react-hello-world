import React from 'react';

function Myself(props) {
    
    return (
        <div>
            My ways isn't as clean as it should be, am a sinner, i just hope my sins are forgiven for me will still do more.
            <p>
                My name is {props.user.name} {props.user.surname}, am a {props.user.job} in International Breweries Plc, currently living in {props.user.location}. My state of origin is {props.user.origin} 
            </p>
        </div>)
}

export default Myself 