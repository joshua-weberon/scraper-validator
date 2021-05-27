
//import csv from 'csvtojson';

const convertFileToBase64 = (allFiles) => {
    return new Promise((resolve)=> {
        let ef = allFiles;
        let file = ef[0];
        let files = { base64: '', fileList: ef };
        let reader = new FileReader();

        reader.onloadend = e => {
            files.base64 = reader.result;
            //this.props.handleFiles(files);
            resolve(files);
        }
        reader.readAsText(file);
        //reader.readAsDataURL(file);
    })
    
}

const getContentInJSON = (content) => {
    return new Promise((resolve)=> {
        window.csvtojsonV2()
        .fromString(content)
        .then(function(result){
            resolve(result);
        })
    })
    
}

const getConfiguredData = (config,idArray,inputJSON)  => {
    return inputJSON.map((json,index) => {
        let identifier = idArray.reduce((acc,id)=>{
            acc[id] = json[id];
            return acc;
        },{});
        let isSelected = index == 0;
        return Object.keys(config).reduce((acc,key)=>{
            const {label,image,sourceCleaner} = config[key];
            let cleanScrapeVal = typeof sourceCleaner == 'function'
                                    ?sourceCleaner(json[key])
                                    :json[key];
            acc.forms[key] = {
                keyName:key,label,image,userInput:'',
                scrapeVal: cleanScrapeVal, cleanInput:'',
                isValid: null
            };
            return acc;
        },{identifier,index,isValid: null,forms:{},isSelected,isComplete:false,input:json});
    })
}

export {
    convertFileToBase64,
    getContentInJSON,
    getConfiguredData
}