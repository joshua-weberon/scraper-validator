import React from 'react'
import Idinput from './Idinput';

const Userid = ({userName,setUserName}) => {
    return (
        <>
            <Idinput title="User name" value={userName} setValue={setUserName} />
        </>
    )
}

const Batchid = ({batchId,setBatchId}) => {
    return (
        <>
            <Idinput title="Batch ID" value={batchId} setValue={setBatchId} />
        </>
    )
}

function Identification(props) {
    return (
        <div className="identification">
            <Userid {...props} />
            <Batchid {...props} />
        </div>
    )
}

export default Identification