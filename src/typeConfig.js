import {
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
} from './utility/cleaners';

const summaryConfig_ = {
    "street": {
        label: 'Street',
        sourceCleaner: emptyCleaner,
        inputCleaner: streetCleaner,
        image: 'street.PNG'
    },
    "city": {
        label: 'City',
        sourceCleaner: emptyCleaner,
        inputCleaner: cityCleaner,
        image: 'city.PNG'
    },
}

const summaryConfig = {
    "street": {
        label: 'Street',
        sourceCleaner: emptyCleaner,
        inputCleaner: streetCleaner,
        image: 'street.PNG'
    },
    "city": {
        label: 'City',
        sourceCleaner: emptyCleaner,
        inputCleaner: cityCleaner,
        image: 'city.PNG'
    },
    "state": {
        label: 'State',
        sourceCleaner: emptyCleaner,
        inputCleaner: stateCleaner,
        image: 'state.PNG'
    },
    "zip": {
        label: 'Zip',
        sourceCleaner: emptyCleaner,
        inputCleaner: zipCleaner,
        image: 'zip.PNG'
    },
    "price": {
        label: 'RMV',
        sourceCleaner: emptyCleaner,
        inputCleaner: priceCleaner,
        image: 'price.PNG'
    },
    "bedrooms": {
        label: 'Bedrooms',
        sourceCleaner: emptyCleaner,
        inputCleaner: bedroomsCleaner,
        image: 'bedrooms.PNG'
    },
    "bathrooms": {
        label: 'Bathrooms',
        sourceCleaner: emptyCleaner,
        inputCleaner: bathroomsCleaner,
        image: 'bathrooms.PNG'
    },
    "livingareasqft": {
        label: 'Living Area Sqft',
        sourceCleaner: emptyCleaner,
        inputCleaner: livingareasqftCleaner,
        image: 'livingareasqft.PNG'
    },
    "hometype": {
        label: 'Type',
        sourceCleaner: emptyCleaner,
        inputCleaner: hometypeCleaner,
        image: 'hometype.PNG'
    },
    "soldprice": {
        label: 'Last Sold Price',
        sourceCleaner: emptyCleaner,
        inputCleaner: soldpriceCleaner,
        image: 'soldprice.PNG'
    },
    "soldDate": {
        label: 'Sold Date',
        sourceCleaner: soldDateCleaner,
        inputCleaner: soldDateCleaner,
        image: 'solddate.PNG'
    },
    "Estimate/sqft": {
        label: 'Price by sq ft',
        sourceCleaner: emptyCleaner,
        inputCleaner: EstimateSqftCleaner,
        image: 'estimatesqft.PNG'
    },
    "ownernames": {
        label: 'Owner Name (Public)',
        sourceCleaner: emptyCleaner,
        inputCleaner: ownernamesCleaner,
        image: 'ownernames.PNG'
    },
    "mailingaddress": {
        label: 'Mailing Address',
        sourceCleaner: emptyCleaner,
        inputCleaner: mailingaddressCleaner,
        image: 'mailingaddress.PNG'
    },
    "apn": {
        label: 'Parecel Number',
        sourceCleaner: emptyCleaner,
        inputCleaner: apnCleaner,
        image: 'apn.PNG'
    }
}

const typeConfig = {
    'Summary': summaryConfig
}

const summaryIdentifiers = [
    'apn', 'scraperVersion'
]

const types = Object.keys(typeConfig);

export { typeConfig, types, summaryIdentifiers };
