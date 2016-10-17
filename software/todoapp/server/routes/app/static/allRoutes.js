var path = require('path');

function allRoutes(req, res) {
    res.render(path.join(__dirname, '../../../client/index'));
}

module.exports = allRoutes;