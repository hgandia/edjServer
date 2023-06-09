const cors = require('cors');

const whitelist = [
    'http://localhost:3000', 
    'https://localhost:3443', 
    'https://estrelladejacob.org',
    'https://estrella-de-jacob.web.app',
    'https://estrelladejacob.org/home',
    'https://www.estrelladejacob.org/',
    'https://www.estrelladejacob.org/home'
];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if(whitelist.indexOf(req.header('Origin')) !== -1){
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
