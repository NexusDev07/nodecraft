const Request = require("../Request.js");

function getPlayerNamesHistory(PlayerName) {

    const request = new Request("PlayerNamesHistory", PlayerName);
    return request.getRequest()

}

module.exports = getPlayerNamesHistory;