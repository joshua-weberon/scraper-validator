import React from 'react'
import {validState} from '../../utility/constants';

const getTitles = ({input,forms,isComplete,isValid,index}) => {
    
    let { scrapetimestamp, scraperVersion, nxtcloudpath } = input;
    let fileName = nxtcloudpath.split('/').pop();
    let { totalForms, totalFormsComplete } = Object.keys(forms).reduce((acc, key) => {
        let form = forms[key];
        acc.totalForms += 1;
        acc.totalFormsComplete += form.isValid == true || (form.isValid == false && form.userInput.trim() != '')
            ? 1 : 0;
        return acc;
    }, { totalForms: 0, totalFormsComplete: 0 });
    return(
        <>
            <div key={`fileName_${index}`} className="title-box">{`File name: ${fileName}`}</div>
            <div key={`scraperVersion_${index}`} className="title-box">{`Scraper Version: ${scraperVersion}`}</div>
            <div key={`scrapetimestamp_${index}`} className="title-box">{`Scraped timestamp: ${scrapetimestamp}`}</div>
            <div key={`totalForms_${index}`} className="title-box">{`Total Inputs: ${totalForms}`}</div>
            <div key={`totalFormsComplete_${index}`} className="title-box">{`Total Inputs assessed: ${totalFormsComplete}`}</div>
            <div key={`isComplete_${index}`} className="title-box">{`Complete? ${isComplete}`}</div>
            <div key={`isValid_${index}`} className="title-box">{`Status: ${validState[isValid]}`}</div>
            
        </>
    )

}


function Titles({data}) {
    return (
        <div className="titles-container">
            {data
                .filter(d => d.isSelected)
                .map(d => getTitles(d))
            }
        </div>
    )
}

export default Titles
