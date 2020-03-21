import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun',
    },
    winter: {
        text: 'Burr its cold',
        iconName: 'snowflake',
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon huge icon-left`}/>
            <h1>
                {text}
            </h1>
            <i className={`${iconName} icon huge icon-right`}/>
        </div>
    );
};

export default SeasonDisplay;
