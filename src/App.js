import React, {  useState } from 'react';
import { typeConfig, types, summaryIdentifiers } from './typeConfig';
import { convertFileToBase64, getContentInJSON, getConfiguredData } from './utility';
import {useLocalStorage} from './utility/storage';

import FileReader from './components/FileReader';
import SelectionTabs from './components/SelectionTabs';
import Details from './components/Details';
import Main from './components/Main';
import Identification from './components/Identification';
import ValidationError from './components/Details/ValidationError';


const appid = 'scraper_quality';
const userid_key = `${appid}_userid`;

const App = () => {
    const [fileInput, setFileInput] = useState();
    const [data, setData] = useState([]);
    const [type, setType] = useState(types[0]);
    const [config, setConfig] = useState({});
    const [userName,setUserName] = useLocalStorage(null,userid_key);
    const [batchId,setBatchId] = useState('');

    const handleFiles = async (event) => {
        let files = await convertFileToBase64(event.target.files);
        let json = await getContentInJSON(files.base64);
        const data = getConfiguredData(typeConfig[type], summaryIdentifiers, json);
        setConfig(typeConfig[type]);
        setData(data);
    }

    return (
        <div className="app">
            <header>
                <FileReader handleFiles={handleFiles} setFileInput={setFileInput} setBatchId={setBatchId}/>
                <Identification 
                  userName={userName} setUserName={setUserName}
                  batchId={batchId} setBatchId={setBatchId}
                />
                <ValidationError data={data} userName={userName} batchId={batchId} />
                <Details data={data} userName={userName} batchId={batchId}/>
                <SelectionTabs data={data} setData={setData}/>
                
                
            </header>
            <main>
              <Main data={data} setData={setData} config={config} userName={userName} batchId={batchId}/>
            </main>
            
        </div>
    )


}

export default App;