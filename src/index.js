let express = require('express');
let status = require('http-status')
require('dotenv').config()
let app = express();
let port = process.env.PORT;
let catalog =  require('./route/v1/catalog')
let bodyparser = require('body-parser');
app.use(bodyparser.json());
let morganmiddleware = require('./middleware/morgan');
let {ApiError} = require('./payload/ApiErrors')
let i18n  = require('i18n')
let cookieParser = require('cookie-parser')
app.use(cookieParser());


/**
 * Access-Control-Allow-Origin
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(i18n.init)

/**
 * Locale Configuration
 */
 i18n.configure({
    // setup some locales - other locales default to en silently
    locales: ['en', 'es', 'so'],

    // you may alter a site wide default locale
    defaultLocale: 'en',

    // sets a custom cookie name to parse locale settings from
    cookie: 'currentLocale',

    // where to store json files - defaults to './locales'
    directory: __dirname + '/locales'
});

/**
 * Middlewares
 */
app.use(morganmiddleware)
app.use('/v1', catalog);

app.use((req,res,next) =>{

    let state = status.BAD_REQUEST;
    let message = "Not Found"
    let error = 'Not Found'

   res.status(404).send( new ApiError(state, message, error ));
});


app.use((err, req, res, next) => {
    res.status(401).send(err)
})


app.listen(port, (req,res) =>{

    console.log('This app is running on port '+process.env.PORT);

});