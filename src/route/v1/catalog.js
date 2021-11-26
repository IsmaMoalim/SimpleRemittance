let express =  require('express');
let router = express.Router();
let authroute = require('./auth.root');
let useroute = require('./user.root');
const operationRoute = require('./operation.route');
const remittanceRoute = require('./remittance.route');

const routePath = [
    {
        path: '/auth',
        route: authroute
    },
    
    {
        path: '/user',
        route: useroute
    },
    {
        path: '/oper',
        route: operationRoute
    },
    {
        path: '/remittance',
        route: remittanceRoute
    }
];

routePath.forEach(d => {

    router.use(d.path,d.route);
});

module.exports = router;
