const Request = require("../Request.js");

function getPlayerSkinHead(PlayerName) {

    const request = new Request("PlayerSkin", PlayerName);
    return request.getRequest()

}

module.exports = getPlayerSkinHead;