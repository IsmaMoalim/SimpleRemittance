const database = require('../config/Database')


const getCustomers = async () =>{
    let query = `select c.customerid,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid`
    return database.executeQuery(query)
}

const getCustomer = async (id,type) =>{
    let query =''
    if (type == 'equal'){
     query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.customerid = ${id}`
    }
    else{
     query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
    c.country = co.countryid and co.countryid = cu.countryid and c.customerid != ${id}`
    }
    return database.executeQuery(query)
}

const getRemittance = async () =>{
    let query = `select remittid, customerid, customername,  amount, charge,  paymenttype, remitdate from remittance , customers, payments
    where customers.customerid = remittance.sender and payments.paymentid = remittance.payment`
    return database.executeQuery(query);
}


const createRamittance  = async (user) =>{
    let remittid = user.remittid;
    let send = user.send;
    let recieve = user.recieve;
    let amount = user.amount;
    let convertamount = user.convertamount;
    let charge = user.charge;
    let payment = user.payment;
    let status = user.status;
    let remitdate = user.remitdate

    let query = `insert into remittance values(
        remittance_seq.nextval, '${send}','${recieve}','${amount}','${convertamount}','${charge}','${payment}','${status}',sysdate
    )`;
    return database.executeQuery(query);
}

module.exports = {
    createRamittance,
    getCustomers,
    getCustomer,
    getRemittance
}