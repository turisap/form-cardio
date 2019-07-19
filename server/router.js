//const AuthController = require('../controllers/authController');
//const passportService = require('./services/passport');
// const passport = require('passport');
const path = require('path');

// this is ready to use auth middleware for authentication using jwt and mail
// const requireAuthMiddleware = passport.authenticate('jwt', {session : false});
// const requireSigninMiddleware = passport.authenticate('local', {session : false});

// This part for heroku deployment (to serve index.html on '/' get request
const publicPath = path.join(__dirname, '../..', 'public');



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('index tratata');
    });
    app.get('/loading', (request, response, next) => {
        setTimeout(() => {
            response.send('loading');
            next();
        },4000)
    });
};