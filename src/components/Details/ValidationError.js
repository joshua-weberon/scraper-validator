import React from 'react'

const getValidationErrorComponent = (data,obj)=> {
    let {isValid,isComplete} = data.reduce((acc,d)=>{
        acc.isValid = acc.isValid && d.isValid == true;
        acc.isComplete = acc.isComplete && d.isComplete == true;
        return acc;
    },{isValid:true,isComplete:true})
    let info = Object.keys(obj)
                .filter(k => obj[k] == true)
    if(!isValid  && isComplete && info.length > 0 ){
        return (
            <div className="error-top">
                {`Please Provide required info: [${info}]`}
            </div>
        )
    }
}

function ValidationError({userName,batchId,data}) {
    let isUserNameEmpty = userName == null || userName.trim() === '';
    let isBatchIdEmpty = batchId == null || batchId.trim() === '';
    let flag = data.length > 0;
    let ret;
    if(flag && (isUserNameEmpty || isBatchIdEmpty)){
        let obj = {'User name':isUserNameEmpty,'Batch ID':isBatchIdEmpty};
        ret = getValidationErrorComponent(data,obj);
    }
    return ret == null ? <></> : ret;
}

export default ValidationError
