const logger = require('../config/logger')
const usermodels = require('../models/user_models')
const { ApiError } = require('../payload/ApiErrors')
const status = require('http-status')
const jwt = require('jsonwebtoken')
const util = require('../utils/util')
const permissions = require('../models/permissions')
const login = async (email, password) => {
   
    logger.info(`Authenticating email ${email} and password ${password}`)
    let user = await usermodels.getUserEmailAndPasword(email, password)
    if (user.length == 0) {
        console.log(user.length);
        throw new ApiError(401, "Email or Password does not match")
    }

    var token = jwt.sign({ userid:user[0].USERID, role:user[0].ROLENAME }, process.env.JWT_SECRET_KEY, { expiresIn: '30s' });
    return { accesstoken: token }
}


// const register = async (user) => {
//     let err = '';
//     let result = await usermodels.create(user);
//     if (!result)
//         err = 'Something went wrong';

//     return {result, err};
// }


const register = async (user) => {
    let err = ''
    let resp = await usermodels.register(user);
    if (!resp) {
        err = 'something went wrong'
    }
    return {resp, err};
  
}

const isPhoneExist = async (phone) => {

    let  resp = await usermodels.isPhoneExist(phone);
    if (resp.length > 0){
        throw new ApiError(401, phone + 'This phone already exists');
    }
    return true;
}

const getpermission = async () =>{
    return await permissions.getAllPermission()
}


module.exports = {
    login,
    register,
    isPhoneExist,
    getpermission
}