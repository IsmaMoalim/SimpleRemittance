const remittanceModel = require('../models/remittance.model')

/**
 * get customers
 */
const getCustomers = async () =>{
    let resp = await remittanceModel.getCustomers()
    return resp;
}

/**
 * get customerById
 */
const getCustomer = async (id,type) =>{
    let resp = await remittanceModel.getCustomer(id,type)
    return resp;
}

/**
 * get Remittance
 */
const getRemittance = async () =>{
    let resp=  await remittanceModel.getRemittance();
    return resp;
}

/**
 * Create Remittance
 */
const createRamittance = async (user) =>{
    let resp = await remittanceModel.createRamittance(user);
    return resp;

}

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer,
    getRemittance
}