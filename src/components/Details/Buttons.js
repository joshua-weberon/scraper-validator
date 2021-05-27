import React from 'react'

const getInvalidForms = (obj) => {
    let {recordid,apn,scraperVersion,crawltimestamp,scrapetimestamp,filepath} = obj.input;
    let idObj = {recordid,apn,scraperVersion,crawltimestamp,scrapetimestamp,filepath};
    return Object.keys(obj.forms).reduce((acc,key)=>{
        let form = obj.forms[key];
        if(form.isValid == false){
            //acc[`scrape_${key}`] = form.scrapeVal;
            //acc[`user_input_${key}`] = form.userInput;
            //acc[`clean_input_${key}`] = form.cleanInput;
            let {scrapeVal,userInput,cleanInput} = form;
            acc.push({...idObj,field:key,scrapeVal,userInput,cleanInput});
        }            
        return acc;
    },[])
    //},{recordid,apn,scraperVersion,crawltimestamp,scrapetimestamp,filepath})
}

const getInvalids = (data) => {
    return data.reduce((acc,d)=>{
        if(d.isValid == false){
            acc.push(...getInvalidForms(d));
        }
        return acc;
    },[])
}

const getHeaderRows = (invalids) => {
    let index = -1;
    return invalids.reduce((acc,curr)=>{
        Object.keys(curr).forEach(key => {
            acc[key] = acc[key] == null ? ++index : acc[key];
        })
        return acc;
    },{});

}

const getErrorCSV = (data) => {
    let invalids = getInvalids(data);
    let headerRows = getHeaderRows(invalids);
    let firstRow = Object.keys(headerRows).reduce((acc,key)=>{
        acc[[headerRows[key]]] = key;
        return acc;
    },[])
    let csvRows = invalids.reduce((acc,curr)=>{
        let row = [];
        Object.keys(curr).forEach(key => {
            //acc[key] = acc[key] == null ? ++index : acc[key];
            row[headerRows[key]] = curr[key];
        })
        acc.push(row);
        return acc;
    },[firstRow])
    let csvContent = "data:text/csv;charset=utf-8," 
                        + csvRows.map(e => e.join(",")).join("\n");
    return encodeURI(csvContent);
}

const getSubmitButton = (data,userName,batchId) => {
    let isUserNameEmpty = userName == null || userName.trim() === '';
    let isBatchIdEmpty = batchId == null || batchId.trim() === '';
    let flag = data.length > 0 && !isUserNameEmpty && !isBatchIdEmpty;
    let {isValid,isComplete} = data.reduce((acc,d)=>{
        acc.isValid = acc.isValid && d.isValid == true;
        acc.isComplete = acc.isComplete && d.isComplete == true;
        return acc;
    },{isValid:flag,isComplete:flag})
    if(!isValid  && isComplete ){
        return <a className="title-button anchor-button" href={getErrorCSV(data)} download="invalid_csv.csv">Get CSV with invalids</a>
    }
}

function Buttons({data,userName,batchId}) {
    return (
        <div className="buttons-container">
            {getSubmitButton(data,userName,batchId)}
        </div>
    )
}

export default Buttons
