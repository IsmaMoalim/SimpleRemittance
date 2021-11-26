const database = require('../config/Database')

const getAllUsers =  async() =>{
    let query = 'select * from users'
    return await database.executeQuery(query)
}

const getUserEmailAndPasword = async (email, password) => {
    console.log("hello");
    let query = `SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userId
             INNER JOIN ROLES R on UR.roleId = R.ROLEID
    WHERE EMAIL = '${email}'
      AND PASSWORD = '${password}'
      AND ACTIVE = 1`
   return await database.executeQuery(query)                          
}

const getUserByID = async (userid) =>{
    let query = `select * from users where userid = ${userid}`
    return await database.executeQuery(query);
}

const create = async (user) =>{
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 1;
    console.log(user.email);

    let query = `INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
    VALUES (userid_sq.nextval, '${email}', '${password}', '${fullName}',${active})`
    console.log(query);
    return await database.executeQuery(query)
}

const isIDExist = async (userid) =>{
    let query = `select * from users where userid = ${userid}`
    return await database.executeQuery(query);
}

const isEmailExist = async (email) =>{
    let query = `select * from users where email = '${email}'`
    return await database.executeQuery(query);
}

const update = async (user) =>{
    let userid = user.userid
    let fullname = user.fullName;
    let email = user.email;
    let password = user.password;
    let query = `update users set fullname = '${fullname}', email = '${email}', password = '${password}'
                        where userid = ${userid} `
    return await database.executeQuery(query)
 
}

const del = async (userid) =>{
    let query = `delete from users where userid = ${userid}`
    return await database.executeQuery(query)
}

const register = async (user) => {
    let customername = user.customername;
    let phone = user.phone;
    let country = user.countryid;
    let state = user.stateid;
    let city = user.cityid;
    let qry =  `insert into customers values(1,'${customername}','${phone}',${country},${state},${city})`;
    console.log(qry);
    let result = await database.executeQuery(qry);
    return result;

  
  }

  const isPhoneExist = async(phone) =>{
      let query = `select * from customers where phone = '${phone}'`
      return database.executeQuery(query)
  }

module.exports ={
    getAllUsers,
    getUserByID,
    create,
    isIDExist,
    update,
    del,
    getUserEmailAndPasword,
    isEmailExist,
    register,
    isPhoneExist
}