import React from 'react';
import Titles from './Titles';
import Buttons from './Buttons';


function Details(props) {
    return (
        <div className="header-container">
            <Titles {...props} />
            <Buttons {...props} />
            
        </div>
    )
}

export default Details