import React from 'react'

function FileReader(props) {
    return (
        <>
          <input type='file'
            onChange={props.handleFiles}
            accept=".csv"
            className='react-file-reader-input'
            ref={props.setFileInput}
        />  
        </>
    )
}

export default FileReader
