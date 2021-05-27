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
        image: 'street.png'
    },
    "city": {
        label: 'City',
        sourceCleaner: emptyCleaner,
        inputCleaner: cityCleaner,
        image: 'city.png'
    },
}

const summaryConfig = {
    "street": {
        label: 'Street',
        sourceCleaner: emptyCleaner,
        inputCleaner: streetCleaner,
        image: 'street.png'
    },
    "city": {
        label: 'City',
        sourceCleaner: emptyCleaner,
        inputCleaner: cityCleaner,
        image: 'city.png'
    },
    "state": {
        label: 'State',
        sourceCleaner: emptyCleaner,
        inputCleaner: stateCleaner,
        image: 'state.png'
    },
    "zip": {
        label: 'Zip',
        sourceCleaner: emptyCleaner,
        inputCleaner: zipCleaner,
        image: 'zip.png'
    },
    "price": {
        label: 'RMV',
        sourceCleaner: emptyCleaner,
        inputCleaner: priceCleaner,
        image: 'price.png'
    },
    "bedrooms": {
        label: 'Bedrooms',
        sourceCleaner: emptyCleaner,
        inputCleaner: bedroomsCleaner,
        image: 'bedrooms.png'
    },
    "bathrooms": {
        label: 'Bathrooms',
        sourceCleaner: emptyCleaner,
        inputCleaner: bathroomsCleaner,
        image: 'bathrooms.png'
    },
    "livingareasqft": {
        label: 'Living Area Sqft',
        sourceCleaner: emptyCleaner,
        inputCleaner: livingareasqftCleaner,
        image: 'livingareasqft.png'
    },
    "hometype": {
        label: 'Type',
        sourceCleaner: emptyCleaner,
        inputCleaner: hometypeCleaner,
        image: 'hometype.png'
    },
    "soldprice": {
        label: 'Last Sold Price',
        sourceCleaner: emptyCleaner,
        inputCleaner: soldpriceCleaner,
        image: 'soldprice.png'
    },
    "soldDate": {
        label: 'Sold Date',
        sourceCleaner: soldDateCleaner,
        inputCleaner: soldDateCleaner,
        image: 'solddate.png'
    },
    "Estimate/sqft": {
        label: 'Price by sq ft',
        sourceCleaner: emptyCleaner,
        inputCleaner: EstimateSqftCleaner,
        image: 'estimatesqft.png'
    },
    "ownernames": {
        label: 'Owner Name (Public)',
        sourceCleaner: emptyCleaner,
        inputCleaner: ownernamesCleaner,
        image: 'ownernames.png'
    },
    "mailingaddress": {
        label: 'Mailing Address',
        sourceCleaner: emptyCleaner,
        inputCleaner: mailingaddressCleaner,
        image: 'mailingaddress.png'
    },
    "apn": {
        label: 'Parecel Number',
        sourceCleaner: emptyCleaner,
        inputCleaner: apnCleaner,
        image: 'apn.png'
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
