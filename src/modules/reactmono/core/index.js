require = require('esm')(module, {await: true});
module.exports.getRoutes = require('./routes').default;