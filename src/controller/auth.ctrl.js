let status = require('http-status');
let { ApiResponse } = require('../payload/ApiResponses')
let { authServices, userServices } = require('../services/index')
let {ApiError} = require('../payload/ApiErrors')
let util = require('../utils/util')
let {permissions} = require ('../models/permissions')
exports.login = util.handleAsync(async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let loginResponse = await authServices.login(email, password);
    console.log(email,password);
    res.status(status.OK).send(new ApiResponse(status.OK, 'login successfully', loginResponse))
});

// exports.register = util.handleAsync( async (req, res) => {

//     let user = req.body;
//     console.log("register user" + user);
//     let {result, err} = await authServices.register(user);
//     if (err){
//         return res.status(status.INTERNAL_SERVER_ERROR)
//             .send(new ApiError(status.INTERNAL_SERVER_ERROR, err));
//     }

//     res.status(status.OK).send(new ApiResponse(status.OK, res.__('registerSuccess'),result));
// });


exports.register = util.handleAsync(async (req, res) => {

   
    let data = req.body;
    let resp = await authServices.isPhoneExist(data.phone);
    if (resp){
    resp = authServices.register(data);
    return res.status(status.OK).send(new ApiResponse(status.OK,'new customer created'));
}
});

exports.getAllPermission = async (req, res) => {
    let result = await authServices.getpermission();
    res.status(status.OK).send(new ApiResponse(status.OK, "ALl Permissions", result));
  };

