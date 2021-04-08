const Request = require("../Request.js");

function getServiceStatus() {

    const request = new Request("ServiceStatus", null);
    return request.getRequest()

}

module.exports = getServiceStatus;