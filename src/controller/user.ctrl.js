let status = require('http-status');
let logger = require('../config/logger');
let { handleAsync } = require('../utils/util')
let  {userServices}  = require('../services');
let { ApiResponse } = require('../payload/ApiResponses');

/**
 * get All Users
 */
const getAllUsers = async (req, res) => {
  let result = await userServices.getAllUsers();
  res.status(status.OK).send(new ApiResponse(status.OK, "waa la helay", result));
};

/**
 * get UserById
 */
const getuserByID = handleAsync( async (req, res) => {
  let  resp = await userServices.isIDExist(req.params.userid)
  if(resp) {
    let  resp = await userServices.getuser(req.params.userid)
     return res.status(status.OK).send(new ApiResponse(status.OK, 'got it', resp))
    }
});

/**
 * Create User
 */
const createUser = handleAsync( async (req, res) => {
  let data = req.body;
  console.log(data);
  logger.info('creating the user...')
  let  resp = await userServices.isEmailExist(data.email)
  if(resp) {
  let  resp = await userServices.createuser(data)
   return res.status(status.OK).send(new ApiResponse(status.OK, 'Created Succesfully', resp))
  }
 });


 /**
 * Update User
 */
const updateUser = handleAsync( async (req, res) => {
  let data = req.body;
  logger.info('Updating the user...')
  let  resp = await userServices.isIDExist(data.userid)
  if(resp) {
  let  resp = await userServices.updateUser(data)
   return res.status(status.OK).send(new ApiResponse(status.OK, 'Updated Succesfully', resp))
  }
});

/**
 * Delete User
 */
const deleteUser = handleAsync( async (req, res) => {
 let  resp = await userServices.isIDExist(req.params.userid)
  if(resp) {
  let  resp = await userServices.deleteuser(req.params.userid)
   return res.status(status.OK).send(new ApiResponse(status.OK, 'Deleted Succesfully', resp))
  }
});

module.exports = {

  getAllUsers,
  getuserByID,
  createUser,
  updateUser,
  deleteUser,
}
