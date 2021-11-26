const remittanceModel = require('../models/remittance.model')

const getCustomers = async () =>{
    let resp = await remittanceModel.getCustomers()
    return resp;
}
const getCustomer = async (id,type) =>{
    let resp = await remittanceModel.getCustomer(id,type)
    return resp;
}

const getRemittance = async () =>{
    let resp=  await remittanceModel.getRemittance();
    return resp;
}

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