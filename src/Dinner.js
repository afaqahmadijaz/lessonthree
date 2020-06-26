import React from 'react';

function Dinner (props) {
    return (
        <div>
            <h1>My fav dish is {props.DinshName}</h1>
    <h1>My fav sweet dish is {props.SweetDish}</h1>
        </div>
    )
}

export default Dinner;