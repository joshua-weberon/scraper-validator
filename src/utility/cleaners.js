const trimCleaner = (data) => data != null ? data.trim() : '';
const quoteCleaner = (data) => data.replace(/^[\"']/,'').replace(/[\"']$/,'');
const commaCleaner = (data) => data.replace(/^[,]/,'').replace(/[,]$/,'');
const numericalCleaner = (data) => data.replace(/[^\d.]/g,'');
const dollarCleaner = (data) => data.replace(/[\$,]/g,'');
const defaultDates = ['','1970-01-01','1/1/1970','01/01/1970','0'];
const isInvalidDate = data => new Date(data) == 'Invalid Date';
const isDefaultOrInvalidDate = data => defaultDates.some(dt => dt == data) || isInvalidDate(data);
const getUTCOffsetDate = (utcInputDateString) => {
    let dt = new Date(utcInputDateString);
    return new Date(dt.getTime()-(dt.getTimezoneOffset()*60*1000));
}
const dateCleaner = (data) => {
    let cleanData = data.replace(/[^\d\/\-]/g,'');
    
    let date = getUTCOffsetDate(cleanData);
    console.log({inputDate:data, cleanData,date});
    return `${date.getUTCMonth()+1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
}
const sqftCleaner = (data) => data.replace('sqft','').trim();
const zeroCleaner = (data) => +data == 0 ? '' : data;

const cleaningPipe = (data,...functions) => {
    let cleanData = data;
    functions.forEach(fun => {
        cleanData = fun(cleanData);
    })
    return cleanData;
}

const apnCleaner = (data) => cleaningPipe(data,trimCleaner);

const inputByCleaner = (data) => cleaningPipe(data,trimCleaner);

const batchIdCleaner = (data) => cleaningPipe(data,trimCleaner,quoteCleaner,commaCleaner,quoteCleaner);

const scraperVersionCleaner = (data) => cleaningPipe(data,trimCleaner,quoteCleaner);


const emptyCleaner = (data) => data;
const streetCleaner = (data) => cleaningPipe(data,trimCleaner,commaCleaner);
const cityCleaner = (data) => cleaningPipe(data,trimCleaner,commaCleaner);
const stateCleaner = (data) => cleaningPipe(data,trimCleaner,commaCleaner);
const zipCleaner = (data) => cleaningPipe(data,trimCleaner,commaCleaner);
const priceCleaner = (data) => cleaningPipe(data,trimCleaner,numericalCleaner);
const bedroomsCleaner = (data) => cleaningPipe(data,trimCleaner,numericalCleaner);
const bathroomsCleaner = (data) => cleaningPipe(data,trimCleaner,numericalCleaner);
const hometypeCleaner = (data) => cleaningPipe(data,trimCleaner);
const soldDateCleaner = (data) => cleaningPipe(data,trimCleaner,dateCleaner);
const soldpriceCleaner = (data) => cleaningPipe(data,trimCleaner,numericalCleaner,zeroCleaner);
const livingareasqftCleaner = (data) => cleaningPipe(data,sqftCleaner,trimCleaner,numericalCleaner);
const EstimateSqftCleaner = (data) => cleaningPipe(data,trimCleaner,numericalCleaner);
const ownernamesCleaner = (data) => cleaningPipe(data,trimCleaner);
const mailingaddressCleaner = (data) => cleaningPipe(data,trimCleaner);

export {
    apnCleaner,
    emptyCleaner,
    streetCleaner,
    cityCleaner,
    stateCleaner,
    zipCleaner,
    priceCleaner,
    bedroomsCleaner,
    bathroomsCleaner,
    hometypeCleaner,
    soldDateCleaner,
    soldpriceCleaner,
    livingareasqftCleaner,
    EstimateSqftCleaner,
    ownernamesCleaner,
    mailingaddressCleaner
}