import React from 'react'
import UserInput from './UserInput';

const getFormInput =(form,index,data,setData,config)=> {
    const handleUserInput = (userInput) => {
        let oldForm = data[index].forms[form.keyName];
        let inputCleaner = config[form.keyName] != null ? config[form.keyName].inputCleaner : null;
        let cleanInput = typeof inputCleaner == 'function'
                            ? inputCleaner(userInput)
                            : userInput;
        //let isValid = validator(cleanInput,oldForm.scrapeVal);
        let newForm = {...oldForm,userInput,cleanInput};
        let newData = [...data];
        newData[index].forms[form.keyName] = newForm;
        let isComplete = true;
        Object.keys(newData[index].forms).forEach(key => {
            let form = newData[index].forms[key];
            isComplete = isComplete && form.isValid != null && userInput.trim() != "";
        })
        newData[index].isComplete = isComplete;
        newData[index].isValid = isComplete ? false : newData[index].isValid;
        setData(newData);
    }

    const setFormGood = () => {
        let oldForm = data[index].forms[form.keyName];
        let newForm = {...oldForm,isValid:true};
        let newData = [...data];
        newData[index].forms[form.keyName] = newForm;
        let isComplete = true;
        let isValid = true;
        let isUserInputValid = false;
        Object.keys(newData[index].forms).forEach(key => {
            let form = newData[index].forms[key];
            isUserInputValid = form.isValid == true || (form.isValid == false && form.userInput.trim() != '');
            isValid = isValid && form.isValid == true;
            isComplete = isComplete && form.isValid != null && isUserInputValid;
            
        })
        newData[index].isComplete = isComplete;
        newData[index].isValid = isComplete ? isValid : newData[index].isValid;
        setData(newData);
    }

    const setFormBad = () => {
        let oldForm = data[index].forms[form.keyName];
        if(oldForm.isValid == null || oldForm.isValid == true){
            let newForm = {...oldForm,isValid:false,userInput:'',cleanInput:''};
            let newData = [...data];
            newData[index].forms[form.keyName] = newForm;
            newData[index].isComplete = false;
            newData[index].isValid = null;
            setData(newData);
        }            
    }
    return (
        <span key={index+form.keyName}>
            <UserInput {...form} 
                handleUserInput={handleUserInput} 
                setFormGood={setFormGood}
                setFormBad={setFormBad}
            />
        </span>
    )

}

const getFormInputs = (d,data,setData,config) => {
    return (
        <div key={d.index} className="body-container">
            {
                Object.keys(d.forms).map(f => getFormInput(d.forms[f],d.index,data,setData,config))
            }             
        </div>
    )
}

function Forms({data,setData,config}) {
    return data
                .filter(d => d.isSelected == true)
                .map(d => getFormInputs(d,data,setData,config));
}

export default Forms
