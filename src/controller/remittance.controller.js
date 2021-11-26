let status = require('http-status')
let remittanceService = require('../services/remittance.service')
let {ApiError} =require ('../payload/ApiErrors')
let {ApiResponse} = require ('../payload/ApiResponses')

const getCustomers = async (req, res) =>{
    let result = await remittanceService.getCustomers();
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'got it', result))

}

const getCustomer = async (req, res) =>{
    let result = await remittanceService.getCustomer(req.params.id,req.params.type);
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'got it', result))

}

const getRemittance = async (req,res) =>{
    let result = await remittanceService.getRemittance()
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'got remittance', result))

}

const createRamittance = async (req,res) =>{
    let data  = req.body;
let result = await remittanceService.createRamittance(data)
res.status(status.OK)
            .send(new ApiResponse(status.OK, 'Created', result))
}


module.exports = {
    createRamittance,
    getCustomers,
    getCustomer,
    getRemittance
}