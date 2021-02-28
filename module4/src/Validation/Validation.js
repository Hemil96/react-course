import React from 'react'

const validation = (props) => {
    const limit = 5;
    let low = null;
    let high = null;

    if (props.length <= limit && props.length) {
      low = "The length is too low";
    } else if (props.length > limit){
      high = "The length is too high";
    }

    return (
        <div className="Person"> 
            <p>{low}</p>
            <p>{high}</p>
        </div> 
    )
}
export default validation;