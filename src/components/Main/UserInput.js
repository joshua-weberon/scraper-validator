import React from 'react'
import {validState} from '../../utility/constants';

const getClassNameForGoodBtn = (isValid) => {
    let className = 'status-btn good-btn';
    if(isValid == true){
        className += ' active';
    }
    return className;
}

const getClassNameForBadBtn = (isValid) => {
    let className = 'status-btn bad-btn';
    if(isValid == false){
        className += ' active';
    }
    return className;
}

const UserInput = (props) => {
    
    const handleChange = (event) => {
        let val = event.target.value;
        props.handleUserInput(val);
    }

    const getUserInputConditionally = (isValid) => {
        if(isValid == false){
            return getUserInputComponent();
        }
    }

    const getUserInputComponent = () => {
       return (
        <div className="correction-box">
            <label>Correct Value</label>
            <input className="correct-input" type="text" value={props.userInput} onChange={handleChange} />
        </div>
       )
    }

    return (
        
        <div className="content-container">
            <div className="content-title-container">
                <span className="content-title">{props.label}</span>
                <span className="content-status">{validState[props.isValid]}</span>
            </div>
            <div className="content-body-container">
                <div className="img">
                    <img src={`img/${props.image}`} alt=""></img>
                </div>
                
                <div className="value-box">
                    Value: <span className="value">{props.scrapeVal}</span>
                </div>
                <div className="row-buttons-container">
                    <div 
                        className={getClassNameForGoodBtn(props.isValid)} 
                        onClick={props.setFormGood}>
                        Good
                    </div>
                    <div 
                        className={getClassNameForBadBtn(props.isValid)} 
                        onClick={props.setFormBad}>
                        BAD
                    </div>
                </div>
                {getUserInputConditionally(props.isValid)}
            </div>
        </div>
        
    )
}

export default UserInput
