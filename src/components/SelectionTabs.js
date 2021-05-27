import React from 'react'

const getClassNameForSelectionTab = (isSelected,isComplete) => {
    let cls = 'tab-btn'
    cls += isComplete ? ' tab-complete' : ' tab-incomplete';
    cls += isSelected ? ' tab-active' : '';
    return cls;
}

const getSelectionTab = (dataObject,setData,data) => {
    let {index,isSelected,isComplete} = dataObject;
    const setSelection = () => {
        let newData = [...data];
        newData.forEach((d,i)=>{
            d.isSelected = i == index;
        })
        setData(newData);
    }
    let clsName = getClassNameForSelectionTab(isSelected,isComplete);
    return (
        <div className={clsName} onClick={setSelection} key={`tab_${index}`}>
            {index + 1}
        </div>
    )
}

function SelectionTabs({data,setData}) {
    return (
        <div className="tab-container">
                {data.map(d => getSelectionTab(d,setData,data))}
        </div>
    )
}

export default SelectionTabs
