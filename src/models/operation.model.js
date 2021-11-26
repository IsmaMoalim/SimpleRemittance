const database = require('../config/Database');

// get countries
const getCountries = async () => {
    let qry = 'select *from country';
    let response = await database.executeQuery(qry); 
    return response;

}

// get currencies
const getCurrencies = async () => {
    let qry = 'select *from currencies';
    let response = await database.executeQuery(qry);
    return response;
}

// get currency
const getCurrency = async (countryId) => {
    let qry = 'select *from currencies where countryid = '+countryId;
    let response = await database.executeQuery(qry);
    return response;
}

// get state
const getState = async (countryId) => {
    let qry = 'select * from state where countryid = '+countryId;
    let response = await database.executeQuery(qry);
    return response;
}

// get city
const getCity = async (countryId,stateId) => {
    let qry = `select *from cities where stateid =${stateId} and countryid = ${countryId}`;
    let response = await database.executeQuery(qry);
    return response;
}

// get status
const getStatus = async () => {
    let qry = `select * from status`;
    let response = await database.executeQuery(qry);
    return response;
}

const getpayment = async () =>{
    let query = `select * from payments`
    return database.executeQuery(query)
}



module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies,
    getpayment

}